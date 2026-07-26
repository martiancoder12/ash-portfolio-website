import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useCreateProject, useUpdateProject, useAdminProjectById } from '@/hooks/useProjects';
import { projectSchema, generateSlug, type ProjectFormData } from '@/lib/validation';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function ProjectForm() {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const navigate = useNavigate();

  const { data: existingProject, isLoading: loadingProject } = useAdminProjectById(id);
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();

  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    slug: '',
    description: '',
    short_description: '',
    project_url: '',
    github_url: '',
    case_study_url: '',
    category: 'General',
    tags: [],
    status: 'draft',
    is_featured: false,
    display_order: 0,
    start_date: '',
    end_date: '',
    client_name: '',
    role: '',
    meta_title: '',
    meta_description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (existingProject) {
      setFormData({
        title: existingProject.title,
        slug: existingProject.slug,
        description: existingProject.description || '',
        short_description: existingProject.short_description || '',
        project_url: existingProject.project_url || '',
        github_url: existingProject.github_url || '',
        case_study_url: existingProject.case_study_url || '',
        category: existingProject.category || 'General',
        tags: existingProject.tags || [],
        status: existingProject.status,
        is_featured: existingProject.is_featured,
        display_order: existingProject.display_order,
        start_date: existingProject.start_date || '',
        end_date: existingProject.end_date || '',
        client_name: existingProject.client_name || '',
        role: existingProject.role || '',
        meta_title: existingProject.meta_title || '',
        meta_description: existingProject.meta_description || '',
      });
    }
  }, [existingProject]);

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: isEditing ? prev.slug : generateSlug(title),
    }));
  };

  const handleAddTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !formData.tags.includes(tag) && formData.tags.length < 20) {
      setFormData((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = projectSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        fieldErrors[String(err.path[0])] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const payload = {
      ...formData,
      tags: formData.tags.length > 0 ? formData.tags : null,
    };

    try {
      if (isEditing && id) {
        await updateProject.mutateAsync({ id, updates: payload });
        navigate('/admin/dashboard');
      } else {
        await createProject.mutateAsync(payload);
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setErrors({ submit: err instanceof Error ? err.message : 'Failed to save project' });
    }
  };

  if (isEditing && loadingProject) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-neutral-400" />
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-colors ${
      errors[field] ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-neutral-300'
    }`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">
              {isEditing ? 'Edit Project' : 'New Project'}
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.submit && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg">{errors.submit}</div>
          )}

          {/* Title & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className={inputClass('title')}
                placeholder="Project title"
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Slug *</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData((p) => ({ ...p, slug: e.target.value }))}
                className={inputClass('slug')}
                placeholder="project-slug"
              />
              {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug}</p>}
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Short Description</label>
            <input
              type="text"
              value={formData.short_description}
              onChange={(e) => setFormData((p) => ({ ...p, short_description: e.target.value }))}
              className={inputClass('short_description')}
              placeholder="Brief summary for cards/previews"
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))}
              rows={6}
              className={inputClass('description')}
              placeholder="Full project description (supports markdown)"
            />
          </div>

          {/* URLs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Project URL</label>
              <input
                type="url"
                value={formData.project_url}
                onChange={(e) => setFormData((p) => ({ ...p, project_url: e.target.value }))}
                className={inputClass('project_url')}
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">GitHub URL</label>
              <input
                type="url"
                value={formData.github_url}
                onChange={(e) => setFormData((p) => ({ ...p, github_url: e.target.value }))}
                className={inputClass('github_url')}
                placeholder="https://github.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Case Study URL</label>
              <input
                type="url"
                value={formData.case_study_url}
                onChange={(e) => setFormData((p) => ({ ...p, case_study_url: e.target.value }))}
                className={inputClass('case_study_url')}
                placeholder="https://..."
              />
            </div>
          </div>

          {/* Category, Status, Featured */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData((p) => ({ ...p, category: e.target.value }))}
                className={inputClass('category')}
                placeholder="e.g., Cybersecurity"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData((p) => ({ ...p, status: e.target.value as ProjectFormData['status'] }))}
                className={inputClass('status')}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div className="flex items-center gap-3 pt-6">
              <input
                id="featured"
                type="checkbox"
                checked={formData.is_featured}
                onChange={(e) => setFormData((p) => ({ ...p, is_featured: e.target.checked }))}
                className="w-4 h-4 rounded border-neutral-300"
              />
              <label htmlFor="featured" className="text-sm font-medium text-neutral-700">
                Featured project
              </label>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Tags</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none"
                placeholder="Add a tag and press Enter"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-neutral-400 hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Display Order */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Display Order</label>
            <input
              type="number"
              min={0}
              value={formData.display_order}
              onChange={(e) => setFormData((p) => ({ ...p, display_order: parseInt(e.target.value) || 0 }))}
              className={inputClass('display_order')}
            />
          </div>

          {/* SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Meta Title</label>
              <input
                type="text"
                value={formData.meta_title}
                onChange={(e) => setFormData((p) => ({ ...p, meta_title: e.target.value }))}
                className={inputClass('meta_title')}
                placeholder="SEO title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Meta Description</label>
              <input
                type="text"
                value={formData.meta_description}
                onChange={(e) => setFormData((p) => ({ ...p, meta_description: e.target.value }))}
                className={inputClass('meta_description')}
                placeholder="SEO description"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/admin/dashboard')}
              className="px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={createProject.isPending || updateProject.isPending}
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {(createProject.isPending || updateProject.isPending) && (
                <Loader2 className="w-4 h-4 animate-spin" />
              )}
              <Save className="w-4 h-4" />
              {isEditing ? 'Update Project' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
  );
}
