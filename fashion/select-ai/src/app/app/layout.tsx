"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mockUsage } from "@/lib/mock/data";

const TABS = [
  { label: "모델컷", href: "/app/model-cut" },
  { label: "가상피팅", href: "/app/fitting" },
  { label: "영상", href: "/app/video" },
  { label: "연출컷", href: "/app/product-cut" },
  { label: "갤러리", href: "/app/gallery" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const totalUsed = mockUsage.modelCut + mockUsage.fitting + mockUsage.video + mockUsage.productCut;

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top Nav */}
      <header className="shrink-0 border-b border-gray-100 bg-white z-40">
        <div className="px-4 md:px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold tracking-tight text-brand-text">
            SELECT
          </Link>

          {/* Tabs - scrollable on mobile */}
          <nav className="flex-1 mx-6 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-1 min-w-max">
              {TABS.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                      isActive
                        ? "bg-brand-primary text-white"
                        : "text-brand-sub hover:bg-gray-100 hover:text-brand-text"
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/pricing" className="hidden md:block text-xs text-brand-sub hover:text-brand-primary transition-colors">
              요금제
            </Link>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-brand-sub">
              김
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>

      {/* Bottom Usage Bar */}
      <footer className="shrink-0 border-t border-gray-100 bg-gray-50 px-4 md:px-8 h-10 flex items-center justify-between text-xs">
        <span className="text-brand-sub">
          남은 횟수: <span className="font-semibold text-brand-text">{totalUsed}/3건</span>
        </span>
        <Link href="/pricing" className="text-brand-primary font-medium hover:underline">
          업그레이드
        </Link>
      </footer>
    </div>
  );
}
