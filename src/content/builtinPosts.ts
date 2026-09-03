import type { Post } from '@/lib/supabase'
import learningStrategiesSource from '../../content/blog/how-to-study-math-problem-solving-courses.md?raw'

const learningStrategiesContent = learningStrategiesSource.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '').trim()

export const builtinPosts: Post[] = [
  {
    id: 'builtin-learning-strategies',
    created_at: '2026-09-03T01:00:00.000Z',
    updated_at: '2026-09-03T04:15:00.000Z',
    title: 'How to Study for Math and Problem-Solving Courses: A Practical Active-Learning System',
    slug: 'how-to-study-math-problem-solving-courses',
    excerpt: 'A practical system for engineering students: preview the terrain, learn in small loops, solve from a blank page, diagnose mistakes, space retrieval, and teach the method.',
    content: learningStrategiesContent,
    tags: ['Learning strategies', 'Engineering', 'Mathematics', 'Active learning', 'Student success'],
    status: 'published',
    published_at: '2026-09-02T21:00:00-04:00',
    meta_title: 'How to Study for Math & Problem-Solving Courses',
    meta_description: 'A practical active-learning system for math and engineering courses: preview, solve from a blank page, diagnose errors, space retrieval, and teach back.',
  },
]

export function mergePublishedPosts(databasePosts: Post[]) {
  const databaseSlugs = new Set(databasePosts.map((post) => post.slug))
  return [...databasePosts, ...builtinPosts.filter((post) => !databaseSlugs.has(post.slug))]
    .sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime())
}
