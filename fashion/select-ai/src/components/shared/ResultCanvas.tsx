"use client";

import { Download, Save, Share2, ImageIcon } from "lucide-react";

interface ResultCanvasProps {
  imageUrl?: string;
  isLoading?: boolean;
  progress?: number;
  emptyMessage?: string;
  onDownload?: () => void;
  onSave?: () => void;
  onShare?: () => void;
}

export default function ResultCanvas({
  imageUrl,
  isLoading = false,
  progress,
  emptyMessage = "의상을 첨부하고 생성하기를 눌러주세요",
  onDownload,
  onSave,
  onShare,
}: ResultCanvasProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4]">
        {isLoading ? (
          /* Loading state */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-50">
            <div className="w-14 h-14 border-4 border-gray-200 border-t-brand-primary rounded-full animate-spin" />
            <p className="text-brand-sub text-sm font-medium">이미지 생성 중...</p>
            {progress !== undefined && (
              <div className="w-52">
                <div className="flex justify-between text-brand-sub text-xs mb-1">
                  <span>진행률</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-primary rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ) : imageUrl ? (
          /* Result image */
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt="생성 결과"
            className="w-full h-full object-cover"
          />
        ) : (
          /* Empty state */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
            <ImageIcon size={48} className="text-gray-300" />
            <p className="text-brand-sub text-sm leading-relaxed">{emptyMessage}</p>
          </div>
        )}
      </div>

      {/* Action buttons — only shown when result is available */}
      {imageUrl && !isLoading && (
        <div className="flex gap-2">
          {onDownload && (
            <button
              onClick={onDownload}
              className="flex-1 flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
            >
              <Download size={16} />
              다운로드
            </button>
          )}
          {onSave && (
            <button
              onClick={onSave}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-brand-text text-sm font-medium py-2.5 rounded-xl transition-colors"
            >
              <Save size={16} />
              갤러리에 저장
            </button>
          )}
          {onShare && (
            <button
              onClick={onShare}
              className="flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-brand-text text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
            >
              <Share2 size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
