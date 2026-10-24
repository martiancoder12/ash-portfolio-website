import { useAllComments, useDeleteComment } from '@/hooks/useComments';
import { Trash2, ExternalLink, MessageSquare } from 'lucide-react';
import type { PostComment } from '@/lib/supabase';

function formatCommentDate(iso: string) {
  return new Date(iso).toLocaleString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function AdminComments() {
  const { data: comments, isLoading } = useAllComments();
  const deleteComment = useDeleteComment();

  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  const stats = {
    total: comments?.length ?? 0,
    today: comments?.filter((c) => now - new Date(c.created_at).getTime() < dayMs).length ?? 0,
    week: comments?.filter((c) => now - new Date(c.created_at).getTime() < 7 * dayMs).length ?? 0,
  };

  const handleDelete = (comment: PostComment) => {
    const preview = comment.body.length > 60 ? comment.body.slice(0, 60) + '…' : comment.body;
    if (!window.confirm(`Delete ${comment.author_name}'s comment: "${preview}"? This cannot be undone.`)) {
      return;
    }
    deleteComment.mutate(comment.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-900">Comments</h1>
        <p className="text-neutral-500 mt-1">Moderate reader comments across all blog posts</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total', value: stats.total },
          { label: 'Last 24 hours', value: stats.today },
          { label: 'Last 7 days', value: stats.week },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border border-neutral-200 p-4">
            <p className="text-sm text-neutral-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-neutral-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Comments Table */}
      <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-neutral-500">Loading comments...</div>
        ) : !comments?.length ? (
          <div className="p-8 text-center">
            <MessageSquare className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <p className="text-neutral-500">No comments yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Comment</th>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Author</th>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Post</th>
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Posted</th>
                  <th className="text-right text-xs font-medium text-neutral-500 uppercase px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {comments.map((comment) => (
                  <tr key={comment.id} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 max-w-md">
                      <p className="text-sm text-neutral-900 whitespace-pre-wrap break-words">{comment.body}</p>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-neutral-700 whitespace-nowrap">
                      {comment.author_name}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 whitespace-nowrap">
                      <a
                        href={`/blog/${comment.post_slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-neutral-900 hover:underline"
                      >
                        /blog/{comment.post_slug}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-500 whitespace-nowrap">
                      {formatCommentDate(comment.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => handleDelete(comment)}
                          disabled={deleteComment.isPending}
                          className="p-1.5 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-50"
                          title="Delete comment"
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
