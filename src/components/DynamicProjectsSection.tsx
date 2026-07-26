import { usePublishedProjects, useFeaturedProjects } from '@/hooks/useProjects';
import ProjectCard from './ProjectCard';
import { Loader2 } from 'lucide-react';

export default function DynamicProjectsSection() {
  const { data: publishedProjects, isLoading: loadingPublished, error: publishedError } = usePublishedProjects();
  const { data: featuredProjects, isLoading: loadingFeatured, error: featuredError } = useFeaturedProjects();

  const isLoading = loadingPublished || loadingFeatured;
  const hasError = publishedError || featuredError;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-neutral-400" />
        <span className="ml-3 text-neutral-500">Loading projects...</span>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Failed to load projects. Please try again later.</p>
      </div>
    );
  }

  const featured = featuredProjects || [];
  const regular = (publishedProjects || []).filter(
    (p) => !featured.some((f) => f.id === p.id)
  );

  if (!publishedProjects?.length && !featured.length) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500">No projects published yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="project-list">
      {/* Featured projects first */}
      {featured.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} featured />
      ))}

      {/* Regular published projects */}
      {regular.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={featured.length + i} />
      ))}
    </div>
  );
}
