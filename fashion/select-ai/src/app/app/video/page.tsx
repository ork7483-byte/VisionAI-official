"use client";

import { useState, useEffect } from "react";
import ImageUploader from "@/components/shared/ImageUploader";
import VideoPreview from "@/components/shared/VideoPreview";

const MOODS = ["자연광", "스튜디오", "시네마틱", "빈티지"];
const SCENES = [
  { id: "space", label: "공간감 강조" },
  { id: "light", label: "조명 효과" },
  { id: "depth", label: "깊이감 추가" },
];
const DURATIONS = ["3초", "5초", "10초"];

export default function VideoPage() {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState("자연광");
  const [sceneToggles, setSceneToggles] = useState<Record<string, boolean>>({
    space: false,
    light: false,
    depth: false,
  });
  const [duration, setDuration] = useState("5초");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultReady, setResultReady] = useState(false);

  const handleGenerate = () => {
    if (!uploadedFile) return;
    setIsLoading(true);
    setProgress(0);
    setResultReady(false);
  };

  useEffect(() => {
    if (!isLoading) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          setResultReady(true);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [isLoading]);

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Left Panel */}
      <div className="w-full md:w-80 shrink-0 bg-gray-50 border-r border-gray-100 overflow-y-auto p-5 space-y-6">
        {/* Upload */}
        <div>
          <h3 className="text-sm font-semibold text-brand-text mb-3">이미지 선택</h3>
          <ImageUploader
            onUpload={(file) => {
              const url = URL.createObjectURL(file);
              setUploadedFile(url);
              setResultReady(false);
            }}
            preview={uploadedFile ?? undefined}
            label="룩북 이미지 업로드"
          />
        </div>

        {/* Visual Mood */}
        <div>
          <h3 className="text-sm font-semibold text-brand-text mb-3">Visual Mood</h3>
          <div className="grid grid-cols-2 gap-2">
            {MOODS.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`py-2.5 rounded-xl text-xs font-medium transition-colors ${
                  selectedMood === mood
                    ? "bg-brand-primary text-white"
                    : "bg-white border border-gray-200 text-brand-sub hover:border-brand-primary"
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Scene Control */}
        <div>
          <h3 className="text-sm font-semibold text-brand-text mb-3">Scene Control</h3>
          <div className="space-y-3">
            {SCENES.map((scene) => (
              <label key={scene.id} className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-brand-text">{scene.label}</span>
                <button
                  onClick={() =>
                    setSceneToggles((prev) => ({ ...prev, [scene.id]: !prev[scene.id] }))
                  }
                  className={`relative w-10 h-5 rounded-full transition-colors ${
                    sceneToggles[scene.id] ? "bg-brand-primary" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                      sceneToggles[scene.id] ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </label>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <h3 className="text-sm font-semibold text-brand-text mb-3">영상 길이</h3>
          <div className="flex gap-2">
            {DURATIONS.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`flex-1 py-2 rounded-xl text-xs font-medium transition-colors ${
                  duration === d
                    ? "bg-brand-primary text-white"
                    : "bg-white border border-gray-200 text-brand-sub hover:border-brand-primary"
                }`}
              >
                {d}
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

      {/* Center */}
      <div className="flex-1 p-5 md:p-8 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-2xl">
          <VideoPreview
            videoUrl={resultReady ? undefined : undefined}
            posterImage={resultReady ? `https://picsum.photos/seed/video-poster-${Date.now()}/800/450` : undefined}
            isLoading={isLoading}
            progress={progress}
          />
          {resultReady && (
            <div className="mt-4 text-center">
              <p className="text-brand-sub text-sm mb-3">영상이 생성되었습니다 (데모 — 실제 영상은 API 연동 후 표시)</p>
              <div className="flex gap-2 justify-center">
                <button className="btn-primary text-sm py-2 px-5">다운로드</button>
                <button className="btn-secondary text-sm py-2 px-5">갤러리에 저장</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
