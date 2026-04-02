"use client";

import { useState, useEffect } from "react";
import ImageUploader from "@/components/shared/ImageUploader";
import ResultCanvas from "@/components/shared/ResultCanvas";

const CATEGORIES = [
  { id: "perfume", label: "PERFUME" },
  { id: "fashion", label: "FASHION" },
  { id: "shoes", label: "SHOES" },
  { id: "bag", label: "BAG" },
];

export default function ProductCutPage() {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("fashion");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultImage, setResultImage] = useState<string | undefined>(undefined);
  const [showAfter, setShowAfter] = useState(true);

  const handleGenerate = () => {
    if (!uploadedFile) return;
    setIsLoading(true);
    setProgress(0);
    setResultImage(undefined);
  };

  useEffect(() => {
    if (!isLoading) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          setResultImage(`https://picsum.photos/seed/productcut-${Date.now()}/600/800`);
          return 100;
        }
        return prev + 3;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [isLoading]);

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Left Panel */}
      <div className="w-full md:w-80 shrink-0 bg-gray-50 border-r border-gray-100 overflow-y-auto p-5 space-y-6">
        {/* Upload */}
        <div>
          <h3 className="text-sm font-semibold text-brand-text mb-3">제품 이미지</h3>
          <ImageUploader
            onUpload={(file) => {
              const url = URL.createObjectURL(file);
              setUploadedFile(url);
              setResultImage(undefined);
            }}
            preview={uploadedFile ?? undefined}
            label="제품 사진 업로드"
          />
        </div>

        {/* Category */}
        <div>
          <h3 className="text-sm font-semibold text-brand-text mb-3">카테고리</h3>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2.5 rounded-xl text-xs font-bold tracking-wider transition-colors ${
                  activeCategory === cat.id
                    ? "bg-brand-primary text-white"
                    : "bg-white border border-gray-200 text-brand-sub hover:border-brand-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Before/After Toggle */}
        {resultImage && (
          <div>
            <h3 className="text-sm font-semibold text-brand-text mb-3">비교 모드</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setShowAfter(false)}
                className={`flex-1 py-2 rounded-xl text-xs font-medium transition-colors ${
                  !showAfter ? "bg-brand-badge text-white" : "bg-gray-200 text-brand-sub"
                }`}
              >
                BEFORE
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`flex-1 py-2 rounded-xl text-xs font-medium transition-colors ${
                  showAfter ? "bg-brand-primary text-white" : "bg-gray-200 text-brand-sub"
                }`}
              >
                AFTER
              </button>
            </div>
          </div>
        )}

        {/* Generate */}
        <button
          onClick={handleGenerate}
          disabled={!uploadedFile || isLoading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "생성 중..." : "생성하기"}
        </button>
      </div>

      {/* Center */}
      <div className="flex-1 p-5 md:p-8 flex items-center justify-center overflow-y-auto">
        {resultImage ? (
          <div className="w-full max-w-3xl">
            <div className="grid grid-cols-2 gap-4">
              {/* Before */}
              <div className={`rounded-2xl overflow-hidden border-2 transition-all ${!showAfter ? "border-brand-badge" : "border-gray-200"}`}>
                <div className="bg-brand-badge text-white text-xs font-bold px-3 py-1.5 text-center">BEFORE</div>
                <div className="aspect-[3/4] bg-gray-100">
                  {uploadedFile ? (
                    <img src={uploadedFile} alt="before" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">원본</div>
                  )}
                </div>
              </div>
              {/* After */}
              <div className={`rounded-2xl overflow-hidden border-2 transition-all ${showAfter ? "border-brand-primary" : "border-gray-200"}`}>
                <div className="bg-brand-primary text-white text-xs font-bold px-3 py-1.5 text-center">AFTER</div>
                <div className="aspect-[3/4] bg-gray-100">
                  <img src={resultImage} alt="after" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-4">
              <button className="btn-primary text-sm py-2 px-5">다운로드</button>
              <button className="btn-secondary text-sm py-2 px-5">갤러리에 저장</button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <ResultCanvas
              isLoading={isLoading}
              progress={progress}
              emptyMessage="제품 사진을 업로드하고 생성하기를 눌러주세요"
            />
          </div>
        )}
      </div>
    </div>
  );
}
