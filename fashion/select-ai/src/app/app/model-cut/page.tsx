"use client";

import { useState, useCallback, useEffect } from "react";
import ImageUploader from "@/components/shared/ImageUploader";
import ResultCanvas from "@/components/shared/ResultCanvas";
import CategoryFilter from "@/components/shared/CategoryFilter";
import { modelPresets, categoryFilters } from "@/lib/mock/data";

export default function ModelCutPage() {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultImage, setResultImage] = useState<string | undefined>(undefined);

  const handleUpload = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setUploadedFile(url);
    setResultImage(undefined);
  }, []);

  const handleGenerate = () => {
    if (!uploadedFile) return;
    setIsLoading(true);
    setProgress(0);
    setResultImage(undefined);
  };

  // Fake progress simulation
  useEffect(() => {
    if (!isLoading) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          setResultImage(`https://picsum.photos/seed/modelcut-result-${Date.now()}/600/800`);
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
          <ImageUploader onUpload={handleUpload} preview={uploadedFile ?? undefined} label="바닥컷 또는 누끼 이미지 업로드" />
        </div>

        {/* Category */}
        <div>
          <h3 className="text-sm font-semibold text-brand-text mb-3">카테고리</h3>
          <CategoryFilter
            categories={categoryFilters.filter((c) => c.id !== "all")}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Model Selection */}
        <div>
          <h3 className="text-sm font-semibold text-brand-text mb-3">모델 선택</h3>
          <div className="grid grid-cols-3 gap-2">
            {modelPresets.map((model, idx) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`rounded-xl overflow-hidden aspect-[3/4] border-2 transition-all ${
                  selectedModel === model.id ? "border-brand-primary ring-2 ring-brand-primary/30" : "border-transparent"
                }`}
              >
                <img
                  src={`https://picsum.photos/seed/model-preset-${idx}/150/200`}
                  alt={model.label}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Generate */}
        <button
          onClick={handleGenerate}
          disabled={!uploadedFile || isLoading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "생성 중..." : "생성하기"}
        </button>
      </div>

      {/* Center Canvas */}
      <div className="flex-1 p-5 md:p-8 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-md">
          <ResultCanvas
            imageUrl={resultImage}
            isLoading={isLoading}
            progress={progress}
            emptyMessage="의상을 첨부하고 생성하기를 눌러주세요"
            onDownload={() => alert("다운로드")}
            onSave={() => alert("갤러리에 저장됨")}
            onShare={() => alert("공유 링크 복사됨")}
          />
        </div>
      </div>
    </div>
  );
}
