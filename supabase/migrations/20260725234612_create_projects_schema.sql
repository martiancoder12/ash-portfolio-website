-- ============================================================
-- Ash Portfolio — Database Schema Migration
-- Created: 2026-07-25
-- ============================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- 1. PROJECTS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS projects (
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
  project_url TEXT,
  github_url TEXT,
  case_study_url TEXT,

  -- Categorization
  category TEXT DEFAULT 'General',
  tags TEXT[], -- PostgreSQL array of strings

  -- Status & visibility
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,

  -- Metadata
  start_date DATE,
  end_date DATE,
  client_name TEXT,
  role TEXT,

  -- SEO
  meta_title TEXT,
  meta_description TEXT,

  -- Analytics
  view_count INTEGER DEFAULT 0
);

-- Indexes on projects
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured) WHERE is_featured = TRUE;
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if exists then recreate (idempotent)
DROP TRIGGER IF EXISTS trg_projects_updated_at ON projects;
CREATE TRIGGER trg_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- 2. PROJECT FILES TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS project_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),

  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,

  -- File metadata
  file_name TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_extension TEXT NOT NULL,
  file_size_bytes INTEGER NOT NULL,

  -- Storage references
  storage_bucket TEXT NOT NULL DEFAULT 'project-files',
  storage_path TEXT NOT NULL,
  public_url TEXT,

  -- Display
  display_name TEXT,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_downloadable BOOLEAN DEFAULT TRUE,

  -- Access control
  access_level TEXT DEFAULT 'public' CHECK (access_level IN ('public', 'private'))
);

CREATE INDEX IF NOT EXISTS idx_project_files_project_id ON project_files(project_id);
CREATE INDEX IF NOT EXISTS idx_project_files_type ON project_files(file_extension);

-- ============================================================
-- 3. PROJECT SECTIONS TABLE (Rich Content)
-- ============================================================
CREATE TABLE IF NOT EXISTS project_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),

  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,

  section_type TEXT NOT NULL CHECK (section_type IN (
    'text', 'image', 'video', 'code', 'quote', 'gallery', 'embed'
  )),
  title TEXT,
  content TEXT,
  media_url TEXT,
  media_caption TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,

  metadata JSONB
);

CREATE INDEX IF NOT EXISTS idx_project_sections_project ON project_sections(project_id, display_order);

DROP TRIGGER IF EXISTS trg_project_sections_updated_at ON project_sections;
CREATE TRIGGER trg_project_sections_updated_at
  BEFORE UPDATE ON project_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- 4. TAGS TABLE (Normalized)
-- ============================================================
CREATE TABLE IF NOT EXISTS tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  color TEXT, -- Hex color for UI
  description TEXT
);

CREATE TABLE IF NOT EXISTS project_tags (
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, tag_id)
);

-- ============================================================
-- 5. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_tags ENABLE ROW LEVEL SECURITY;

-- Helper: drop all existing policies first for idempotency
DO $$
BEGIN
  -- Projects policies
  DROP POLICY IF EXISTS "Public read published projects" ON projects;
  DROP POLICY IF EXISTS "Authenticated full access on projects" ON projects;

  -- Project files policies
  DROP POLICY IF EXISTS "Public read public files" ON project_files;
  DROP POLICY IF EXISTS "Authenticated full access on project files" ON project_files;

  -- Project sections policies
  DROP POLICY IF EXISTS "Public read published sections" ON project_sections;
  DROP POLICY IF EXISTS "Authenticated full access on project sections" ON project_sections;

  -- Tags policies
  DROP POLICY IF EXISTS "Public read tags" ON tags;
  DROP POLICY IF EXISTS "Authenticated write tags" ON tags;

  -- Project tags policies
  DROP POLICY IF EXISTS "Public read project tags" ON project_tags;
  DROP POLICY IF EXISTS "Authenticated write project tags" ON project_tags;
END $$;

-- Projects: Public can read published
CREATE POLICY "Public read published projects"
  ON projects FOR SELECT
  USING (status = 'published');

-- Projects: Authenticated full access
CREATE POLICY "Authenticated full access on projects"
  ON projects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Project files: Public can read public files for published projects
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

-- Project files: Authenticated full access
CREATE POLICY "Authenticated full access on project files"
  ON project_files FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Project sections: Public can read sections of published projects
CREATE POLICY "Public read published sections"
  ON project_sections FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = project_sections.project_id
      AND projects.status = 'published'
    )
  );

-- Project sections: Authenticated full access
CREATE POLICY "Authenticated full access on project sections"
  ON project_sections FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Tags: Public read
CREATE POLICY "Public read tags"
  ON tags FOR SELECT
  USING (true);

-- Tags: Authenticated write
CREATE POLICY "Authenticated write tags"
  ON tags FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Project tags junction: Public read for published projects
CREATE POLICY "Public read project tags"
  ON project_tags FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = project_tags.project_id
      AND projects.status = 'published'
    )
  );

-- Project tags: Authenticated write
CREATE POLICY "Authenticated write project tags"
  ON project_tags FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);


-- ============================================================
-- 6. STORAGE BUCKET SETUP (Note: managed via Dashboard/API)
-- ============================================================
-- Storage buckets must be created via Supabase Dashboard or Storage API.
-- Buckets to create: project-images, project-files
--
-- Storage policies on storage.objects cannot be modified via SQL
-- on Supabase managed instances. Use Dashboard or Storage API.

