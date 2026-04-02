"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-main px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <a
            href="#hero"
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-brand-text" : "text-white"
            }`}
          >
            SELECT
          </a>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                scrolled ? "text-brand-text" : "text-white/90"
              }`}
            >
              홈
            </a>
            <a
              href="#pricing"
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                scrolled ? "text-brand-text" : "text-white/90"
              }`}
            >
              요금제
            </a>
            <a href="#hero" className="btn-primary text-sm py-2 px-5">
              무료로 시작하기
            </a>
          </div>

          {/* 모바일: CTA + 햄버거 */}
          <div className="flex md:hidden items-center gap-3">
            <a href="#hero" className="btn-primary text-sm py-2 px-4">
              무료로 시작하기
            </a>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="메뉴 열기"
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-brand-text" : "text-white"
              }`}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-4 py-4 gap-4">
            <a
              href="#hero"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors"
            >
              홈
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors"
            >
              요금제
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
