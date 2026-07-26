import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

const ALLOWED_TYPES: Record<string, string[]> = {
  'project-files': [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/msword',
    'application/zip',
  ],
  'project-images': [
    'image/png',
    'image/jpeg',
    'image/webp',
  ],
};

const MAX_SIZES: Record<string, number> = {
  'project-files': 50 * 1024 * 1024,    // 50MB
  'project-images': 20 * 1024 * 1024,   // 20MB
};

export interface UploadProgress {
  fileName: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
}

export interface UploadResult {
  fileId: string;
  path: string;
  url: string;
}

export function validateFile(file: File, bucket: string): { valid: boolean; error?: string } {
  const allowedTypes = ALLOWED_TYPES[bucket];
  const maxSize = MAX_SIZES[bucket];

  if (!allowedTypes?.includes(file.type)) {
    return { valid: false, error: `Invalid file type: ${file.type}` };
  }

  if (file.size > maxSize) {
    return { valid: false, error: `File too large: ${(file.size / 1024 / 1024).toFixed(1)}MB (max ${maxSize / 1024 / 1024}MB)` };
  }

  // Check file extension matches MIME type
  const ext = file.name.split('.').pop()?.toLowerCase();
  const mimeExtMap: Record<string, string[]> = {
    'application/pdf': ['pdf'],
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['pptx'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['docx'],
    'application/vnd.ms-powerpoint': ['ppt'],
    'application/msword': ['doc'],
    'image/png': ['png'],
    'image/jpeg': ['jpg', 'jpeg'],
    'image/webp': ['webp'],
    'application/zip': ['zip'],
  };

  const validExts = mimeExtMap[file.type];
  if (validExts && !validExts.includes(ext || '')) {
    return { valid: false, error: `File extension .${ext} does not match MIME type ${file.type}` };
  }

  return { valid: true };
}

export function useFileUpload() {
  const [uploads, setUploads] = useState<UploadProgress[]>([]);

  const uploadFile = useCallback(async (
    file: File,
    projectId: string,
    bucket: string = 'project-files',
    displayName?: string
  ): Promise<UploadResult | null> => {
    // Validate
    const validation = validateFile(file, bucket);
    if (!validation.valid) {
      setUploads(prev => [...prev, {
        fileName: file.name,
        progress: 0,
        status: 'error',
        error: validation.error,
      }]);
      return null;
    }

    setUploads(prev => [...prev, {
      fileName: file.name,
      progress: 0,
      status: 'uploading',
    }]);

    const fileExt = file.name.split('.').pop() || '';
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${projectId}/${fileName}`;

    try {
      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      // Save metadata to database
      const { data: dbData, error: dbError } = await supabase
        .from('project_files')
        .insert({
          project_id: projectId,
          file_name: fileName,
          original_name: file.name,
          file_type: file.type,
          file_extension: fileExt,
          file_size_bytes: file.size,
          storage_bucket: bucket,
          storage_path: filePath,
          public_url: urlData.publicUrl,
          display_name: displayName || file.name,
        })
        .select()
        .single();

      if (dbError) throw dbError;

      setUploads(prev =>
        prev.map(u =>
          u.fileName === file.name
            ? { ...u, progress: 100, status: 'completed' as const }
            : u
        )
      );

      return {
        fileId: dbData.id,
        path: filePath,
        url: urlData.publicUrl,
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setUploads(prev =>
        prev.map(u =>
          u.fileName === file.name
            ? { ...u, status: 'error' as const, error: message }
            : u
        )
      );
      throw err;
    }
  }, []);

  const uploadMultiple = useCallback(async (
    files: File[],
    projectId: string,
    bucket: string = 'project-files'
  ): Promise<UploadResult[]> => {
    const results: UploadResult[] = [];
    for (const file of files) {
      try {
        const result = await uploadFile(file, projectId, bucket);
        if (result) results.push(result);
      } catch {
        // Individual errors handled in uploadFile
      }
    }
    return results;
  }, [uploadFile]);

  const clearUploads = useCallback(() => {
    setUploads([]);
  }, []);

  return { uploadFile, uploadMultiple, uploads, clearUploads };
}
