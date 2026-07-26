import { useNavigate } from 'react-router';
import { useAllProjects, useDeleteProject } from '@/hooks/useProjects';
import { Plus, Pencil, Trash2, ExternalLink, FileText } from 'lucide-react';
import type { Project } from '@/lib/supabase';

export default function AdminDashboard() {
  const { data: projects, isLoading } = useAllProjects();
  const deleteProject = useDeleteProject();
  const navigate = useNavigate();

  const stats = {
    total: projects?.length ?? 0,
    published: projects?.filter((p) => p.status === 'published').length ?? 0,
    draft: projects?.filter((p) => p.status === 'draft').length ?? 0,
    featured: projects?.filter((p) => p.is_featured).length ?? 0,
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      return;
    }
    deleteProject.mutate(id);
  };

  const getStatusBadge = (status: Project['status']) => {
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
            <h1 className="text-2xl font-semibold text-neutral-900">Projects</h1>
            <p className="text-neutral-500 mt-1">Manage your portfolio projects</p>
          </div>
          <button
            onClick={() => navigate('/admin/projects/new')}
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total', value: stats.total },
            { label: 'Published', value: stats.published },
            { label: 'Drafts', value: stats.draft },
            { label: 'Featured', value: stats.featured },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg border border-neutral-200 p-4">
              <p className="text-sm text-neutral-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-neutral-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-neutral-500">Loading projects...</div>
          ) : !projects?.length ? (
            <div className="p-8 text-center">
              <FileText className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-neutral-500">No projects yet.</p>
              <button
                onClick={() => navigate('/admin/projects/new')}
                className="text-neutral-900 font-medium mt-2 hover:underline"
              >
                Create your first project
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Project</th>
                    <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Status</th>
                    <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Category</th>
                    <th className="text-left text-xs font-medium text-neutral-500 uppercase px-4 py-3">Updated</th>
                    <th className="text-right text-xs font-medium text-neutral-500 uppercase px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-neutral-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {project.thumbnail_url && (
                            <img
                              src={project.thumbnail_url}
                              alt=""
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                          )}
                          <div>
                            <p className="font-medium text-neutral-900">{project.title}</p>
                            {project.is_featured && (
                              <span className="text-xs text-amber-600">Featured</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">{getStatusBadge(project.status)}</td>
                      <td className="px-4 py-3 text-sm text-neutral-600">{project.category}</td>
                      <td className="px-4 py-3 text-sm text-neutral-500">
                        {new Date(project.updated_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-2">
                          {project.project_url && (
                            <a
                              href={project.project_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-neutral-400 hover:text-neutral-600 rounded-lg hover:bg-neutral-100"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          <button
                            onClick={() => navigate(`/admin/projects/${project.id}/edit`)}
                            className="p-1.5 text-neutral-400 hover:text-neutral-600 rounded-lg hover:bg-neutral-100"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => navigate(`/admin/projects/${project.id}/files`)}
                            className="p-1.5 text-neutral-400 hover:text-neutral-600 rounded-lg hover:bg-neutral-100"
                            title="Manage files"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(project.id, project.title)}
                            className="p-1.5 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50"
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
