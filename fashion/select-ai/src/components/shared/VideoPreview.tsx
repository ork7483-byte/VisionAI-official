"use client";

import { Video } from "lucide-react";

interface VideoPreviewProps {
  videoUrl?: string;
  posterImage?: string;
  isLoading?: boolean;
  progress?: number;
}

export default function VideoPreview({
  videoUrl,
  posterImage,
  isLoading = false,
  progress,
}: VideoPreviewProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video">
      {videoUrl ? (
        <video
          src={videoUrl}
          poster={posterImage}
          controls
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-500">
          <Video size={48} className="text-gray-600" />
          <p className="text-sm">영상이 없습니다</p>
        </div>
      )}

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          <p className="text-white text-sm font-medium">영상 생성 중...</p>

          {/* Progress bar */}
          {progress !== undefined && (
            <div className="w-48">
              <div className="flex justify-between text-white/70 text-xs mb-1">
                <span>진행률</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-primary rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
