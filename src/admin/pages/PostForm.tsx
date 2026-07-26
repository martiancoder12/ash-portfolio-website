import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useAdminPostById, useCreatePost, useUpdatePost } from '@/hooks/usePosts';
import { ArrowLeft, Loader2, Save } from 'lucide-react';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function AdminPostForm() {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const navigate = useNavigate();

  const { data: existing, isLoading: loadingExisting } = useAdminPostById(id);
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [status, setStatus] = useState<'draft' | 'published' | 'archived'>('draft');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setSlug(existing.slug);
      setSlugTouched(true);
      setExcerpt(existing.excerpt || '');
      setContent(existing.content || '');
      setTagsInput((existing.tags || []).join(', '));
      setStatus(existing.status);
      setMetaTitle(existing.meta_title || '');
      setMetaDescription(existing.meta_description || '');
    }
  }, [existing]);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  const saving = createPost.isPending || updatePost.isPending;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !slug.trim()) {
      setError('Title and slug are required.');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim() || null,
      content: content.trim() || null,
      tags: tags.length ? tags : null,
      status,
      published_at: status === 'published' ? (existing?.published_at || new Date().toISOString()) : null,
      meta_title: metaTitle.trim() || null,
      meta_description: metaDescription.trim() || null,
    };

    try {
      if (isEditing) {
        await updatePost.mutateAsync({ id, updates: payload });
      } else {
        await createPost.mutateAsync(payload);
      }
      navigate('/admin/posts');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save the post.');
    }
  };

  if (isEditing && loadingExisting) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-6 h-6 animate-spin text-neutral-400" />
      </div>
    );
  }

  const inputCls = 'w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent';
  const labelCls = 'block text-sm font-medium text-neutral-700 mb-1.5';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate('/admin/posts')}
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to posts
      </button>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">{isEditing ? 'Edit Post' : 'New Post'}</h1>
          <p className="text-neutral-500 mt-1">
            {isEditing ? `Editing /blog/${slug}` : 'Write a new blog post'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border border-neutral-200 p-6 space-y-5">
          <div>
            <label className={labelCls}>Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className={inputCls}
              placeholder="Why security controls die in real workflows"
              required
            />
          </div>

          <div>
            <label className={labelCls}>Slug *</label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">/blog/</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => { setSlug(e.target.value); setSlugTouched(true); }}
                className={inputCls}
                placeholder="why-security-controls-die"
                required
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className={inputCls}
              placeholder="One or two sentences shown on the blog index and under the title."
            />
          </div>

          <div>
            <label className={labelCls}>Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={16}
              className={`${inputCls} font-mono`}
              placeholder={'Write in plain text. Separate paragraphs with a blank line.\n\n## Headings start with two hashes\n\n- List items start with a dash'}
            />
            <p className="text-xs text-neutral-400 mt-1.5">
              Blank line = new paragraph · <code>## Heading</code> = section heading · <code>- item</code> = bullet list
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Tags</label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className={inputCls}
                placeholder="security, privacy, research"
              />
              <p className="text-xs text-neutral-400 mt-1.5">Comma-separated.</p>
            </div>
            <div>
              <label className={labelCls}>Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as typeof status)}
                className={inputCls}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
              <p className="text-xs text-neutral-400 mt-1.5">
                Publishing sets the publish date on first publish.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-neutral-200 p-6 space-y-5">
          <h2 className="text-sm font-semibold text-neutral-900">SEO (optional)</h2>
          <div>
            <label className={labelCls}>Meta title</label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className={inputCls}
              placeholder="Defaults to the post title"
            />
          </div>
          <div>
            <label className={labelCls}>Meta description</label>
            <textarea
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              rows={2}
              className={inputCls}
              placeholder="Defaults to the excerpt"
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isEditing ? 'Save changes' : 'Create post'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/posts')}
            className="px-5 py-2.5 rounded-lg font-medium text-neutral-600 hover:bg-neutral-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
