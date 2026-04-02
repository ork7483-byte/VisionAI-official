"use client";

import { useState } from "react";

interface BeforeAfterHoverProps {
  beforeImage: string;
  afterImage: string;
  category: string;
  label?: string;
}

export default function BeforeAfterHover({
  beforeImage,
  afterImage,
  category,
  label,
}: BeforeAfterHoverProps) {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer group"
      onMouseEnter={() => setIsAfter(true)}
      onMouseLeave={() => setIsAfter(false)}
      onClick={() => setIsAfter((v) => !v)}
    >
      {/* BEFORE layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAfter ? "opacity-0" : "opacity-100"
        }`}
      >
        {beforeImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={beforeImage}
            alt={`before ${category}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">이미지 없음</span>
          </div>
        )}
      </div>

      {/* AFTER layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAfter ? "opacity-100" : "opacity-0"
        }`}
      >
        {afterImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={afterImage}
            alt={`after ${category}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">이미지 없음</span>
          </div>
        )}
      </div>

      {/* Badge */}
      <div className="absolute top-3 left-3 z-10">
        {isAfter ? (
          <span className="badge-after bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded-md">
            AFTER
          </span>
        ) : (
          <span className="badge-before bg-brand-badge text-white text-xs font-bold px-2 py-1 rounded-md">
            BEFORE
          </span>
        )}
      </div>

      {/* Label */}
      {label && (
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-md">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
