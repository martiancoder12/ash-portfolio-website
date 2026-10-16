import type { Post } from '@/lib/supabase'
import learningStrategiesSource from '../../content/blog/how-to-study-math-problem-solving-courses.md?raw'
import labourDaySource from '../../content/blog/the-unfinished-work-of-labour-day.md?raw'
import democracyCoinageSource from '../../content/blog/democracy-a-new-coinage.md?raw'

const learningStrategiesContent = learningStrategiesSource.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '').trim()
const labourDayContent = labourDaySource.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '').trim()
const democracyCoinageContent = democracyCoinageSource.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '').trim()

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
  {
    id: 'builtin-labour-day',
    created_at: '2026-09-07T15:00:00.000Z',
    updated_at: '2026-09-07T15:00:00.000Z',
    title: 'The Unfinished Work of Labour Day',
    slug: 'the-unfinished-work-of-labour-day',
    excerpt: "Labour Day was born on a picket line in 1872. Reclaiming it means fighting for the whole working class — the right to strike, gig and migrant workers, low pay, and more of our lives back.",
    content: labourDayContent,
    tags: ['Labour', 'Canada', 'Labour Day', "Workers' rights", 'Political economy'],
    status: 'published',
    published_at: '2026-09-07T11:00:00-04:00',
    meta_title: 'The Unfinished Work of Labour Day',
    meta_description: 'Labour Day was born on a picket line in 1872. A reflection on reclaiming the holiday: the right to strike, gig and migrant work, low pay, and shorter working time.',
  },
  {
    id: 'builtin-democracy-a-new-coinage',
    created_at: '2026-10-16T13:00:00.000Z',
    updated_at: '2026-10-16T13:00:00.000Z',
    title: 'On Democracy: A Proposal for a Word That Does Not Yet Exist',
    slug: 'democracy-a-new-coinage',
    excerpt: "What if no one had ever lived under rule by the people? An essay that coins 'democracy' as a brand-new concept — argued for, from first principles, by philosophers of a world that has only ever known rule.",
    content: democracyCoinageContent,
    tags: ['Philosophy', 'Politics', 'Democracy', 'Essay'],
    status: 'published',
    published_at: '2026-10-16T09:00:00-04:00',
    meta_title: 'On Democracy: A Proposal for a Word That Does Not Yet Exist',
    meta_description: "A philosophical essay that treats 'democracy' as a net-new coinage: defining and defending rule by the people as though the concept had never existed.",
  },
]

export function mergePublishedPosts(databasePosts: Post[]) {
  const databaseSlugs = new Set(databasePosts.map((post) => post.slug))
  return [...databasePosts, ...builtinPosts.filter((post) => !databaseSlugs.has(post.slug))]
    .sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime())
}
