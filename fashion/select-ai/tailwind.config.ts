import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4F46E5",    // 인디고 - CTA, 프로 플랜
          success: "#10B981",    // 그린 - 성공, 절감 강조
          dark: "#0F172A",       // 거의 블랙 - 다크 섹션 배경
          text: "#111827",       // 거의 블랙 - 텍스트
          sub: "#6B7280",        // 그레이 - 서브텍스트
          badge: "#1F2937",      // 다크 - BEFORE/AFTER 뱃지
          free: "#9CA3AF",       // 그레이 - 무료 상태
        },
        surface: {
          light: "#FAFAFA",      // 라이트그레이 - 배경
        },
      },
      fontFamily: {
        sans: ["Pretendard", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "count-up": "countUp 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
