# QA Log
## Quality Assurance Test Plan — Supabase Backend Integration

**Project:** Ash Portfolio — Project Management Backend  
**Date:** 2026-07-25  
**Status:** Draft  
**Test Environment:** Local development + Staging (Vercel preview deployment)

---

## Table of Contents

1. [Test Environment Setup](#1-test-environment-setup)
2. [Database Tests](#2-database-tests)
3. [API Tests](#3-api-tests)
4. [Authentication Tests](#4-authentication-tests)
5. [File Storage Tests](#5-file-storage-tests)
6. [Frontend Integration Tests](#6-frontend-integration-tests)
7. [Performance Tests](#7-performance-tests)
8. [Cross-Browser/Device Tests](#8-cross-browserdevice-tests)
9. [Test Execution Log](#9-test-execution-log)

---

## 1. Test Environment Setup

### 1.1 Required Environments

| Environment | URL | Database | Purpose |
|-------------|-----|----------|---------|
| Local | `http://localhost:3000` | `localhost:54321` (Supabase CLI) | Development & initial QA |
| Staging | Vercel preview deployment | Supabase staging project | Pre-production validation |
| Production | `https://ashfaaqkazi.ca` | Supabase production project | Live monitoring |

### 1.2 Test Data

```sql
-- Seed data for testing
INSERT INTO projects (title, slug, description, status, is_featured, display_order)
VALUES
  ('Test Project Alpha', 'test-project-alpha', 'A test project for QA', 'published', true, 1),
  ('Test Project Beta', 'test-project-beta', 'Another test project', 'draft', false, 2),
  ('Test Project Gamma', 'test-project-gamma', 'Archived test project', 'archived', false, 3);

INSERT INTO tags (name, slug, color) VALUES
  ('Cybersecurity', 'cybersecurity', '#ef4444'),
  ('Web Development', 'web-development', '#3b82f6'),
  ('Research', 'research', '#10b981');
```

### 1.3 Test Accounts

| Role | Email | Password | Auth Method |
|------|-------|----------|-------------|
| Admin | ash@ashfaaqkazi.ca | N/A (magic link) | Magic Link |
| Unauthorized | hacker@evil.com | N/A | Magic Link (should fail) |

---

## 2. Database Tests

### 2.1 Schema Validation

| Test ID | Test Case | Expected Result | Status |
|---------|-----------|-----------------|--------|
| DB-001 | Verify `projects` table exists | Table found with correct columns | ⬜ |
| DB-002 | Verify `project_files` table exists | Table found with correct columns | ⬜ |
| DB-003 | Verify `project_sections` table exists | Table found with correct columns | ⬜ |
| DB-004 | Verify `tags` table exists | Table found with correct columns | ⬜ |
| DB-005 | Verify foreign key constraints | `project_files.project_id` references `projects.id` with CASCADE | ⬜ |
| DB-006 | Verify enum constraints | `status` only accepts `draft`, `published`, `archived` | ⬜ |
| DB-007 | Verify unique constraints | `slug` must be unique across projects | ⬜ |
| DB-008 | Verify default values | `created_at` defaults to `now()` | ⬜ |

### 2.2 Data Integrity

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| DB-009 | Cascading delete | Delete project with files | Associated `project_files` and `project_sections` deleted | ⬜ |
| DB-010 | Orphan prevention | Insert file with invalid `project_id` | Constraint violation, insert rejected | ⬜ |
| DB-011 | Slug uniqueness | Insert two projects with same slug | Second insert fails with unique violation | ⬜ |
| DB-012 | Invalid status value | Insert project with status `invalid` | Check constraint violation | ⬜ |
| DB-013 | Large description | Insert description with 100,000 characters | Accepted (TEXT has no limit) | ⬜ |
| DB-014 | Empty title rejection | Insert project with NULL title | NOT NULL constraint violation | ⬜ |

### 2.3 Index Performance

| Test ID | Test Case | Query | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| DB-015 | Status index usage | `EXPLAIN ANALYZE SELECT * FROM projects WHERE status = 'published'` | Index scan used, < 10ms | ⬜ |
| DB-016 | Slug lookup speed | `EXPLAIN ANALYZE SELECT * FROM projects WHERE slug = 'test'` | Index scan used, < 5ms | ⬜ |

---

## 3. API Tests

### 3.1 REST Endpoint Tests

#### Public Read Operations (No Auth)

| Test ID | Endpoint | Method | Test Case | Expected Result | Status |
|---------|----------|--------|-----------|-----------------|--------|
| API-001 | `/rest/v1/projects?status=eq.published` | GET | Request without auth token | Returns published projects only | ⬜ |
| API-002 | `/rest/v1/projects?slug=eq.test-project-alpha` | GET | Request valid slug | Returns single project | ⬜ |
| API-003 | `/rest/v1/projects?slug=eq.nonexistent` | GET | Request invalid slug | Empty array, 200 OK | ⬜ |
| API-004 | `/rest/v1/projects` | GET | Request without status filter | Returns published only (RLS) | ⬜ |
| API-005 | `/rest/v1/project_files?project_id=eq.{id}` | GET | Request files for published project | Returns public files | ⬜ |
| API-006 | `/rest/v1/projects?select=*,project_files(*)` | GET | Embedded select | Returns projects with nested files | ⬜ |

#### Authenticated Write Operations

| Test ID | Endpoint | Method | Test Case | Expected Result | Status |
|---------|----------|--------|-----------|-----------------|--------|
| API-007 | `/rest/v1/projects` | POST | Create with valid auth | 201 Created, returns new project | ⬜ |
| API-008 | `/rest/v1/projects` | POST | Create without auth | 401 Unauthorized | ⬜ |
| API-009 | `/rest/v1/projects?id=eq.{id}` | PATCH | Update with valid auth | 204 No Content | ⬜ |
| API-010 | `/rest/v1/projects?id=eq.{id}` | PATCH | Update without auth | 401 Unauthorized | ⬜ |
| API-011 | `/rest/v1/projects?id=eq.{id}` | DELETE | Delete with valid auth | 204 No Content, cascades files | ⬜ |
| API-012 | `/rest/v1/projects?id=eq.{id}` | DELETE | Delete without auth | 401 Unauthorized | ⬜ |

#### Search & Filter

| Test ID | Test Case | Query Parameters | Expected Result | Status |
|---------|-----------|------------------|-----------------|--------|
| API-013 | Filter by category | `?category=eq.Cybersecurity` | Only cybersecurity projects | ⬜ |
| API-014 | Filter by featured | `?is_featured=eq.true` | Only featured projects | ⬜ |
| API-015 | Order by display_order | `?order=display_order` | Sorted ascending | ⬜ |
| API-016 | Order by created desc | `?order=created_at.desc` | Newest first | ⬜ |
| API-017 | Full-text search | `?or=(title.ilike.*search*,description.ilike.*search*)` | Matching projects | ⬜ |
| API-018 | Pagination | `?limit=10&offset=0` | First 10 projects | ⬜ |

### 3.2 RPC Function Tests

| Test ID | Function | Test Case | Expected Result | Status |
|---------|----------|-----------|-----------------|--------|
| API-019 | `increment_project_views` | Call with valid slug | View count increments by 1 | ⬜ |
| API-020 | `search_projects` | Search with query "test" | Returns matching published projects | ⬜ |
| API-021 | `search_projects` | Search with empty string | Returns all published projects | ⬜ |

### 3.3 Error Handling

| Test ID | Test Case | Expected Response | Status |
|---------|-----------|-------------------|--------|
| API-022 | Invalid UUID format | 400 Bad Request with error message | ⬜ |
| API-023 | Malformed JSON body | 400 Bad Request | ⬜ |
| API-024 | Violate foreign key | 409 Conflict | ⬜ |
| API-025 | Violate unique constraint | 409 Conflict | ⬜ |
| API-026 | Request non-existent table | 404 Not Found | ⬜ |
| API-027 | Exceed rate limit | 429 Too Many Requests | ⬜ |

---

## 4. Authentication Tests

### 4.1 Magic Link Flow

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| AUTH-001 | Request magic link | Enter valid admin email on `/admin/login` | Email sent, success toast | ⬜ |
| AUTH-002 | Request magic link (invalid email) | Enter non-admin email | Error: "Unauthorized email" | ⬜ |
| AUTH-003 | Click expired magic link | Use link after 1 hour | Error: "Link expired", redirect to login | ⬜ |
| AUTH-004 | Click valid magic link | Click within 1 hour | Authenticated, redirect to dashboard | ⬜ |
| AUTH-005 | Magic link reuse | Click same link twice | Second click: "Invalid or expired link" | ⬜ |
| AUTH-006 | Session persistence | Close tab, reopen | Session restored from localStorage | ⬜ |
| AUTH-007 | Logout | Click logout button | Session cleared, redirect to login | ⬜ |
| AUTH-008 | Token refresh | Wait for token near expiry | Auto-refresh before expiry | ⬜ |

### 4.2 Route Protection

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| AUTH-009 | Access dashboard unauthenticated | Visit `/admin/dashboard` directly | Redirect to `/admin/login` | ⬜ |
| AUTH-010 | Access dashboard authenticated | Login, then visit dashboard | Dashboard renders | ⬜ |
| AUTH-011 | API call without token | POST to `/rest/v1/projects` with no header | 401 Unauthorized | ⬜ |
| AUTH-012 | API call with invalid token | POST with malformed JWT | 401 Unauthorized | ⬜ |

### 4.3 Session Security

| Test ID | Test Case | Expected Result | Status |
|---------|-----------|-----------------|--------|
| AUTH-013 | Session in multiple tabs | Login in Tab A, open Tab B | Both tabs authenticated | ⬜ |
| AUTH-014 | Logout in one tab | Logout in Tab A, check Tab B | Tab B auto-redirects to login | ⬜ |
| AUTH-015 | LocalStorage inspection | No sensitive data in localStorage | Only Supabase auth tokens | ⬜ |

---

## 5. File Storage Tests

### 5.1 Upload Tests

| Test ID | Test Case | File | Expected Result | Status |
|---------|-----------|------|-----------------|--------|
| FS-001 | Upload valid PDF | test.pdf (2MB) | Upload success, metadata saved | ⬜ |
| FS-002 | Upload valid PPTX | test.pptx (5MB) | Upload success, metadata saved | ⬜ |
| FS-003 | Upload valid DOCX | test.docx (1MB) | Upload success, metadata saved | ⬜ |
| FS-004 | Upload valid image | test.png (500KB) | Upload success, optimized | ⬜ |
| FS-005 | Upload oversized file | large.pdf (60MB) | Client rejection (max 50MB) | ⬜ |
| FS-006 | Upload unsupported type | test.exe (1MB) | Client rejection (invalid type) | ⬜ |
| FS-007 | Upload without auth | Any file as anonymous | 401 Unauthorized | ⬜ |
| FS-008 | Bulk upload | 5 files simultaneously | All succeed, individual progress | ⬜ |
| FS-009 | Upload duplicate | Same file twice | Both stored (different UUIDs) or deduped | ⬜ |
| FS-010 | Upload with special chars in name | `file (1) [test].pdf` | Stored safely, original name preserved | ⬜ |

### 5.2 Download/Access Tests

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| FS-011 | Download public file | Access public URL | File downloads, correct content-type | ⬜ |
| FS-012 | View image in browser | Open image public URL | Image renders inline | ⬜ |
| FS-013 | Access private file without auth | Try to access private file URL | 403 Forbidden or 404 | ⬜ |
| FS-014 | Access deleted file | URL of deleted file | 404 Not Found | ⬜ |

### 5.3 Delete Tests

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| FS-015 | Delete file (authenticated) | Delete from dashboard | File removed from storage + DB | ⬜ |
| FS-016 | Delete file (unauthenticated) | Attempt without auth | 401 Unauthorized | ⬜ |
| FS-017 | Delete project with files | Delete project | All associated files removed (CASCADE) | ⬜ |
| FS-018 | Orphaned storage object | Delete DB record only | Storage object still exists (manual cleanup) | ⬜ |

### 5.4 Image Transformation

| Test ID | Test Case | URL | Expected Result | Status |
|---------|-----------|-----|-----------------|--------|
| FS-019 | Resize image | `.../image.webp?width=800` | Returns 800px wide image | ⬜ |
| FS-020 | Compress image | `.../image.webp?quality=60` | Returns compressed image | ⬜ |
| FS-021 | Invalid transformation | `.../image.webp?width=99999` | Error or capped at max | ⬜ |

---

## 6. Frontend Integration Tests

### 6.1 Public Site

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| FE-001 | Homepage loads projects | Visit `/` | Projects fetched from Supabase, rendered | ⬜ |
| FE-002 | Project cards display | Check homepage | Cards show title, thumbnail, category | ⬜ |
| FE-003 | Click project card | Click featured project | Navigate to `/projects/:slug` | ⬜ |
| FE-004 | Project detail page | Visit project page | Full description, files list, external links | ⬜ |
| FE-005 | External URL redirect | Click "Visit Project" button | Opens external URL in new tab | ⬜ |
| FE-006 | File download link | Click file in project page | Download starts | ⬜ |
| FE-007 | Filter by category | Click category filter | Only matching projects shown | ⬜ |
| FE-008 | Empty state | No published projects | "No projects yet" message shown | ⬜ |
| FE-009 | Loading state | Slow network | Skeleton loaders displayed | ⬜ |
| FE-010 | Error state | Supabase unavailable | Error message with retry button | ⬜ |

### 6.2 Admin Dashboard

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| FE-011 | Dashboard login | Enter email, click send | Magic link email sent | ⬜ |
| FE-012 | Dashboard overview | Login successfully | Stats widgets, project list | ⬜ |
| FE-013 | Create project | Fill form, click create | Project created, redirect to edit | ⬜ |
| FE-014 | Edit project | Change title, save | Changes persisted, toast success | ⬜ |
| FE-015 | Upload file to project | Drag file to upload zone | Upload progress, success toast | ⬜ |
| FE-016 | Reorder files | Drag to reorder | New order persisted | ⬜ |
| FE-017 | Delete file | Click delete on file | Confirmation dialog, then removed | ⬜ |
| FE-018 | Publish/unpublish | Toggle status | Status updated, visible on public site | ⬜ |
| FE-019 | Form validation | Submit empty form | Inline errors, no submission | ⬜ |
| FE-020 | Slug auto-generation | Type title | Slug auto-generated from title | ⬜ |
| FE-021 | Rich text editor | Add formatted description | Markdown/HTML saved correctly | ⬜ |
| FE-022 | Image preview upload | Upload thumbnail | Preview shown, cropped to ratio | ⬜ |
| FE-023 | Unsaved changes warning | Navigate away with changes | "Unsaved changes" confirmation | ⬜ |

### 6.3 Mobile Responsiveness

| Test ID | Test Case | Viewport | Expected Result | Status |
|---------|-----------|----------|-----------------|--------|
| FE-024 | Public site mobile | 375px width | Single column, readable text | ⬜ |
| FE-025 | Dashboard mobile | 375px width | Stacked layout, accessible nav | ⬜ |
| FE-026 | File upload mobile | 375px width | Upload zone touch-friendly | ⬜ |
| FE-027 | iPad/tablet | 768px width | Two-column layout, sidebar collapsible | ⬜ |

---

## 7. Performance Tests

### 7.1 Load Time Benchmarks

| Test ID | Test Case | Target | Tool | Status |
|---------|-----------|--------|------|--------|
| PERF-001 | Homepage initial load | < 2s (LCP) | Lighthouse | ⬜ |
| PERF-002 | Project list render | < 500ms after data fetch | React Profiler | ⬜ |
| PERF-003 | Project detail page load | < 1.5s | Lighthouse | ⬜ |
| PERF-004 | Dashboard initial load | < 2s | Lighthouse | ⬜ |
| PERF-005 | Image loading (with transform) | < 300ms per image | Network tab | ⬜ |

### 7.2 Database Query Performance

| Test ID | Test Case | Query | Target | Status |
|---------|-----------|-------|--------|--------|
| PERF-006 | List 50 projects | `SELECT * FROM projects WHERE status='published'` | < 50ms | ⬜ |
| PERF-007 | List with files embed | `SELECT ... FROM projects JOIN project_files` | < 100ms | ⬜ |
| PERF-008 | Search across 100 projects | `SELECT * FROM projects WHERE title ILIKE '%term%'` | < 100ms | ⬜ |
| PERF-009 | Concurrent reads | 100 concurrent requests | All < 200ms | ⬜ |

### 7.3 File Upload Performance

| Test ID | Test Case | File Size | Target | Status |
|---------|-----------|-----------|--------|--------|
| PERF-010 | Upload 5MB PDF | 5MB | < 10s on 4G | ⬜ |
| PERF-011 | Upload 20MB image | 20MB | < 30s on 4G | ⬜ |
| PERF-012 | Bulk upload 10 files | 10 x 2MB | < 20s total | ⬜ |

---

## 8. Cross-Browser/Device Tests

| Test ID | Browser | Version | OS | Priority | Status |
|---------|---------|---------|-----|----------|--------|
| XBR-001 | Chrome | Latest | macOS | P0 | ⬜ |
| XBR-002 | Safari | Latest | macOS | P0 | ⬜ |
| XBR-003 | Firefox | Latest | macOS | P1 | ⬜ |
| XBR-004 | Chrome | Latest | Windows 11 | P1 | ⬜ |
| XBR-005 | Edge | Latest | Windows 11 | P1 | ⬜ |
| XBR-006 | Safari | iOS 17 | iPhone 14 | P0 | ⬜ |
| XBR-007 | Chrome | Android 14 | Pixel 7 | P1 | ⬜ |
| XBR-008 | Safari | iPadOS 17 | iPad Pro | P1 | ⬜ |

---

## 9. Test Execution Log

### Sprint 1: Core Infrastructure

| Date | Tester | Tests Run | Passed | Failed | Notes |
|------|--------|-----------|--------|--------|-------|
| | | | | | |

### Sprint 2: Public Site

| Date | Tester | Tests Run | Passed | Failed | Notes |
|------|--------|-----------|--------|--------|-------|
| | | | | | |

### Sprint 3: Admin Dashboard

| Date | Tester | Tests Run | Passed | Failed | Notes |
|------|--------|-----------|--------|--------|-------|
| | | | | | |

### Sprint 4: Security & Performance

| Date | Tester | Tests Run | Passed | Failed | Notes |
|------|--------|-----------|--------|--------|-------|
| | | | | | |

---

## Sign-off

| Role | Name | Date | Status |
|------|------|------|--------|
| QA Lead | | | ⬜ |
| Tech Lead | | | ⬜ |
| Product Owner | | | ⬜ |

---

*Document Version: 1.0*  
*Last Updated: 2026-07-25*
