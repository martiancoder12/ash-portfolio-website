# Security Log
## Security Measures & Hardening Guide — Supabase Backend Integration

**Project:** Ash Portfolio — Project Management Backend  
**Date:** 2026-07-25  
**Classification:** Internal  
**Owner:** Ashfaaq Kazi

---

## Table of Contents

1. [Threat Model](#1-threat-model)
2. [Authentication Security](#2-authentication-security)
3. [Authorization & RLS](#3-authorization--row-level-security)
4. [Data Protection](#4-data-protection)
5. [File Storage Security](#5-file-storage-security)
6. [API Security](#6-api-security)
7. [Frontend Security](#7-frontend-security)
8. [Infrastructure Security](#8-infrastructure-security)
9. [Secrets Management](#9-secrets-management)
10. [Incident Response Plan](#10-incident-response-plan)
11. [Security Checklist](#11-security-checklist)

---

## 1. Threat Model

### 1.1 Assets

| Asset | Sensitivity | Location |
|-------|-------------|----------|
| Project metadata (titles, descriptions) | Public | Supabase DB |
| Project files (PPT, DOCX, PDF) | Public / Private | Supabase Storage |
| Admin dashboard access | Critical | Supabase Auth |
| Supabase service role key | Critical | Environment variables |
| User email addresses | Private | Supabase Auth |

### 1.2 Threat Actors

| Actor | Motivation | Capability |
|-------|------------|------------|
| Script kiddies | Defacement, reputation damage | Low (automated tools) |
| Competitors | Steal project files, content | Medium |
| Bots/crawlers | Scraping, DDoS | Low-Medium |
| Determined attacker | Full system compromise | High |

### 1.3 STRIDE Analysis

| Threat | Category | Mitigation |
|--------|----------|------------|
| Unauthorized project modification | Tampering | RLS + Auth |
| Fake admin login | Spoofing | Magic link + email allowlist |
| File upload abuse | Tampering | File type/size validation |
| Data exfiltration | Information Disclosure | RLS, no service role in client |
| Admin session hijacking | Elevation of Privilege | HTTPS-only cookies, short expiry |
| Brute force magic links | Denial of Service | Rate limiting |

---

## 2. Authentication Security

### 2.1 Magic Link Configuration

```sql
-- Supabase Auth settings (via Dashboard or API)
-- Token expiry: 1 hour (3600 seconds)
-- Max frequency: 1 email per 60 seconds
-- Redirect: https://ashfaaqkazi.ca/admin/dashboard
```

### 2.2 Email Allowlist Enforcement

```sql
-- Restrict signup to authorized email only
CREATE OR REPLACE FUNCTION enforce_single_admin()
RETURNS TRIGGER AS $$
BEGIN
  -- Only allow specific admin email
  IF NEW.email != 'ashfaaq.kazi@email.com' THEN
    RAISE EXCEPTION 'Unauthorized email address: %', NEW.email;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trg_enforce_single_admin
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION enforce_single_admin();
```

### 2.3 Session Configuration

| Setting | Value | Rationale |
|---------|-------|-----------|
| Access token expiry | 3600s (1 hour) | Short-lived, limits blast radius |
| Refresh token rotation | Enabled | Prevents replay attacks |
| Session persistence | `localStorage` | Convenience vs. security trade-off |
| SameSite cookie | `Lax` | CSRF protection |
| HTTPS only | Required | Prevents MITM |

### 2.4 Brute Force Protection

- Supabase Auth has built-in rate limiting on magic link requests
- Implement client-side rate limiting: max 3 requests per 5 minutes
- Monitor auth logs for suspicious patterns

---

## 3. Authorization & Row Level Security

### 3.1 RLS Policy Matrix

| Table | Operation | Policy | Applies To |
|-------|-----------|--------|------------|
| `projects` | SELECT | `status = 'published'` | Anonymous |
| `projects` | ALL | `auth.role() = 'authenticated'` | Authenticated |
| `project_files` | SELECT | `access_level = 'public'` | Anonymous |
| `project_files` | ALL | `auth.role() = 'authenticated'` | Authenticated |
| `project_sections` | SELECT | `project.status = 'published'` | Anonymous |
| `project_sections` | ALL | `auth.role() = 'authenticated'` | Authenticated |

### 3.2 Critical RLS Policies

```sql
-- ===== PROJECTS TABLE =====

-- Allow public to read only published projects
CREATE POLICY "Public read published projects"
  ON projects FOR SELECT
  USING (status = 'published');

-- Allow authenticated users full access
CREATE POLICY "Authenticated full access"
  ON projects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ===== PROJECT FILES TABLE =====

-- Public can read public files for published projects
CREATE POLICY "Public read public files"
  ON project_files FOR SELECT
  USING (
    access_level = 'public'
    AND EXISTS (
      SELECT 1 FROM projects 
      WHERE projects.id = project_files.project_id 
      AND projects.status = 'published'
    )
  );

-- Authenticated can manage all files
CREATE POLICY "Authenticated manage files"
  ON project_files FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ===== STORAGE: project-images =====

-- Anyone can read
CREATE POLICY "Public read images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'project-images');

-- Only authenticated can upload
CREATE POLICY "Authenticated upload images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'project-images' 
    AND auth.role() = 'authenticated'
  );

-- Only owner can delete
CREATE POLICY "Owner delete images"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'project-images' 
    AND owner = auth.uid()
  );
```

### 3.3 Bypass Prevention

**Critical:** Never disable RLS for "convenience." If a query fails due to RLS, fix the policy, not the table setting.

```sql
-- WRONG: Never do this
ALTER TABLE projects DISABLE ROW LEVEL SECURITY;

-- CORRECT: Fix the policy
CREATE POLICY "fix_the_issue" ON projects FOR SELECT USING (...);
```

---

## 4. Data Protection

### 4.1 Data Classification

| Data Type | Classification | Encryption at Rest | Encryption in Transit |
|-----------|----------------|--------------------|----------------------|
| Project metadata | Public | Supabase-managed | TLS 1.3 |
| Project files | Public/Private | Supabase-managed | TLS 1.3 |
| Auth tokens | Sensitive | N/A (ephemeral) | TLS 1.3 |
| Email addresses | Private | Supabase-managed | TLS 1.3 |

### 4.2 Input Validation

```typescript
// src/lib/validation.ts
import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().regex(/^[a-z0-9-]+$/).max(100),
  description: z.string().max(50000),
  status: z.enum(['draft', 'published', 'archived']),
  project_url: z.string().url().optional().or(z.literal('')),
  github_url: z.string().url().optional().or(z.literal('')),
  category: z.string().max(50).optional(),
  tags: z.array(z.string().max(30)).max(20),
});

export const fileUploadSchema = z.object({
  file_name: z.string().max(255),
  file_type: z.enum([
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg',
    'image/webp',
  ]),
  file_size_bytes: z.number().max(50 * 1024 * 1024), // 50MB
});
```

### 4.3 Output Encoding

All user-generated content rendered in the UI must be escaped to prevent XSS:

```typescript
// React automatically escapes JSX, but be careful with:
// - dangerouslySetInnerHTML (AVOID if possible)
// - URL parameters
// - Dynamic href/src attributes

// BAD:
<div dangerouslySetInnerHTML={{ __html: project.description }} />

// GOOD (use a markdown sanitizer):
import DOMPurify from 'dompurify';
import { marked } from 'marked';

const safeHtml = DOMPurify.sanitize(marked(project.description));
```

---

## 5. File Storage Security

### 5.1 File Upload Validation

```typescript
// src/lib/fileValidation.ts
const ALLOWED_TYPES: Record<string, string[]> = {
  'project-files': [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/msword',
    'application/zip',
  ],
  'project-images': [
    'image/png',
    'image/jpeg',
    'image/webp',
  ],
};

const MAX_SIZES: Record<string, number> = {
  'project-files': 50 * 1024 * 1024,    // 50MB
  'project-images': 20 * 1024 * 1024,   // 20MB
};

export function validateFile(file: File, bucket: string): { valid: boolean; error?: string } {
  const allowedTypes = ALLOWED_TYPES[bucket];
  const maxSize = MAX_SIZES[bucket];
  
  if (!allowedTypes?.includes(file.type)) {
    return { valid: false, error: `Invalid file type: ${file.type}` };
  }
  
  if (file.size > maxSize) {
    return { valid: false, error: `File too large: ${file.size} bytes (max ${maxSize})` };
  }
  
  // Additional: check file extension matches MIME type
  const ext = file.name.split('.').pop()?.toLowerCase();
  const mimeExtMap: Record<string, string[]> = {
    'application/pdf': ['pdf'],
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['pptx'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['docx'],
    'image/png': ['png'],
    'image/jpeg': ['jpg', 'jpeg'],
    'image/webp': ['webp'],
  };
  
  const validExts = mimeExtMap[file.type];
  if (validExts && !validExts.includes(ext || '')) {
    return { valid: false, error: `File extension .${ext} does not match MIME type ${file.type}` };
  }
  
  return { valid: true };
}
```

### 5.2 File Download Security

```typescript
// Force download for sensitive files
function getDownloadUrl(file: ProjectFile): string {
  const { data } = supabase.storage
    .from(file.storage_bucket)
    .getPublicUrl(file.storage_path, {
      download: true,
      // Optional: signed URL for private files
      // transform: { width: 800 } for images
    });
  
  return data.publicUrl;
}
```

### 5.3 Storage Bucket Policies Summary

| Bucket | Public Read | Auth Write | Auth Delete | CORS |
|--------|-------------|------------|-------------|------|
| `project-images` | ✅ | ✅ | ✅ (owner) | `ashfaaqkazi.ca` |
| `project-files` | ✅ (public files) | ✅ | ✅ (owner) | `ashfaaqkazi.ca` |

---

## 6. API Security

### 6.1 API Key Exposure

**CRITICAL:** Only expose the **anon/public key** in the frontend.

```typescript
// ✅ CORRECT - Anon key is safe for client (enforced by RLS)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// ❌ WRONG - Never expose service role key in client code
const supabase = createClient(url, SERVICE_ROLE_KEY); // NEVER DO THIS
```

### 6.2 Rate Limiting

Supabase free tier has built-in rate limits. Add client-side protection:

```typescript
// src/lib/rateLimit.ts
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  canProceed(key: string, maxRequests: number, windowMs: number): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;
    const timestamps = this.requests.get(key) || [];
    const recentRequests = timestamps.filter(t => t > windowStart);
    
    if (recentRequests.length >= maxRequests) {
      return false;
    }
    
    recentRequests.push(now);
    this.requests.set(key, recentRequests);
    return true;
  }
}

export const apiRateLimiter = new RateLimiter();

// Usage
if (!apiRateLimiter.canProceed('magic_link', 3, 300000)) {
  throw new Error('Too many requests. Please try again in 5 minutes.');
}
```

### 6.3 CORS Configuration

Configure allowed origins in Supabase Dashboard → API → CORS:

```
Allowed Origins:
- https://ashfaaqkazi.ca
- https://www.ashfaaqkazi.ca
- https://ash-portfolio-website.vercel.app
- http://localhost:3000 (development only)
```

### 6.4 SQL Injection Prevention

**Supabase client is parameterized by default — never concatenate SQL:**

```typescript
// ✅ SAFE - Parameterized query
const { data } = await supabase
  .from('projects')
  .select('*')
  .eq('slug', userInput); // Automatically parameterized

// ❌ DANGEROUS - Never do this
const query = `SELECT * FROM projects WHERE slug = '${userInput}'`;
```

---

## 7. Frontend Security

### 7.1 Content Security Policy (CSP)

Add to Vercel or via meta tag:

```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://*.supabase.co data:;
  connect-src 'self' https://*.supabase.co;
  font-src 'self';
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
">
```

### 7.2 Secure Headers (Vercel)

```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

### 7.3 Dependency Security

```bash
# Run before every deployment
npm audit
npm audit fix

# Check for known vulnerabilities
npx audit-ci --moderate
```

---

## 8. Infrastructure Security

### 8.1 Network Security

| Control | Implementation |
|---------|---------------|
| HTTPS enforcement | Vercel auto-redirects HTTP → HTTPS |
| TLS version | Minimum TLS 1.2 (Supabase enforces TLS 1.3) |
| HSTS | Enabled by Vercel |
| DNSSEC | Enable at GoDaddy if available |

### 8.2 Supabase Dashboard Access

- Enable 2FA on Supabase account
- Limit project access to owner only
- Review audit logs monthly
- Set up billing alerts to detect abuse

### 8.3 Backup & Recovery

| Backup Type | Frequency | Retention | Method |
|-------------|-----------|-----------|--------|
| Database | Daily | 7 days | Supabase auto-backup |
| Manual dump | Weekly | 30 days | `supabase db dump` |
| Storage files | N/A | N/A | Versioning in bucket settings |

---

## 9. Secrets Management

### 9.1 Secret Inventory

| Secret | Location | Exposure | Rotation |
|--------|----------|----------|----------|
| Supabase Anon Key | `.env`, Vercel env vars | Client-safe | On compromise |
| Supabase Service Role Key | Vercel env vars (server only) | Server only | Quarterly |
| Database Password | Supabase Dashboard | Never exposed | On compromise |
| Access Token | Supabase CLI config | Local machine | On compromise |

### 9.2 Environment Variable Template

```bash
# .env.example (safe to commit)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# .env.local (NEVER commit)
# VITE_SUPABASE_URL=https://xxxx.supabase.co
# VITE_SUPABASE_ANON_KEY=eyJ...
```

### 9.3 Git Hygiene

```bash
# Add to .gitignore
echo ".env.local" >> .gitignore
echo ".env.*.local" >> .gitignore
echo "supabase/.temp" >> .gitignore

# Verify no secrets in history
git log --all --full-history -- .env.local
```

---

## 10. Incident Response Plan

### 10.1 Severity Levels

| Level | Description | Example | Response Time |
|-------|-------------|---------|---------------|
| P0 | Critical | Unauthorized admin access, data breach | Immediate |
| P1 | High | RLS bypass, file upload vulnerability | Within 2 hours |
| P2 | Medium | Suspicious auth attempts, minor leak | Within 24 hours |
| P3 | Low | Dependency vulnerability, config drift | Within 1 week |

### 10.2 Response Playbook

**Scenario: Compromised Admin Account**

1. **Immediate (0-15 min)**
   - Disable user in Supabase Auth Dashboard
   - Rotate Supabase anon key and service role key
   - Force logout all sessions

2. **Short-term (15 min - 2 hours)**
   - Audit recent changes: `SELECT * FROM projects WHERE updated_at > NOW() - INTERVAL '24 hours'`
   - Check storage for unauthorized uploads
   - Review auth logs for suspicious IPs

3. **Recovery (2-24 hours)**
   - Restore clean database from backup if needed
   - Re-enable auth with new magic link
   - Update email allowlist if attacker gained access

4. **Post-incident**
   - Document timeline
   - Update security measures
   - Review access logs for 30 days

### 10.3 Contact Escalation

| Issue | Contact | Method |
|-------|---------|--------|
| Supabase platform issue | support@supabase.io | Email |
| Security vulnerability | security@supabase.io | Email (PGP) |
| Vercel platform issue | Vercel Dashboard | Support ticket |

---

## 11. Security Checklist

### Pre-Launch Checklist

- [ ] RLS enabled on ALL tables
- [ ] RLS policies tested and verified
- [ ] No service role key in client code
- [ ] File upload validation implemented (type + size)
- [ ] Input validation on all forms (Zod schemas)
- [ ] XSS prevention (no raw HTML injection)
- [ ] CSP headers configured
- [ ] Secure headers in `vercel.json`
- [ ] HTTPS enforced
- [ ] Auth rate limiting implemented
- [ ] 2FA enabled on Supabase account
- [ ] `.env` files in `.gitignore`
- [ ] No secrets in git history
- [ ] `npm audit` passes with 0 critical/high
- [ ] CORS configured for production domains only
- [ ] Storage bucket policies restrict write to authenticated
- [ ] Backup strategy documented
- [ ] Incident response plan reviewed
- [ ] Adversarial testing completed (see AdversarialTestingPlan.md)

### Post-Launch (Monthly)

- [ ] Review Supabase auth logs
- [ ] Review storage access logs
- [ ] Check for dependency updates
- [ ] Verify RLS policies still effective
- [ ] Test backup restoration
- [ ] Review admin access (only one user?)

---

## Appendix: Security Headers Verification

Run this command to verify headers:

```bash
curl -I https://ashfaaqkazi.ca
```

Expected:
```
HTTP/2 200
x-frame-options: DENY
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
strict-transport-security: max-age=63072000
```

---

*Document Version: 1.0*  
*Classification: Internal*  
*Last Updated: 2026-07-25*  
*Next Review: Post-launch + Monthly*
