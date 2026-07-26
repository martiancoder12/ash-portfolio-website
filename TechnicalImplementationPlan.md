# Technical Implementation Plan
## Supabase Integration for Ash Portfolio Website

**Project:** Ash Portfolio — Project Management Backend  
**Date:** 2026-07-25  
**Status:** Draft  
**Owner:** Ashfaaq Kazi  
**Tech Lead:** Kimi (AI Assistant)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Architecture Overview](#2-architecture-overview)
3. [Database Schema Design](#3-database-schema-design)
4. [Supabase Configuration](#4-supabase-configuration)
5. [API Design](#5-api-design)
6. [Frontend Integration](#6-frontend-integration)
7. [File Storage Architecture](#7-file-storage-architecture)
8. [Authentication & Authorization](#8-authentication--authorization)
9. [Dashboard Implementation](#9-dashboard-implementation)
10. [Deployment & CI/CD](#10-deployment--cicd)
11. [Environment Configuration](#11-environment-configuration)
12. [Performance Considerations](#12-performance-considerations)
13. [Rollback Plan](#13-rollback-plan)

---

## 1. Executive Summary

This document outlines the complete technical implementation for integrating Supabase as the backend for the Ash Portfolio website. The backend will enable:

- Dynamic project management (CRUD operations)
- Secure file storage for project assets (PPT, DOCX, PDF)
- Public project display with external URL redirects
- Protected admin dashboard for content management
- Real-time data synchronization where applicable

**Key Decisions:**
- Supabase chosen over NeonDB for built-in auth, storage, and auto-generated APIs
- Row Level Security (RLS) enforced on all tables
- Client-side rendering with React Query for server state management
- Magic link authentication for admin access (no password fatigue)

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ Public Site  │  │   Dashboard  │  │  Project Detail Pages│  │
│  │  (Visitors)  │  │   (Admin)    │  │     (Visitors)       │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘  │
│         │                 │                     │              │
│         └─────────────────┴─────────────────────┘              │
│                           │                                    │
│              @supabase/supabase-js (v2.x)                      │
│         React Query (v5) for caching & state                   │
│              Zod for runtime validation                        │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTPS
┌───────────────────────────┴─────────────────────────────────────┐
│                      SUPABASE PLATFORM                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  PostgreSQL  │  │   Storage    │  │       Auth (GoTrue)  │  │
│  │   Database   │  │   (S3 API)   │  │   Magic Link / OTP   │  │
│  │              │  │              │  │   Row-Level Security │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                            │                                     │
│                    PostgREST (auto-REST API)                     │
│                    Realtime (WebSocket subscriptions)            │
└─────────────────────────────────────────────────────────────────┘
                            │
                    ┌───────┴───────┐
                    ▼               ▼
              ┌─────────┐     ┌──────────┐
              │  Vercel │     │  CDN/Edge│
              │   CDN   │     │  Cache   │
              └─────────┘     └──────────┘
```

---

## 3. Database Schema Design

### 3.1 Projects Table

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  
  -- Core fields
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  short_description TEXT, -- For cards/previews
  
  -- Media
  thumbnail_url TEXT, -- Supabase Storage public URL
  thumbnail_path TEXT, -- Internal storage path
  
  -- External links
  project_url TEXT, -- Live demo or external project page
  github_url TEXT,
  case_study_url TEXT,
  
  -- Categorization
  category TEXT, -- e.g., "Cybersecurity", "Web Development", "Research"
  tags TEXT[], -- PostgreSQL array of strings
  
  -- Status & visibility
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,
  
  -- Metadata
  start_date DATE,
  end_date DATE,
  client_name TEXT,
  role TEXT, -- e.g., "Lead Developer", "Security Analyst"
  
  -- SEO
  meta_title TEXT,
  meta_description TEXT
);

-- Indexes
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_featured ON projects(is_featured) WHERE is_featured = TRUE;
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_display_order ON projects(display_order);
```

### 3.2 Project Files Table

```sql
CREATE TABLE project_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  
  -- File metadata
  file_name TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_type TEXT NOT NULL, -- mime type: application/pdf, etc.
  file_extension TEXT NOT NULL, -- pdf, pptx, docx
  file_size_bytes INTEGER NOT NULL,
  
  -- Storage references
  storage_bucket TEXT NOT NULL DEFAULT 'project-files',
  storage_path TEXT NOT NULL, -- Full path in Supabase Storage
  public_url TEXT, -- Cached public URL
  
  -- Display
  display_name TEXT, -- User-friendly name
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_downloadable BOOLEAN DEFAULT TRUE,
  
  -- Access control
  access_level TEXT DEFAULT 'public' CHECK (access_level IN ('public', 'private'))
);

CREATE INDEX idx_project_files_project_id ON project_files(project_id);
CREATE INDEX idx_project_files_type ON project_files(file_extension);
```

### 3.3 Project Sections Table (Rich Content)

```sql
CREATE TABLE project_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  
  section_type TEXT NOT NULL CHECK (section_type IN (
    'text', 'image', 'video', 'code', 'quote', 'gallery', 'embed'
  )),
  title TEXT,
  content TEXT, -- Markdown or HTML
  media_url TEXT,
  media_caption TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  
  metadata JSONB -- Flexible additional data
);

CREATE INDEX idx_project_sections_project ON project_sections(project_id, display_order);
```

### 3.4 Tags Table (Normalized)

```sql
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  color TEXT, -- Hex color for UI
  description TEXT
);

CREATE TABLE project_tags (
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, tag_id)
);
```

---

## 4. Supabase Configuration

### 4.1 Project Setup

| Setting | Value |
|---------|-------|
| Organization | Ash Portfolio |
| Project Name | ash-portfolio-db |
| Region | US East (N. Virginia) — closest to Vercel edge |
| Database Password | `<redacted — store in a password manager>` |
| Access Token | `<redacted — generate at supabase.com/dashboard/account/tokens>` |

### 4.2 Storage Buckets

| Bucket Name | Access | Purpose |
|-------------|--------|---------|
| `project-files` | Public (with RLS) | PPT, DOCX, PDF downloads |
| `project-images` | Public | Thumbnails, screenshots, gallery images |
| `project-assets` | Private | Raw assets, works-in-progress |

### 4.3 Storage Policies

```sql
-- project-images: Public read, authenticated write
CREATE POLICY "Public can view project images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'project-images');

CREATE POLICY "Authenticated users can upload images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'project-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete own images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'project-images' AND auth.uid() = owner);
```

---

## 5. API Design

### 5.1 REST Endpoints (Auto-generated by PostgREST)

All endpoints are prefixed with `${SUPABASE_URL}/rest/v1/`.

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/projects?status=eq.published&order=display_order` | List published projects | No |
| GET | `/projects?slug=eq.{slug}` | Get single project by slug | No |
| GET | `/projects?is_featured=eq.true` | Get featured projects | No |
| POST | `/projects` | Create new project | Yes |
| PATCH | `/projects?id=eq.{id}` | Update project | Yes |
| DELETE | `/projects?id=eq.{id}` | Delete project | Yes |
| GET | `/project_files?project_id=eq.{id}` | List files for project | No (public) / Yes (all) |
| POST | `/project_files` | Record file metadata | Yes |
| DELETE | `/project_files?id=eq.{id}` | Remove file record | Yes |

### 5.2 RPC Functions (Custom SQL)

```sql
-- Increment view count
CREATE OR REPLACE FUNCTION increment_project_views(project_slug TEXT)
RETURNS void AS $$
BEGIN
  UPDATE projects 
  SET view_count = COALESCE(view_count, 0) + 1 
  WHERE slug = project_slug;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Full-text search
CREATE OR REPLACE FUNCTION search_projects(search_query TEXT)
RETURNS SETOF projects AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM projects
  WHERE status = 'published'
    AND (title ILIKE '%' || search_query || '%'
         OR description ILIKE '%' || search_query || '%'
         OR tags::text ILIKE '%' || search_query || '%')
  ORDER BY display_order, created_at DESC;
END;
$$ LANGUAGE plpgsql STABLE;
```

---

## 6. Frontend Integration

### 6.1 Supabase Client Setup

```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// Types
export type Database = {
  public: {
    Tables: {
      projects: { Row: Project; Insert: ProjectInsert; Update: ProjectUpdate };
      project_files: { Row: ProjectFile; Insert: ProjectFileInsert; Update: ProjectFileUpdate };
    };
  };
};
```

### 6.2 React Query Integration

```typescript
// src/hooks/useProjects.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*, project_files(*)')
        .eq('status', 'published')
        .order('display_order');
      if (error) throw error;
      return data;
    },
  });
}

export function useProject(slug: string) {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*, project_files(*), project_sections(*)')
        .eq('slug', slug)
        .single();
      if (error) throw error;
      return data;
    },
  });
}
```

### 6.3 File Upload Hook

```typescript
// src/hooks/useFileUpload.ts
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export function useFileUpload() {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const uploadFile = async (
    file: File,
    projectId: string,
    bucket: string = 'project-files'
  ) => {
    setIsUploading(true);
    setProgress(0);

    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${projectId}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        onUploadProgress: (progress) => {
          setProgress((progress.loaded / progress.total) * 100);
        },
      });

    if (uploadError) throw uploadError;

    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    // Save metadata to database
    const { error: dbError } = await supabase
      .from('project_files')
      .insert({
        project_id: projectId,
        file_name: fileName,
        original_name: file.name,
        file_type: file.type,
        file_extension: fileExt,
        file_size_bytes: file.size,
        storage_path: filePath,
        public_url: urlData.publicUrl,
      });

    if (dbError) throw dbError;

    setIsUploading(false);
    return { path: filePath, url: urlData.publicUrl };
  };

  return { uploadFile, progress, isUploading };
}
```

---

## 7. File Storage Architecture

### 7.1 File Type Support

| Extension | MIME Type | Max Size | Bucket | Viewer |
|-----------|-----------|----------|--------|--------|
| .pdf | application/pdf | 50MB | project-files | Browser native / PDF.js |
| .pptx | application/vnd.openxmlformats-officedocument.presentationml.presentation | 100MB | project-files | Download only |
| .ppt | application/vnd.ms-powerpoint | 100MB | project-files | Download only |
| .docx | application/vnd.openxmlformats-officedocument.wordprocessingml.document | 50MB | project-files | Download only |
| .doc | application/msword | 50MB | project-files | Download only |
| .zip | application/zip | 200MB | project-files | Download only |
| .png | image/png | 20MB | project-images | Browser native |
| .jpg, .jpeg | image/jpeg | 20MB | project-images | Browser native |
| .webp | image/webp | 20MB | project-images | Browser native |

### 7.2 File Naming Convention

```
project-images/{project_id}/{uuid}.webp
project-files/{project_id}/{uuid}.{ext}
```

### 7.3 Virus Scanning Strategy

Supabase Storage does not include built-in virus scanning. Mitigation:
1. **Client-side:** Validate file extensions and MIME types strictly
2. **Server-side (Edge Function):** Optional ClamAV integration via Supabase Edge Functions
3. **Policy:** Only authenticated admin can upload; public cannot upload

---

## 8. Authentication & Authorization

### 8.1 Auth Strategy: Magic Link + OTP

**Decision:** Passwordless authentication via Supabase Auth magic links.

**Rationale:**
- Only one admin user (you)
- No password to remember or leak
- Magic links expire in 1 hour
- Can add MFA later if needed

### 8.2 Row Level Security (RLS) Policies

```sql
-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_sections ENABLE ROW LEVEL SECURITY;

-- Projects: Public can read published
CREATE POLICY "Public can view published projects"
  ON projects FOR SELECT
  USING (status = 'published');

-- Projects: Only authenticated can CUD
CREATE POLICY "Authenticated users can manage projects"
  ON projects FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Project files: Public can view public files
CREATE POLICY "Public can view public files"
  ON project_files FOR SELECT
  USING (access_level = 'public');

-- Project files: Authenticated can manage all
CREATE POLICY "Authenticated users can manage files"
  ON project_files FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
```

### 8.3 Admin Email Allowlist

```sql
-- Optional: Restrict auth to specific email
CREATE OR REPLACE FUNCTION check_admin_email()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.email != 'ashfaaq.kazi@example.com' THEN
    RAISE EXCEPTION 'Unauthorized email address';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_admin_email
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION check_admin_email();
```

---

## 9. Dashboard Implementation

### 9.1 Dashboard Pages

| Route | Purpose | Access |
|-------|---------|--------|
| `/admin/login` | Magic link request form | Public |
| `/admin/dashboard` | Project list with stats | Authenticated |
| `/admin/projects/new` | Create new project | Authenticated |
| `/admin/projects/:id/edit` | Edit project + files | Authenticated |
| `/admin/projects/:id/files` | Manage project files | Authenticated |
| `/admin/media` | Global media library | Authenticated |

### 9.2 Dashboard Components

```
src/
  admin/
    layout/
      AdminLayout.tsx       -- Sidebar + header
      AuthGuard.tsx         -- Route protection
    pages/
      Login.tsx
      Dashboard.tsx
      ProjectList.tsx
      ProjectForm.tsx       -- Create/Edit
      ProjectFiles.tsx      -- File manager
      MediaLibrary.tsx
    components/
      FileUploader.tsx      -- Drag & drop upload
      ProjectCard.tsx       -- Admin list card
      StatsWidget.tsx       -- Analytics summary
      RichTextEditor.tsx    -- Markdown editor
      ImageCropper.tsx      -- Thumbnail optimization
```

### 9.3 File Upload UI

- **Drag & drop zone** with file type validation
- **Progress bars** per file
- **Preview generation** for images (client-side resize to 1200px max)
- **Bulk upload** support (up to 10 files at once)
- **Duplicate detection** by file hash (SHA-256)

---

## 10. Deployment & CI/CD

### 10.1 Environment Variables

```
# .env (local)
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...

# Not exposed to client (if using edge functions)
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

### 10.2 Vercel Environment Variables

Configure in Vercel Dashboard → Project Settings → Environment Variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### 10.3 Database Migrations

Use Supabase CLI for migrations:

```bash
# Install CLI
npm install -g supabase

# Link project
supabase login
supabase link --project-ref xxxx

# Create migration
supabase migration new create_projects_table

# Apply locally
supabase db reset

# Deploy
supabase db push
```

---

## 11. Environment Configuration

### 11.1 Required Environment Variables

| Variable | Description | Source |
|----------|-------------|--------|
| `VITE_SUPABASE_URL` | Project URL | Supabase Dashboard → Settings → API |
| `VITE_SUPABASE_ANON_KEY` | Public anon key (safe for client) | Supabase Dashboard → Settings → API |

### 11.2 Security Notes

- **NEVER** commit `.env` files
- **NEVER** expose `SERVICE_ROLE_KEY` to client
- Anon key is safe for client-side use (enforced by RLS)
- Rotate keys if compromised via Supabase Dashboard

---

## 12. Performance Considerations

| Concern | Strategy |
|---------|----------|
| **Query Speed** | Index on `status`, `slug`, `display_order`; use `select()` with specific columns |
| **Image Loading** | Use Supabase Image Transformations: `?width=800&quality=80` |
| **Caching** | React Query with 5-minute staleTime for published projects |
| **Pagination** | Implement cursor-based pagination for large project lists |
| **Bundle Size** | Lazy load admin routes with `React.lazy()` |
| **Storage CDN** | Supabase Storage uses global CDN; images served from edge |

### 12.1 React Query Configuration

```typescript
// src/lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30,   // 30 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
```

---

## 13. Rollback Plan

### 13.1 Database Rollback

```bash
# Revert to previous migration
supabase db reset --linked
supabase migration repair --status reverted --version 20240725120000
```

### 13.2 Feature Flags

Implement simple feature flags to disable Supabase integration without deployment:

```typescript
// src/lib/features.ts
export const FEATURES = {
  USE_SUPABASE_BACKEND: import.meta.env.VITE_USE_SUPABASE === 'true',
};

// In components
const { data: projects } = FEATURES.USE_SUPABASE_BACKEND
  ? useSupabaseProjects()
  : useStaticProjects(); // Fallback to static data
```

### 13.3 Data Export

Regular automated backups via Supabase Dashboard (daily point-in-time recovery on Pro plan, or manual dumps):

```bash
# Manual backup
supabase db dump -f backup_$(date +%Y%m%d).sql
```

---

## Appendix A: Implementation Phases

| Phase | Deliverable | Est. Time |
|-------|-------------|-----------|
| 1 | Supabase project setup, schema creation, RLS policies | 2 hours |
| 2 | Supabase client integration, React Query setup | 2 hours |
| 3 | Public project listing & detail pages (read-only) | 3 hours |
| 4 | Admin auth (magic link) + dashboard shell | 2 hours |
| 5 | Project CRUD in dashboard | 3 hours |
| 6 | File upload/download system | 3 hours |
| 7 | Polish, testing, QA | 2 hours |
| **Total** | | **~17 hours** |

---

## Appendix B: Dependency Additions

```bash
npm install @supabase/supabase-js @tanstack/react-query zod
npm install -D @types/uuid
```

---

*Document Version: 1.0*  
*Last Updated: 2026-07-25*  
*Next Review: Post-implementation*
