import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, type Project, type ProjectFile, type ProjectSection } from '@/lib/supabase';

// ============== PUBLIC QUERIES ==============

export function usePublishedProjects() {
  return useQuery({
    queryKey: ['projects', 'published'],
    queryFn: async (): Promise<Project[]> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data || [];
    },
  });
}

export function useFeaturedProjects() {
  return useQuery({
    queryKey: ['projects', 'featured'],
    queryFn: async (): Promise<Project[]> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
        .eq('is_featured', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data || [];
    },
  });
}

export function useProjectBySlug(slug: string) {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: async (): Promise<Project | null> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();
      if (error) {
        if (error.code === 'PGRST116') return null; // not found
        throw error;
      }
      return data;
    },
    enabled: !!slug,
  });
}

export function useProjectFiles(projectId: string | undefined) {
  return useQuery({
    queryKey: ['project-files', projectId],
    queryFn: async (): Promise<ProjectFile[]> => {
      if (!projectId) return [];
      const { data, error } = await supabase
        .from('project_files')
        .select('*')
        .eq('project_id', projectId)
        .eq('access_level', 'public')
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data || [];
    },
    enabled: !!projectId,
  });
}

export function useProjectSections(projectId: string | undefined) {
  return useQuery({
    queryKey: ['project-sections', projectId],
    queryFn: async (): Promise<ProjectSection[]> => {
      if (!projectId) return [];
      const { data, error } = await supabase
        .from('project_sections')
        .select('*')
        .eq('project_id', projectId)
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data || [];
    },
    enabled: !!projectId,
  });
}

// ============== AUTHENTICATED QUERIES (Dashboard) ==============

export function useAllProjects() {
  return useQuery({
    queryKey: ['projects', 'all'],
    queryFn: async (): Promise<Project[]> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('updated_at', { ascending: false });
      if (error) throw error;
      return data || [];
    },
  });
}

export function useAdminProjectById(id: string | undefined) {
  return useQuery({
    queryKey: ['admin-project', id],
    queryFn: async (): Promise<Project | null> => {
      if (!id) return null;
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        if (error.code === 'PGRST116') return null;
        throw error;
      }
      return data;
    },
    enabled: !!id,
  });
}

export function useAdminProjectFiles(projectId: string | undefined) {
  return useQuery({
    queryKey: ['admin-project-files', projectId],
    queryFn: async (): Promise<ProjectFile[]> => {
      if (!projectId) return [];
      const { data, error } = await supabase
        .from('project_files')
        .select('*')
        .eq('project_id', projectId)
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data || [];
    },
    enabled: !!projectId,
  });
}

// ============== MUTATIONS ==============

export function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (project: {
      title: string;
      slug: string;
      description?: string;
      short_description?: string;
      project_url?: string;
      github_url?: string;
      category?: string;
      status?: 'draft' | 'published' | 'archived';
    }) => {
      const { data, error } = await supabase
        .from('projects')
        .insert(project)
        .select()
        .single();
      if (error) throw error;
      return data as Project;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      updates,
    }: {
      id: string;
      updates: Partial<Project>;
    }) => {
      const { data, error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data as Project;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['admin-project', variables.id] });
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export function useDeleteProjectFile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      fileId,
      storagePath,
      bucket,
    }: {
      fileId: string;
      storagePath: string;
      bucket: string;
    }) => {
      // Delete from storage first
      const { error: storageError } = await supabase.storage
        .from(bucket)
        .remove([storagePath]);
      if (storageError) throw storageError;

      // Delete DB record
      const { error } = await supabase
        .from('project_files')
        .delete()
        .eq('id', fileId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['project-files'] });
      queryClient.invalidateQueries({ queryKey: ['admin-project-files'] });
    },
  });
}
