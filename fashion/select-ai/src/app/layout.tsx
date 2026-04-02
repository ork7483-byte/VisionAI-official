import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SELECT AI — 사진 올리면 AI 모델컷 나온다",
  description:
    "패션 셀러를 위한 AI 이미지 생성 구독 서비스. 모델 촬영 없이 AI로 10초만에 스튜디오급 모델컷을 완성하세요.",
  keywords: "AI 모델컷, 가상피팅, 패션 이미지, 동대문 셀러, 스마트스토어",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
