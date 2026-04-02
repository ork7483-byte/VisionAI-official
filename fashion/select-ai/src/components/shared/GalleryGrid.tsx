"use client";

import { Download, Trash2 } from "lucide-react";

interface GalleryGridProps {
  items: Array<{ id: string; imageUrl: string; type?: string; category?: string }>;
  columns?: 3 | 4;
  onItemClick?: (id: string) => void;
  onItemDelete?: (id: string) => void;
  showOverlay?: boolean;
}

export default function GalleryGrid({
  items,
  columns = 3,
  onItemClick,
  onItemDelete,
  showOverlay = false,
}: GalleryGridProps) {
  const colClass =
    columns === 4
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3";

  return (
    <div className={`grid ${colClass} gap-3`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="relative rounded-xl overflow-hidden aspect-[3/4] bg-gray-100 cursor-pointer group"
          onClick={() => onItemClick?.(item.id)}
        >
          {item.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.imageUrl}
              alt={item.category ?? item.type ?? "gallery item"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">이미지 없음</span>
            </div>
          )}

          {/* Overlay on hover */}
          {showOverlay && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
              <button
                className="bg-white/90 hover:bg-white text-brand-text rounded-lg p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const link = document.createElement("a");
                  link.href = item.imageUrl;
                  link.download = `${item.id}.jpg`;
                  link.click();
                }}
                title="다운로드"
              >
                <Download size={18} />
              </button>
              {onItemDelete && (
                <button
                  className="bg-white/90 hover:bg-red-50 text-red-500 rounded-lg p-2 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onItemDelete(item.id);
                  }}
                  title="삭제"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
          )}

          {/* Type badge */}
          {item.type && (
            <div className="absolute bottom-2 left-2">
              <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full">
                {item.type}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
