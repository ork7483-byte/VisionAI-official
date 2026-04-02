"use client";

import { useState, useCallback, useEffect } from "react";
import ImageUploader from "@/components/shared/ImageUploader";
import ResultCanvas from "@/components/shared/ResultCanvas";
import {
  modelPresets,
  posePresets,
  backgroundPresets,
  topPresets,
  bottomPresets,
  ratioOptions,
} from "@/lib/mock/data";

function PresetGrid({
  presets,
  selectedId,
  onSelect,
  seedPrefix,
  columns = 3,
}: {
  presets: { id: string; label: string }[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  seedPrefix: string;
  columns?: number;
}) {
  return (
    <div className={`grid gap-2 ${columns === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
      {presets.map((p, idx) => (
        <button
          key={p.id}
          onClick={() => onSelect(p.id)}
          className={`rounded-xl overflow-hidden aspect-square border-2 transition-all relative group ${
            selectedId === p.id ? "border-brand-primary ring-2 ring-brand-primary/30" : "border-transparent"
          }`}
        >
          <img
            src={`https://picsum.photos/seed/${seedPrefix}-${idx}/150/150`}
            alt={p.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/50 py-1 text-white text-[10px] text-center opacity-0 group-hover:opacity-100 transition-opacity">
            {p.label}
          </div>
        </button>
      ))}
    </div>
  );
}

export default function FittingPage() {
  const [clothingTab, setClothingTab] = useState<"separate" | "onepiece">("separate");
  const [selectedTop, setSelectedTop] = useState<string | null>(null);
  const [selectedBottom, setSelectedBottom] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedPose, setSelectedPose] = useState<string | null>(null);
  const [selectedBg, setSelectedBg] = useState<string | null>(null);
  const [selectedRatio, setSelectedRatio] = useState("3:4");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultImage, setResultImage] = useState<string | undefined>(undefined);

  const handleGenerate = () => {
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
          setResultImage(`https://picsum.photos/seed/fitting-result-${Date.now()}/600/800`);
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
      <div className="w-full md:w-80 shrink-0 bg-gray-50 border-r border-gray-100 overflow-y-auto p-5 space-y-5">
        {/* 01 의상 */}
        <div>
          <h3 className="text-xs text-brand-sub font-bold mb-2">01 의상</h3>
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => setClothingTab("separate")}
              className={`flex-1 text-xs py-2 rounded-lg font-medium transition-colors ${
                clothingTab === "separate" ? "bg-brand-primary text-white" : "bg-gray-200 text-brand-sub"
              }`}
            >
              상/하의
            </button>
            <button
              onClick={() => setClothingTab("onepiece")}
              className={`flex-1 text-xs py-2 rounded-lg font-medium transition-colors ${
                clothingTab === "onepiece" ? "bg-brand-primary text-white" : "bg-gray-200 text-brand-sub"
              }`}
            >
              원피스
            </button>
          </div>
          {clothingTab === "separate" ? (
            <>
              <p className="text-xs text-brand-sub mb-2">상의</p>
              <PresetGrid presets={topPresets} selectedId={selectedTop} onSelect={setSelectedTop} seedPrefix="top" />
              <p className="text-xs text-brand-sub mt-3 mb-2">하의</p>
              <PresetGrid presets={bottomPresets} selectedId={selectedBottom} onSelect={setSelectedBottom} seedPrefix="bottom" />
            </>
          ) : (
            <ImageUploader onUpload={() => {}} label="원피스 이미지 업로드" compact />
          )}
        </div>

        {/* 02 모델 */}
        <div>
          <h3 className="text-xs text-brand-sub font-bold mb-2">02 모델</h3>
          <PresetGrid presets={modelPresets} selectedId={selectedModel} onSelect={setSelectedModel} seedPrefix="fit-model" />
        </div>

        {/* 03 포즈 */}
        <div>
          <h3 className="text-xs text-brand-sub font-bold mb-2">03 포즈</h3>
          <PresetGrid presets={posePresets} selectedId={selectedPose} onSelect={setSelectedPose} seedPrefix="pose" columns={2} />
        </div>

        {/* 04 배경 */}
        <div>
          <h3 className="text-xs text-brand-sub font-bold mb-2">04 배경</h3>
          <PresetGrid presets={backgroundPresets} selectedId={selectedBg} onSelect={setSelectedBg} seedPrefix="bg" columns={2} />
        </div>

        {/* Generate */}
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "생성 중..." : "생성하기"}
        </button>
      </div>

      {/* Center */}
      <div className="flex-1 p-5 md:p-8 flex flex-col overflow-y-auto">
        {/* Ratio selector */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1 shrink-0">
          {ratioOptions.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRatio(r.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedRatio === r.id
                  ? "bg-brand-primary text-white"
                  : "bg-gray-100 text-brand-sub hover:bg-gray-200"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Canvas */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <ResultCanvas
              imageUrl={resultImage}
              isLoading={isLoading}
              progress={progress}
              emptyMessage="의상과 모델을 선택하고 생성하기를 눌러주세요"
              onDownload={() => alert("다운로드")}
              onSave={() => alert("갤러리에 저장됨")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
