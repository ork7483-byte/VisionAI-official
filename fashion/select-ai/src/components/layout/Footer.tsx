export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-main section-padding">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* 로고 + 설명 */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold tracking-tight">SELECT AI</span>
            <p className="text-sm text-white/60 max-w-xs">
              AI로 10초만에 스튜디오급 모델컷을 만드는 패션 이미지 SaaS
            </p>
          </div>

          {/* 링크 */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">서비스</span>
            <a href="#before-after" className="text-sm text-white/70 hover:text-white transition-colors">결과물 예시</a>
            <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">주요 기능</a>
            <a href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">요금제</a>
          </div>

          {/* 문의 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">문의</span>
            <a
              href="https://open.kakao.com/selectai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-kakao text-sm py-2 px-5 w-fit"
            >
              💬 카카오톡 문의하기
            </a>
            <p className="text-xs text-white/40">평일 10:00 ~ 18:00 응답</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-xs text-white/40">© 2026 SELECT AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">이용약관</a>
            <a href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
