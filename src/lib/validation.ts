import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be under 200 characters'),
  slug: z.string()
    .min(1, 'Slug is required')
    .max(100, 'Slug must be under 100 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  description: z.string().max(50000).optional().or(z.literal('')),
  short_description: z.string().max(500).optional().or(z.literal('')),
  project_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  github_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  case_study_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  category: z.string().max(50).optional().or(z.literal('')),
  tags: z.array(z.string().max(30)).max(20).optional().default([]),
  status: z.enum(['draft', 'published', 'archived']).default('draft'),
  is_featured: z.boolean().default(false),
  display_order: z.number().int().min(0).default(0),
  start_date: z.string().optional().or(z.literal('')),
  end_date: z.string().optional().or(z.literal('')),
  client_name: z.string().max(100).optional().or(z.literal('')),
  role: z.string().max(100).optional().or(z.literal('')),
  meta_title: z.string().max(200).optional().or(z.literal('')),
  meta_description: z.string().max(500).optional().or(z.literal('')),
});

export type ProjectFormData = z.infer<typeof projectSchema>;

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
  file_size_bytes: z.number().max(50 * 1024 * 1024),
});

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100);
}
