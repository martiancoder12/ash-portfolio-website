import { ArrowUpRight, ExternalLink, Github, FileText } from 'lucide-react';
import type { Project } from '@/lib/supabase';

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <article className="project-row featured-row">
        {index !== undefined && <div className="project-index">{String(index + 1).padStart(2, '0')}</div>}
        <div className="project-body">
          <div className="project-title-row">
            <h3>{project.title}</h3>
            <span className="featured-badge">Featured</span>
          </div>
          <p>{project.short_description || project.description}</p>
          {project.tags && project.tags.length > 0 && (
            <div className="chip-row compact">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          )}
        </div>
        <div className="project-actions">
          <span className={`live-badge ${project.status === 'published' ? 'published' : ''}`}>
            {project.status}
          </span>
          <a href={`/projects/${project.slug}`} className="text-link">
            View details <ArrowUpRight size={14} />
          </a>
          {project.project_url && (
            <a className="secondary-link" href={project.project_url} target="_blank" rel="noreferrer">
              Live <ExternalLink size={14} />
            </a>
          )}
          {project.github_url && (
            <a className="secondary-link" href={project.github_url} target="_blank" rel="noreferrer">
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="project-row">
      {index !== undefined && <div className="project-index">{String(index + 1).padStart(2, '0')}</div>}
      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span>{project.category}</span>
        </div>
        <p>{project.short_description || project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="chip-row compact">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}
      </div>
      <div className="project-actions">
        <span className={`live-badge ${project.status === 'published' ? 'published' : ''}`}>
          {project.status}
        </span>
        <a href={`/projects/${project.slug}`} className="text-link">
          View details <ArrowUpRight size={14} />
        </a>
        {project.project_url && (
          <a className="secondary-link" href={project.project_url} target="_blank" rel="noreferrer">
            Live <ExternalLink size={14} />
          </a>
        )}
        {project.github_url && (
          <a className="secondary-link" href={project.github_url} target="_blank" rel="noreferrer">
            <Github size={14} /> Code
          </a>
        )}
        {project.case_study_url && (
          <a className="secondary-link" href={project.case_study_url} target="_blank" rel="noreferrer">
            <FileText size={14} /> Case study
          </a>
        )}
      </div>
    </article>
  );
}
