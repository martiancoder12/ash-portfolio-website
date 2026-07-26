import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useAdminProjectById, useAdminProjectFiles } from '@/hooks/useProjects';
import { useFileUpload } from '@/hooks/useFileUpload';
import { supabase, type ProjectFile } from '@/lib/supabase';
import { ArrowLeft, Upload, Trash2, FileText, Image, Download, Loader2 } from 'lucide-react';

function getFileIcon(fileType: string) {
  if (fileType.startsWith('image/')) return <Image className="w-8 h-8 text-blue-500" />;
  return <FileText className="w-8 h-8 text-orange-500" />;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function ProjectFiles() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: project, isLoading: loadingProject } = useAdminProjectById(id);
  const { data: files, isLoading: loadingFiles } = useAdminProjectFiles(id);
  const { uploadMultiple, uploads, clearUploads } = useFileUpload();
  const [isDragging, setIsDragging] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (!id) return;

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length === 0) return;

    clearUploads();
    await uploadMultiple(droppedFiles, id);
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!id || !e.target.files?.length) return;
    const selectedFiles = Array.from(e.target.files);
    clearUploads();
    await uploadMultiple(selectedFiles, id);
    e.target.value = '';
  };

  const handleDelete = async (file: ProjectFile) => {
    if (!window.confirm(`Delete "${file.original_name}"?`)) return;
    setDeletingId(file.id);

    try {
      const { error: storageError } = await supabase.storage
        .from(file.storage_bucket)
        .remove([file.storage_path]);

      if (storageError) throw storageError;

      const { error } = await supabase
        .from('project_files')
        .delete()
        .eq('id', file.id);

      if (error) throw error;

      // Refresh files
      window.location.reload();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete file');
    } finally {
      setDeletingId(null);
    }
  };

  if (loadingProject) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-neutral-400" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">Project Files</h1>
            <p className="text-neutral-500 mt-1">{project?.title}</p>
          </div>
        </div>

        {/* Upload Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors mb-8 ${
            isDragging
              ? 'border-neutral-900 bg-neutral-50'
              : 'border-neutral-300 hover:border-neutral-400'
          }`}
        >
          <Upload className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
          <p className="text-neutral-600 font-medium">
            Drag & drop files here, or{' '}
            <label className="text-neutral-900 underline cursor-pointer hover:text-neutral-700">
              browse
              <input
                type="file"
                multiple
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
          </p>
          <p className="text-sm text-neutral-400 mt-1">
            PDF, PPTX, DOCX, ZIP up to 50MB • Images up to 20MB
          </p>
        </div>

        {/* Upload Progress */}
        {uploads.length > 0 && (
          <div className="mb-8 space-y-2">
            {uploads.map((upload, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-neutral-700">{upload.fileName}</span>
                  <span className="text-xs text-neutral-500">
                    {upload.status === 'completed'
                      ? 'Done'
                      : upload.status === 'error'
                      ? upload.error
                      : `${upload.progress.toFixed(0)}%`}
                  </span>
                </div>
                {upload.status === 'uploading' && (
                  <div className="w-full bg-neutral-100 rounded-full h-1.5">
                    <div
                      className="bg-neutral-900 h-1.5 rounded-full transition-all"
                      style={{ width: `${upload.progress}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Files List */}
        <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
          {loadingFiles ? (
            <div className="p-8 text-center text-neutral-500">Loading files...</div>
          ) : !files?.length ? (
            <div className="p-8 text-center">
              <FileText className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-neutral-500">No files yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-neutral-100">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center gap-4 p-4 hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex-shrink-0">{getFileIcon(file.file_type)}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-neutral-900 truncate">
                      {file.display_name || file.original_name}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {file.file_extension.toUpperCase()} • {formatFileSize(file.file_size_bytes)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {file.public_url && (
                      <a
                        href={file.public_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-400 hover:text-neutral-600 rounded-lg hover:bg-neutral-100"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => handleDelete(file)}
                      disabled={deletingId === file.id}
                      className="p-2 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-50"
                      title="Delete"
                    >
                      {deletingId === file.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  );
}
