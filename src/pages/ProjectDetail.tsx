import { useParams, Link } from 'react-router';
import { useProjectBySlug, useProjectFiles, useProjectSections } from '@/hooks/useProjects';
import { ArrowLeft, ExternalLink, Github, FileText, Download, Calendar, Tag, Loader2 } from 'lucide-react';
import type { ProjectFile } from '@/lib/supabase';

function getFileIcon(fileType: string) {
  if (fileType.startsWith('image/')) return '🖼️';
  if (fileType.includes('pdf')) return '📄';
  if (fileType.includes('presentation') || fileType.includes('powerpoint')) return '📊';
  if (fileType.includes('word') || fileType.includes('document')) return '📝';
  return '📎';
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function FileDownloadCard({ file }: { file: ProjectFile }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors">
      <span className="text-2xl">{getFileIcon(file.file_type)}</span>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-neutral-900 truncate">
          {file.display_name || file.original_name}
        </p>
        <p className="text-sm text-neutral-500">
          {file.file_extension.toUpperCase()} • {formatFileSize(file.file_size_bytes)}
        </p>
      </div>
      {file.public_url && (
        <a
          href={file.public_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white text-sm rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <Download size={14} />
          Download
        </a>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: project, isLoading, error } = useProjectBySlug(slug || '');
  const { data: files } = useProjectFiles(project?.id);
  const { data: sections } = useProjectSections(project?.id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-neutral-400" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-neutral-900 mb-2">Project not found</h1>
          <p className="text-neutral-500 mb-6">The project you're looking for doesn't exist or isn't published.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-900 hover:underline">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Top nav */}
      <nav className="border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
            <ArrowLeft size={18} />
            <span className="font-medium">Ashfaaq Kazi</span>
          </Link>
          <span className="text-sm text-neutral-400">Portfolio</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          {project.category && (
            <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full mb-4">
              {project.category}
            </span>
          )}
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">{project.title}</h1>
          {project.short_description && (
            <p className="text-xl text-neutral-600 leading-relaxed">{project.short_description}</p>
          )}

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-neutral-500">
            {(project.start_date || project.end_date) && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {project.start_date && new Date(project.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                {project.start_date && project.end_date && ' — '}
                {project.end_date && new Date(project.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                {!project.end_date && project.start_date && ' — Present'}
              </span>
            )}
            {project.role && (
              <span className="inline-flex items-center gap-1.5">
                <Tag size={14} />
                {project.role}
              </span>
            )}
            {project.client_name && (
              <span>Client: {project.client_name}</span>
            )}
          </div>

          {/* Action links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <ExternalLink size={16} />
                Visit Project
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <Github size={16} />
                View Code
              </a>
            )}
            {project.case_study_url && (
              <a
                href={project.case_study_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <FileText size={16} />
                Case Study
              </a>
            )}
          </div>
        </header>

        {/* Thumbnail */}
        {project.thumbnail_url && (
          <div className="mb-10">
            <img
              src={project.thumbnail_url}
              alt={project.title}
              className="w-full rounded-xl object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        )}

        {/* Description */}
        {project.description && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">About this project</h2>
            <div className="prose prose-neutral max-w-none">
              {project.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-neutral-600 leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Sections (rich content) */}
        {sections && sections.length > 0 && (
          <section className="mb-10">
            {sections.map((section) => (
              <div key={section.id} className="mb-8">
                {section.title && (
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">{section.title}</h3>
                )}
                {section.content && (
                  <p className="text-neutral-600 leading-relaxed">{section.content}</p>
                )}
                {section.media_url && (
                  <img
                    src={section.media_url}
                    alt={section.media_caption || ''}
                    className="rounded-lg mt-3"
                  />
                )}
              </div>
            ))}
          </section>
        )}

        {/* Files */}
        {files && files.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Project Files</h2>
            <div className="space-y-3">
              {files.map((file) => (
                <FileDownloadCard key={file.id} file={file} />
              ))}
            </div>
          </section>
        )}

        {/* Footer nav */}
        <footer className="border-t border-neutral-100 pt-8 mt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </footer>
      </article>
    </main>
  );
}
