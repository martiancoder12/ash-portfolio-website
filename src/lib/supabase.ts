import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    'Supabase environment variables are not set. ' +
    'Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
  );
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// Types for database tables
export interface Project {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  thumbnail_url: string | null;
  thumbnail_path: string | null;
  project_url: string | null;
  github_url: string | null;
  case_study_url: string | null;
  category: string;
  tags: string[] | null;
  status: 'draft' | 'published' | 'archived';
  is_featured: boolean;
  display_order: number;
  start_date: string | null;
  end_date: string | null;
  client_name: string | null;
  role: string | null;
  meta_title: string | null;
  meta_description: string | null;
  view_count: number;
}

export interface ProjectInsert {
  title: string;
  slug: string;
  description?: string | null;
  short_description?: string | null;
  thumbnail_url?: string | null;
  thumbnail_path?: string | null;
  project_url?: string | null;
  github_url?: string | null;
  case_study_url?: string | null;
  category?: string;
  tags?: string[] | null;
  status?: 'draft' | 'published' | 'archived';
  is_featured?: boolean;
  display_order?: number;
  start_date?: string | null;
  end_date?: string | null;
  client_name?: string | null;
  role?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
}

export interface ProjectFile {
  id: string;
  created_at: string;
  project_id: string;
  file_name: string;
  original_name: string;
  file_type: string;
  file_extension: string;
  file_size_bytes: number;
  storage_bucket: string;
  storage_path: string;
  public_url: string | null;
  display_name: string | null;
  description: string | null;
  display_order: number;
  is_downloadable: boolean;
  access_level: 'public' | 'private';
}

export interface ProjectSection {
  id: string;
  created_at: string;
  updated_at: string;
  project_id: string;
  section_type: 'text' | 'image' | 'video' | 'code' | 'quote' | 'gallery' | 'embed';
  title: string | null;
  content: string | null;
  media_url: string | null;
  media_caption: string | null;
  display_order: number;
  metadata: Record<string, unknown> | null;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  color: string | null;
  description: string | null;
}
