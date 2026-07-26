-- Posts table for the blog section
-- Idempotent: safe to run multiple times

CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  tags TEXT[],
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMPTZ,
  meta_title TEXT,
  meta_description TEXT
);

CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_status_published_at ON posts(status, published_at DESC);

-- updated_at trigger (reuses update_updated_at_column() from the projects migration)
DROP TRIGGER IF EXISTS trg_posts_updated_at ON posts;
CREATE TRIGGER trg_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public read published posts" ON posts;
CREATE POLICY "public read published posts"
  ON posts FOR SELECT TO public
  USING (status = 'published');

DROP POLICY IF EXISTS "authenticated manage posts" ON posts;
CREATE POLICY "authenticated manage posts"
  ON posts FOR ALL TO authenticated
  USING (true) WITH CHECK (true);
