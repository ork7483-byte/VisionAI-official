"use client";

import { useState, useMemo } from "react";
import CategoryFilter from "@/components/shared/CategoryFilter";
import GalleryGrid from "@/components/shared/GalleryGrid";
import { galleryTypeFilters, galleryItems } from "@/lib/mock/data";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Replace mock image paths with picsum placeholders
  const items = useMemo(() => {
    const mapped = galleryItems.map((item, idx) => ({
      ...item,
      imageUrl: `https://picsum.photos/seed/gallery-item-${idx}/400/530`,
    }));

    if (activeFilter === "all") return mapped;
    return mapped.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="h-full overflow-y-auto p-5 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-brand-text">내 갤러리</h1>
            <p className="text-sm text-brand-sub mt-1">생성한 이미지를 관리하세요</p>
          </div>
          <CategoryFilter
            categories={galleryTypeFilters}
            activeCategory={activeFilter}
            onCategoryChange={setActiveFilter}
          />
        </div>

        {/* Grid */}
        {items.length > 0 ? (
          <GalleryGrid
            items={items}
            columns={4}
            showOverlay
            onItemClick={(id) => alert(`이미지 상세: ${id}`)}
            onItemDelete={(id) => alert(`삭제: ${id}`)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-5xl mb-4">📷</div>
            <p className="text-brand-text font-medium mb-1">아직 생성한 이미지가 없습니다</p>
            <p className="text-brand-sub text-sm">AI 기능을 사용하여 이미지를 생성해보세요</p>
          </div>
        )}
      </div>
    </div>
  );
}
