import { IconUserScan, IconArrowRightCircle } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

export default function DetailAiModel() {
  return (
    <div className="min-h-screen bg-white font-sans pt-20 md:pt-24 pb-24">
      {/* HERO - Holographic Card */}
      <section className="w-full pt-12 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        {/* Decorative background blobs for glass effect */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2563eb] rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[100px] opacity-60" />
        
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-white/10 backdrop-blur-xl border-t border-l border-white/40 border-b border-r border-white/10 py-16 md:py-24 flex flex-col items-center justify-center text-center relative z-10 shadow-[20px_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.2)]">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl rotate-12 bg-gradient-to-br from-white/40 to-white/5 border border-white/30 flex items-center justify-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                <div className="-rotate-12">
                  <IconUserScan size={40} stroke={1.5} />
                </div>
              </div>
              <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 uppercase tracking-tight leading-none drop-shadow-2xl">
                AI MODEL
              </h1>
            </div>
            <p className="text-white/80 text-lg md:text-[20px] font-light tracking-wide">
              브랜드 맞춤형 가상 페르소나 기획 및 운영
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
              <div className="text-[#3b4859] font-bold mb-4 text-sm uppercase tracking-widest">Service.02</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                브랜드에 최적화된<br/>AI 가상 모델
              </h2>
              <div className="text-sm text-gray-500 mb-10">Since 2024.03</div>
              
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#4a5568] hover:bg-[#2d3748] text-white px-6 py-3.5 text-sm font-bold transition-colors shadow-sm w-full md:w-auto">
                홈페이지 바로가기 <IconArrowRightCircle size={18} />
              </a>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <FadeIn delay={0.2}>
              <img 
                src="https://picsum.photos/seed/model/800/500" 
                alt="AI MODEL" 
                className="w-full bg-gray-50 mb-8 shadow-sm rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-[15px] text-gray-600 leading-[1.8] whitespace-pre-wrap">
                초상권 제약 없이 자유롭게 활용 가능한 AI 가상 모델을 생성하고 운영합니다. 브랜드 아이덴티티에 완벽하게 부합하는 페르소나를 기획하여 차별화된 마케팅을 지원합니다.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
