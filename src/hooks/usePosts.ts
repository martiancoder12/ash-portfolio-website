import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, type Post, type PostInsert } from '@/lib/supabase';
import { builtinPosts, mergePublishedPosts } from '@/content/builtinPosts';

// ============== PUBLIC QUERIES ==============

export function usePublishedPosts() {
  return useQuery({
    queryKey: ['posts', 'published'],
    queryFn: async (): Promise<Post[]> => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });
      if (error) throw error;
      return mergePublishedPosts(data || []);
    },
  });
}

export function usePostBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: async (): Promise<Post | null> => {
      if (!slug) return null;
      const builtin = builtinPosts.find((post) => post.slug === slug);
      if (builtin) return builtin;
      const { data, error } = await supabase
        .from('posts')
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

// ============== AUTHENTICATED QUERIES (Dashboard) ==============

export function useAllPosts() {
  return useQuery({
    queryKey: ['posts', 'all'],
    queryFn: async (): Promise<Post[]> => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('updated_at', { ascending: false });
      if (error) throw error;
      return data || [];
    },
  });
}

export function useAdminPostById(id: string | undefined) {
  return useQuery({
    queryKey: ['admin-post', id],
    queryFn: async (): Promise<Post | null> => {
      if (!id) return null;
      const { data, error } = await supabase
        .from('posts')
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

// ============== MUTATIONS ==============

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (post: PostInsert) => {
      const { data, error } = await supabase
        .from('posts')
        .insert(post)
        .select()
        .single();
      if (error) throw error;
      return data as Post;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}

export function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Post> }) => {
      const { data, error } = await supabase
        .from('posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data as Post;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['admin-post', variables.id] });
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
