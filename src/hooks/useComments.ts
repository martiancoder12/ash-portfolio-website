import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, type PostComment } from '@/lib/supabase';

export function useAllComments() {
  return useQuery({
    queryKey: ['comments', 'all'],
    queryFn: async (): Promise<PostComment[]> => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    },
  });
}

export function useDeleteComment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('comments').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
}
