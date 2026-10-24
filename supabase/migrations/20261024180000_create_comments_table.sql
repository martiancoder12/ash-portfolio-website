-- Comments table for blog posts
-- Anonymous commenting: no account required, public read + insert.
-- Idempotent: safe to run multiple times

CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  post_slug TEXT NOT NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous',
  body TEXT NOT NULL,
  CONSTRAINT comments_author_name_length CHECK (char_length(author_name) BETWEEN 1 AND 80),
  CONSTRAINT comments_body_length CHECK (char_length(body) BETWEEN 1 AND 2000)
);

CREATE INDEX IF NOT EXISTS idx_comments_post_slug_created_at ON comments(post_slug, created_at);

-- RLS: anyone can read comments and leave one; only authenticated (admin) can delete/edit.
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public read comments" ON comments;
CREATE POLICY "public read comments"
  ON comments FOR SELECT TO public
  USING (true);

DROP POLICY IF EXISTS "public insert comments" ON comments;
CREATE POLICY "public insert comments"
  ON comments FOR INSERT TO public
  WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated manage comments" ON comments;
CREATE POLICY "authenticated manage comments"
  ON comments FOR ALL TO authenticated
  USING (true) WITH CHECK (true);
