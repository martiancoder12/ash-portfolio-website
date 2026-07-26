import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAllPosts, useDeletePost } from '@/hooks/usePosts';
import { Plus, Pencil, Trash2, ExternalLink, Newspaper, RefreshCw, Loader2 } from 'lucide-react';
import type { Post } from '@/lib/supabase';

const DEPLOY_HOOK_URL = import.meta.env.VITE_DEPLOY_HOOK_URL as string | undefined;

function RegenerateSitemapButton() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  if (!DEPLOY_HOOK_URL) return null;

  const handleClick = async () => {
    setState('sending');
    try {
      // no-cors: api.vercel.com doesn't return CORS headers for hook triggers;
      // an opaque response still means the request went out.
      await fetch(DEPLOY_HOOK_URL, { method: 'POST', mode: 'no-cors' });
      setState('sent');
      setTimeout(() => setState('idle'), 15000);
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 8000);
    }
  };

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        onClick={handleClick}
        disabled={state === 'sending'}
        className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-medium hover:bg-neutral-100 transition-colors disabled:opacity-50"
        title="Triggers a Vercel rebuild; the sitemap is regenerated from live content during the build"
      >
        {state === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
        Regenerate sitemap
      </button>
      {state === 'sent' && (
        <p className="text-xs text-emerald-600">Deploy triggered — sitemap updates in ~1 minute.</p>
      )}
      {state === 'error' && (
        <p className="text-xs text-red-600">Could not reach Vercel. Try again.</p>
      )}
    </div>
  );
}

export default function AdminPosts() {
  const { data: posts, isLoading } = useAllPosts();
  const deletePost = useDeletePost();
  const navigate = useNavigate();

  const stats = {
    total: posts?.length ?? 0,
    published: posts?.filter((p) => p.status === 'published').length ?? 0,
    draft: posts?.filter((p) => p.status === 'draft').length ?? 0,
    archived: posts?.filter((p) => p.status === 'archived').length ?? 0,
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      return;
    }
    deletePost.mutate(id);
  };

  const getStatusBadge = (status: Post['status']) => {
    const styles = {
      published: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      draft: 'bg-amber-50 text-amber-700 border-amber-200',
      archived: 'bg-neutral-100 text-neutral-600 border-neutral-200',
    };
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">Blog Posts</h1>
          <p className="text-neutral-500 mt-1">Write and manage your blog</p>
        </div>
        <div className="flex items-center gap-3">
          <RegenerateSitemapButton />
          <button
            onClick={() => navigate('/admin/posts/new')}
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total', value: stats.total },
          { label: 'Published', value: stats.published },
          { label: 'Drafts', value: stats.draft },
          { label: 'Archived', value: stats.archived },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border border-neutral-200 p-4">
            <p className="text-sm text-neutral-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-neutral-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-neutral-500">Loading posts...</div>
        ) : !posts?.length ? (
          <div className="p-8 text-center">
            <Newspaper className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <p className="text-neutral-500">No posts yet.</p>
            <button
              onClick={() => navigate('/admin/posts/new')}
              className="text-neutral-900 font-medium mt-2 hover:underline"
            >
              Write your first post
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Post</th>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Tags</th>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Updated</th>
                  <th className="text-right text-xs font-medium text-neutral-500 uppercase px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-neutral-50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-neutral-900">{post.title}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">/blog/{post.slug}</p>
                    </td>
                    <td className="px-4 py-3">{getStatusBadge(post.status)}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">
                      {(post.tags || []).slice(0, 3).join(', ') || '—'}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-500">
                      {new Date(post.updated_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        {post.status === 'published' && (
                          <a
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-neutral-400 hover:text-neutral-600 rounded-lg hover:bg-neutral-100"
                            title="View live"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <button
                          onClick={() => navigate(`/admin/posts/${post.id}/edit`)}
                          className="p-1.5 text-neutral-400 hover:text-neutral-600 rounded-lg hover:bg-neutral-100"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          className="p-1.5 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
