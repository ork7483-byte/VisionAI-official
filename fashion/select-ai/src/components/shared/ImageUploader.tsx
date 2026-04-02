"use client";

import { useCallback, useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

interface ImageUploaderProps {
  onUpload: (file: File) => void;
  accept?: string;
  maxSize?: number; // bytes
  preview?: string;
  label?: string;
  compact?: boolean;
}

export default function ImageUploader({
  onUpload,
  accept = "image/*",
  maxSize = 10 * 1024 * 1024, // 10MB default
  preview,
  label = "이미지를 드래그하거나 클릭해서 업로드",
  compact = false,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [localPreview, setLocalPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback(
    (file: File) => {
      setError(null);
      if (file.size > maxSize) {
        setError(`파일 크기는 ${Math.round(maxSize / 1024 / 1024)}MB 이하여야 합니다.`);
        return;
      }
      const url = URL.createObjectURL(file);
      setLocalPreview(url);
      onUpload(file);
    },
    [maxSize, onUpload]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const displayPreview = preview ?? localPreview;

  return (
    <div
      className={`relative border-2 border-dashed rounded-xl transition-colors cursor-pointer
        ${isDragging ? "border-brand-primary bg-indigo-50" : "border-gray-300 hover:border-brand-primary bg-gray-50"}
        ${compact ? "p-3" : "p-6"}
      `}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleChange}
      />

      {displayPreview ? (
        <div className={`relative ${compact ? "h-24" : "h-48"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={displayPreview}
            alt="preview"
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
            <span className="opacity-0 hover:opacity-100 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full transition-opacity">
              변경
            </span>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col items-center gap-2 text-center ${compact ? "py-2" : "py-4"}`}>
          <UploadCloud
            size={compact ? 24 : 36}
            className={isDragging ? "text-brand-primary" : "text-gray-400"}
          />
          <p className={`text-brand-sub ${compact ? "text-xs" : "text-sm"}`}>{label}</p>
          {!compact && (
            <p className="text-xs text-gray-400">
              최대 {Math.round(maxSize / 1024 / 1024)}MB
            </p>
          )}
        </div>
      )}

      {error && (
        <p className="mt-2 text-xs text-red-500 text-center">{error}</p>
      )}
    </div>
  );
}
