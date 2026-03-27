import { IconSchool, IconArrowRightCircle } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

export default function DetailAiEducation() {
  return (
    <div className="min-h-screen bg-white font-sans pt-20 md:pt-24 pb-24">
      {/* HERO - Holographic Card */}
      <section className="w-full pt-6 pb-8 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#dc2626] rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ef4444] rounded-full mix-blend-screen filter blur-[100px] opacity-60" />

        <div className="max-w-7xl mx-auto rounded-[2rem] bg-white/10 backdrop-blur-xl border-t border-l border-white/40 border-b border-r border-white/10 py-6 md:py-8 flex flex-col items-center justify-center text-center relative z-10 shadow-[20px_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.2)]">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl rotate-12 bg-gradient-to-br from-white/40 to-white/5 border border-white/30 flex items-center justify-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                <div className="-rotate-12">
                  <IconSchool size={40} stroke={1.5} />
                </div>
              </div>
              <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 uppercase tracking-tight leading-none drop-shadow-2xl">
                AI EDUCATION
              </h1>
            </div>
            <p className="text-white/80 text-lg md:text-[20px] font-light tracking-wide">
              실무 중심 AI 활용 교육 프로그램
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
              <div className="text-[#3b4859] font-bold mb-4 text-sm uppercase tracking-widest">Service.06</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                AI 시대를 위한<br/>실전 교육
              </h2>
              <div className="text-sm text-gray-500 mb-10">Since 2024.06</div>

              <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#4a5568] hover:bg-[#2d3748] text-white px-6 py-3.5 text-sm font-bold transition-colors shadow-sm w-full md:w-auto">
                교육 문의하기 <IconArrowRightCircle size={18} />
              </a>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <FadeIn delay={0.2}>
              <img
                src="https://picsum.photos/seed/education/800/500"
                alt="AI EDUCATION"
                className="w-full bg-gray-50 mb-8 shadow-sm rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-[15px] text-gray-600 leading-[1.8] whitespace-pre-wrap mb-10">
                기업과 개인을 위한 실무 중심 AI 교육 프로그램을 운영합니다. AI 이미지 생성, 영상 제작, 업무 자동화, AI 전환 전략까지 현장에서 바로 적용 가능한 커리큘럼으로 구성되어 있습니다. 비전공자도 쉽게 따라할 수 있는 단계별 교육으로 AI 역량을 빠르게 확보할 수 있습니다.
              </p>

              {/* Curriculum Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="text-[13px] font-bold text-[#dc2626] uppercase mb-2">Course 01</div>
                  <h3 className="text-[16px] font-bold text-[#222] mb-2">AI 이미지 제작</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">Midjourney, Stable Diffusion 등을 활용한 고품질 이미지 생성 및 편집 실습</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="text-[13px] font-bold text-[#dc2626] uppercase mb-2">Course 02</div>
                  <h3 className="text-[16px] font-bold text-[#222] mb-2">AI 영상 제작</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">AI 기반 숏폼·광고 영상 제작, 편집 자동화 워크플로우 구축</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="text-[13px] font-bold text-[#dc2626] uppercase mb-2">Course 03</div>
                  <h3 className="text-[16px] font-bold text-[#222] mb-2">업무 자동화</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">ChatGPT, 자동화 도구를 활용한 반복 업무 효율화 및 프로세스 개선</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="text-[13px] font-bold text-[#dc2626] uppercase mb-2">Course 04</div>
                  <h3 className="text-[16px] font-bold text-[#222] mb-2">AI 전환 컨설팅</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">기업 맞춤형 AI 도입 전략 수립, 조직 내 AI 전환 로드맵 설계</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
