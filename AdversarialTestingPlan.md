# Adversarial Testing Plan
## Penetration Testing & Attack Simulation — Supabase Backend Integration

**Project:** Ash Portfolio — Project Management Backend  
**Date:** 2026-07-25  
**Scope:** Full stack — frontend, API, database, file storage, authentication  
**Methodology:** OWASP Testing Guide v4 + Custom Application Logic  
**Environment:** Staging + Local (never production)

---

## Table of Contents

1. [Scope & Rules of Engagement](#1-scope--rules-of-engagement)
2. [Reconnaissance](#2-reconnaissance)
3. [Authentication Attacks](#3-authentication-attacks)
4. [Authorization Attacks](#4-authorization-attacks)
5. [Injection Attacks](#5-injection-attacks)
6. [File Upload Attacks](#6-file-upload-attacks)
7. [Client-Side Attacks](#7-client-side-attacks)
8. [API Abuse](#8-api-abuse)
9. [Business Logic Attacks](#9-business-logic-attacks)
10. [Reporting Template](#10-reporting-template)

---

## 1. Scope & Rules of Engagement

### 1.1 In-Scope Targets

| Target | URL/Endpoint | Notes |
|--------|-------------|-------|
| Production site | `https://ashfaaqkazi.ca` | Read-only attacks only |
| Staging site | Vercel preview URL | Full testing permitted |
| Supabase REST API | `https://xxxx.supabase.co/rest/v1/` | Anon key only |
| Supabase Storage | `https://xxxx.supabase.co/storage/v1/` | Public bucket URLs |

### 1.2 Out-of-Scope (Forbidden)

- ❌ DoS/DDoS attacks
- ❌ Social engineering
- ❌ Physical attacks
- ❌ Attacks on other Supabase customers
- ❌ Brute force with > 100 requests/minute
- ❌ Upload of actual malware to production

### 1.3 Testing Tools

| Tool | Purpose |
|------|---------|
| Burp Suite Community | HTTP proxy, request modification |
| OWASP ZAP | Automated vulnerability scanning |
| sqlmap | SQL injection testing |
| Postman/curl | Manual API testing |
| Browser DevTools | Client-side inspection |
| Supabase Dashboard | Database state verification |

---

## 2. Reconnaissance

### 2.1 Information Gathering

| Test ID | Technique | Command/Method | Expected Finding |
|---------|-----------|---------------|------------------|
| RECON-001 | Subdomain enumeration | `subfinder -d ashfaaqkazi.ca` | Only `www` and apex |
| RECON-002 | Tech stack detection | Wappalyzer, BuiltWith | React, Vite, Supabase |
| RECON-003 | Supabase project ID | Check network requests for `supabase.co` | Exposed URL is expected |
| RECON-004 | API schema discovery | `GET /rest/v1/` with Accept: application/openapi+json | May expose table names |
| RECON-005 | robots.txt analysis | `GET /robots.txt` | Should exist, restrict admin paths |
| RECON-006 | Sitemap inspection | `GET /sitemap.xml` | Only public pages |
| RECON-007 | Git repository | `/.git/HEAD` | Should return 404 |
| RECON-008 | Environment file | `/.env`, `/.env.local` | Should return 404 |

### 2.2 Findings Log

| Test ID | Finding | Risk | Status |
|---------|---------|------|--------|
| | | | |

---

## 3. Authentication Attacks

### 3.1 Magic Link Interception

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| AUTH-001 | Predictable token | Analyze magic link URL format | Random UUID, not sequential | |
| AUTH-002 | Token reuse | Use same magic link twice | Second use rejected | |
| AUTH-003 | Expired token use | Use link after 1 hour | Expired, rejected | |
| AUTH-004 | Token brute force | Guess token format | Rate limited, not feasible | |
| AUTH-005 | Man-in-the-middle | Intercept HTTP (not HTTPS) | HTTPS enforced, HSTS | |

### 3.2 Session Attacks

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| AUTH-006 | Session fixation | Obtain pre-login token, login, check if changed | Token rotates on auth | |
| AUTH-007 | LocalStorage theft | XSS payload to read `sb-xxx-auth-token` | CSP + input sanitization | |
| AUTH-008 | Session replay | Copy localStorage to another browser | Should work (expected) | |
| AUTH-009 | Logout bypass | Delete localStorage manually, try API calls | 401 after token expiry | |
| AUTH-010 | Concurrent sessions | Login from 2 devices simultaneously | Both valid (expected) | |

### 3.3 Brute Force & Rate Limiting

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| AUTH-011 | Magic link spam | Request 50 magic links rapidly | Rate limited after 3-5 | |
| AUTH-012 | Login enumeration | Test if email exists via error messages | Generic error: "Check email" | |
| AUTH-013 | Timing analysis | Measure response time for valid vs invalid email | Consistent timing | |

---

## 4. Authorization Attacks

### 4.1 RLS Bypass Attempts

| Test ID | Attack | Payload/Method | Expected Defense | Result |
|---------|--------|---------------|------------------|--------|
| AUTHZ-001 | Direct table access | `GET /rest/v1/projects?select=*` without auth | Only published returned | |
| AUTHZ-002 | Status filter bypass | `GET /projects?status=eq.draft` as anonymous | Empty array (RLS blocks) | |
| AUTHZ-003 | ID enumeration | `GET /projects?id=eq.{uuid}` for draft projects | 404 or empty | |
| AUTHZ-004 | Column enumeration | `GET /projects?select=secret_column` | 400 (column doesn't exist) | |
| AUTHZ-005 | Deleted data access | `GET /projects?deleted_at=not.is.null` | Empty (soft delete not implemented) | |
| AUTHZ-006 | Cross-user file access | Access file URL for private project | 403 or 404 | |
| AUTHZ-007 | Embedding bypass | `GET /projects?select=*,project_files(*)` as anon | Only public files nested | |

### 4.2 Privilege Escalation

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| AUTHZ-008 | Self-promote to admin | Modify JWT payload claims | Signature invalid, rejected | |
| AUTHZ-009 | SQL in RLS policy | Exploit policy logic | RLS uses parameterized queries | |
| AUTHZ-010 | Create user via API | `POST /auth/v1/signup` | Blocked by allowlist trigger | |

---

## 5. Injection Attacks

### 5.1 SQL Injection

| Test ID | Vector | Payload | Target | Expected Defense | Result |
|---------|--------|---------|--------|------------------|--------|
| SQLI-001 | Slug parameter | `test' OR '1'='1` | `/projects?slug=eq.` | Parameterized query | |
| SQLI-002 | Order parameter | `title; DROP TABLE projects;--` | `?order=` | Whitelist only allowed columns | |
| SQLI-003 | Filter operator | `?title=eq.''; SELECT * FROM auth.users;--` | Query string | Rejected by PostgREST | |
| SQLI-004 | RPC parameter | `"'; DELETE FROM projects WHERE '1'='1"` | `rpc/search_projects` | Function parameterization | |
| SQLI-005 | Array injection | `?tags=cs.{"'); DROP TABLE--"}` | Array filter | Proper escaping | |

### 5.2 NoSQL Injection (if applicable)

Not applicable — PostgreSQL relational database.

### 5.3 Command Injection

| Test ID | Vector | Payload | Target | Expected Defense | Result |
|---------|--------|---------|--------|------------------|--------|
| CMDI-001 | File name | `test.pdf; rm -rf /` | Upload filename | Sanitization | |
| CMDI-002 | Slug field | `test; cat /etc/passwd` | Project slug | Regex validation | |

---

## 6. File Upload Attacks

### 6.1 Malicious File Uploads

| Test ID | Attack | File | Steps | Expected Defense | Result |
|---------|--------|------|-------|------------------|--------|
| FILE-001 | PHP shell | `shell.php` renamed to `shell.pdf` | Upload with .pdf extension | MIME-type + extension check | |
| FILE-002 | Double extension | `malicious.pdf.php` | Upload | Extension parsing | |
| FILE-003 | Null byte injection | `shell.php%00.pdf` | Upload | String termination handled | |
| FILE-004 | SVG XSS | `xss.svg` with `<script>` | Upload to images | SVG not in allowlist | |
| FILE-005 | HTML phishing | `phishing.html` renamed to `.pdf` | Upload | MIME mismatch rejection | |
| FILE-006 | EXE disguise | `trojan.exe` renamed to `report.pdf` | Upload | MIME-type check fails | |
| FILE-007 | Zip bomb | `42.zip` (zip bomb) | Upload | Size limit (50MB) | |
| FILE-008 | Path traversal | `../../../etc/passwd.pdf` | Upload | Filename sanitized | |
| FILE-009 | Polyglot file | File that's valid PDF + JS | Upload | File type validation | |

### 6.2 Storage Abuse

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| FILE-010 | Bucket enumeration | `GET /storage/v1/bucket/` | 403 (list requires auth) | |
| FILE-011 | File overwrite | Upload to existing path | UUID in path prevents | |
| FILE-012 | Storage DoS | Upload maximum files repeatedly | Rate limiting, quotas | |
| FILE-013 | Hotlink abuse | Use image URL on other site | Acceptable (public images) | |

---

## 7. Client-Side Attacks

### 7.1 Cross-Site Scripting (XSS)

| Test ID | Vector | Payload | Location | Expected Defense | Result |
|---------|--------|---------|----------|------------------|--------|
| XSS-001 | Stored XSS | `<script>alert('XSS')</script>` | Project title | React auto-escapes | |
| XSS-002 | Stored XSS | `<img src=x onerror=alert(1)>` | Project description | DOMPurify sanitization | |
| XSS-003 | Reflected XSS | `?search=<script>alert(1)</script>` | Search page | URL encoding | |
| XSS-004 | DOM-based XSS | `javascript:alert(1)` | External URL link | URL validation | |
| XSS-005 | Markdown XSS | `[clickme](javascript:alert(1))` | Description markdown | Markdown parser sanitizes | |
| XSS-006 | SVG upload | `<svg onload=alert(1)>` | Image upload | SVG not allowed | |

### 7.2 Cross-Site Request Forgery (CSRF)

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| CSRF-001 | State-changing GET | Craft URL that triggers delete | No state changes via GET | |
| CSRF-002 | POST with cookies | Form POST from evil.com | No cookies used (token in header) | |
| CSRF-003 | Supabase token reuse | Use stolen token from other origin | CORS blocks | |

### 7.3 Clickjacking

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| CLICK-001 | Admin dashboard iframe | Embed `/admin` in iframe | X-Frame-Options: DENY | |
| CLICK-002 | Invisible overlay | Overlay buttons on public site | No sensitive actions on public | |

---

## 8. API Abuse

### 8.1 Rate Limit Testing

| Test ID | Attack | Rate | Duration | Expected Defense | Result |
|---------|--------|------|----------|------------------|--------|
| ABUSE-001 | API spam | 1000 req/min | 1 min | 429 Too Many Requests | |
| ABUSE-002 | Slowloris | Slow HTTP headers | 5 min | Connection timeout | |
| ABUSE-003 | Large response | `select=*` on 1000 rows | Single | Default limit: 1000 rows | |

### 8.2 Data Exfiltration

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| ABUSE-004 | Mass download | Script to download all files | No bulk endpoint, rate limited | |
| ABUSE-005 | Data scraping | Scrape all published projects | Public data, acceptable | |
| ABUSE-006 | Enumeration | Iterate all UUIDs for projects | UUID space too large | |

### 8.3 Resource Exhaustion

| Test ID | Attack | Payload | Expected Defense | Result |
|---------|--------|---------|------------------|--------|
| ABUSE-007 | Deep nesting | `select=*,project_files(*,project(*))` | Max embedding depth | |
| ABUSE-008 | Large query | `?limit=100000` | Supabase hard limit | |
| ABUSE-009 | Complex filter | `?and=(a.eq.1,b.eq.2,...x20)` | Query complexity limit | |

---

## 9. Business Logic Attacks

### 9.1 Data Integrity

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| LOGIC-001 | Negative display_order | Set `display_order: -999999` | INTEGER allows, but UI handles | |
| LOGIC-002 | Future dates | Set `start_date: 2050-01-01` | Valid date, acceptable | |
| LOGIC-003 | Circular reference | Create self-referencing project | No self-reference field | |
| LOGIC-004 | Duplicate slugs | Race condition: create 2 with same slug | Unique constraint | |
| LOGIC-005 | HTML in markdown | Inject raw HTML in description | DOMPurify strips | |

### 9.2 Workflow Abuse

| Test ID | Attack | Steps | Expected Defense | Result |
|---------|--------|-------|------------------|--------|
| LOGIC-006 | Draft visibility | Access draft via direct URL | 404 (RLS) | |
| LOGIC-007 | Archived resurrection | Change archived to published | Auth required, acceptable | |
| LOGIC-008 | File without project | Upload file, don't associate | Orphan cleanup (manual) | |
| LOGIC-009 | Mass delete | Delete all projects quickly | Auth required, acceptable | |

---

## 10. Reporting Template

### 10.1 Vulnerability Report Format

```markdown
## VULN-XXX: [Title]

**Severity:** Critical / High / Medium / Low / Informational
**Category:** Authentication / Authorization / Injection / XSS / etc.
**Status:** Open / In Progress / Resolved / Risk Accepted

### Description
[Clear description of the vulnerability]

### Steps to Reproduce
1. Step one
2. Step two
3. Step three

### Proof of Concept
[Code, screenshot, or curl command]

### Impact
[What could an attacker achieve?]

### Affected Components
- Component 1
- Component 2

### Remediation
[How to fix the issue]

### References
- OWASP Link
- CWE Entry
```

### 10.2 Severity Scoring (CVSS v3.1)

| Severity | Score | Response SLA |
|----------|-------|-------------|
| Critical | 9.0-10.0 | 4 hours |
| High | 7.0-8.9 | 24 hours |
| Medium | 4.0-6.9 | 72 hours |
| Low | 0.1-3.9 | 1 week |
| Informational | 0.0 | Document only |

### 10.3 Test Execution Summary

| Date | Tester | Tests Run | Passed | Failed | Vulns Found |
|------|--------|-----------|--------|--------|-------------|
| | | | | | |

---

## Appendix A: Test Payloads

### XSS Payloads

```html
<script>alert('XSS')</script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
javascript:alert(1)
" onmouseover="alert(1)
```

### SQL Injection Payloads

```sql
' OR '1'='1
'; DROP TABLE projects; --
1 UNION SELECT * FROM auth.users
' AND 1=1 --
```

### File Names

```
shell.php.pdf
../../../etc/passwd
file.pdf.exe
<script>alert(1)</script>.pdf
```

---

## Appendix B: Automation Script

```bash
#!/bin/bash
# adversarial_scan.sh - Quick automated checks

BASE_URL="https://staging-url.vercel.app"
SUPABASE_URL="https://xxxx.supabase.co"
ANON_KEY="eyJ..."

echo "=== RECONNAISSANCE ==="
curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/.env"
curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/.git/HEAD"
curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/robots.txt"

echo "=== AUTH TESTS ==="
curl -s -X POST "$SUPABASE_URL/auth/v1/magiclink" \
  -H "apikey: $ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

echo "=== RLS TESTS ==="
curl -s "$SUPABASE_URL/rest/v1/projects?status=eq.draft" \
  -H "apikey: $ANON_KEY"

echo "=== SQLI TESTS ==="
curl -s "$SUPABASE_URL/rest/v1/projects?slug=eq.test'OR'1'='1" \
  -H "apikey: $ANON_KEY"
```

---

*Document Version: 1.0*  
*Last Updated: 2026-07-25*  
*Testing Window: Post-implementation, before production launch*  
*Retest Schedule: Quarterly or after major changes*
