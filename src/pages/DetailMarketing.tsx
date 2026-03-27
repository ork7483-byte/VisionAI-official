import { IconSpeakerphone, IconArrowRightCircle } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

export default function DetailMarketing() {
  return (
    <div className="min-h-screen bg-white font-sans pt-20 md:pt-24 pb-24">
      {/* HERO - Holographic Card */}
      <section className="w-full pt-6 pb-8 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        {/* Decorative background blobs for glass effect */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d97706] rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#f59e0b] rounded-full mix-blend-screen filter blur-[100px] opacity-60" />

        <div className="max-w-7xl mx-auto rounded-[2rem] bg-white/10 backdrop-blur-xl border-t border-l border-white/40 border-b border-r border-white/10 py-6 md:py-8 flex flex-col items-center justify-center text-center relative z-10 shadow-[20px_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.2)]">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl rotate-12 bg-gradient-to-br from-white/40 to-white/5 border border-white/30 flex items-center justify-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                <div className="-rotate-12">
                  <IconSpeakerphone size={40} stroke={1.5} />
                </div>
              </div>
              <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 uppercase tracking-tight leading-none drop-shadow-2xl">
                MARKETING
              </h1>
            </div>
            <p className="text-white/80 text-lg md:text-[20px] font-light tracking-wide">
              바이럴·SNS·키워드 종합 온라인 마케팅 대행
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-[240px] shrink-0">
            <FadeIn>
              <div className="text-[#3b4859] font-bold mb-4 text-sm uppercase tracking-widest">Service.05</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                성과로 증명하는<br/>종합 마케팅
              </h2>
              <div className="text-sm text-gray-500 mb-10">Since 2016</div>

              <a href="https://www.charmingsad.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#4a5568] hover:bg-[#2d3748] text-white px-6 py-3.5 text-sm font-bold transition-colors shadow-sm w-full md:w-auto">
                홈페이지 바로가기 <IconArrowRightCircle size={18} />
              </a>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <FadeIn delay={0.2}>
              <img
                src="https://picsum.photos/seed/marketing/800/500"
                alt="MARKETING"
                className="w-full bg-gray-50 mb-8 shadow-sm rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-[15px] text-gray-600 leading-[1.8] whitespace-pre-wrap">
                국내 1위 마케팅 플랫폼 상위 1% 전문가 집단, 차밍스애드가 운영하는 종합 온라인 마케팅 서비스입니다. 바이럴 마케팅, 키워드 마케팅, SNS 마케팅을 포함해 뷰티·골목상권·오프라인 광고까지 브랜드에 최적화된 마케팅 전략을 설계하고 실행합니다. 누적 4,000건 이상의 프로젝트 경험과 높은 재구매율로 기대 이상의 성과를 보장합니다.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
