import React, { useState, useRef } from "react";
import { Upload, X, Send } from "lucide-react";

interface FileUploadProps {
  onFilesUploaded: (files: string[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesUploaded }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const fileNames = files.map((file) => file.name);
    const newFiles = [...uploadedFiles, ...fileNames];
    setUploadedFiles(newFiles);
    onFilesUploaded(newFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    onFilesUploaded(newFiles);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Upload Materials
        </h2>
        <p className="text-gray-600">
          Add your documents here, and you can upload up to 5 files max
        </p>
      </div>

      <div
        className={`
          border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200
          ${
            isDragOver
              ? "border-purple-400 bg-purple-50"
              : "border-gray-300 hover:border-purple-300 hover:bg-gray-50"
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Upload className="w-8 h-8 text-purple-600" />
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Drag your file(s) to start uploading
        </h3>

        <p className="text-gray-500 mb-6">OR</p>

        <button
          onClick={handleBrowseClick}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
        >
          Browse files
        </button>

        <p className="text-sm text-gray-400 mt-4">
          Only support .jpg, .png and .pdf and zip files
        </p>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.pdf,.zip"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-6 space-y-2">
          <h4 className="font-medium text-gray-900">Uploaded Files:</h4>
          {uploadedFiles.map((fileName, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-sm text-gray-700">{fileName}</span>
              <button
                onClick={() => removeFile(index)}
                className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Chat Input */}
      <div className="mt-8 flex items-center gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Ask question based off uploads"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={uploadedFiles.length === 0}
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {uploadedFiles.length} uploads
          </span>
          <button
            className="p-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
            disabled={uploadedFiles.length === 0}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
