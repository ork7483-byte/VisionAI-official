import { Link } from 'react-router-dom';
import { IconMapPin, IconPhone, IconMail, IconArrowUpRight } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

const SERVICES = [
  { id: '01', title: 'AI ADS', subtitle: 'AI 광고제작', desc: 'AI 기술로 완성하는 고품질 광고 콘텐츠', color: 'bg-[#0a7d5a]', link: '/vision/ai-ads' },
  { id: '02', title: 'AI MODEL', subtitle: 'AI 모델', desc: '브랜드 맞춤형 가상 페르소나 기획 및 운영', color: 'bg-[#2563eb]', link: '/vision/ai-model' },
  { id: '03', title: 'WEB AGENCY', subtitle: '웹에이전시', desc: '비즈니스 맞춤형 웹사이트 구축 및 운영', color: 'bg-[#7c3aed]', link: '/vision/web-agency' },
  { id: '04', title: 'MATCHMAKING', subtitle: '결정사', desc: 'AI 알고리즘 기반 프리미엄 매칭 서비스', color: 'bg-[#1e3a5f]', link: '/vision/matchmaking' },
  { id: '05', title: 'MARKETING', subtitle: '온라인마케팅', desc: '바이럴·SNS·키워드 종합 마케팅 대행', color: 'bg-[#d97706]', link: '/vision/marketing' },
  { id: '06', title: 'AI EDUCATION', subtitle: 'AI 교육', desc: 'AI 이미지·영상·업무자동화·전환 교육', color: 'bg-[#dc2626]', link: '/vision/ai-education' }
];

export default function VisionHome() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <FadeIn>
          <div className="w-full aspect-[16/9] md:aspect-[16/7] rounded-sm overflow-hidden relative bg-gray-100">
            <img 
              src="https://picsum.photos/seed/fashion/1600/700" 
              alt="VisionAI Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </FadeIn>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="w-full md:w-[220px] shrink-0">
            <FadeIn>
              <div className="text-xs text-gray-400 uppercase font-bold mb-4">About</div>
              <h2 className="text-[32px] font-bold text-[#222] leading-[1.3]">
                AI기반<br />토탈 서비스
              </h2>
            </FadeIn>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <FadeIn delay={0.1}>
              <p className="text-[24px] md:text-[32px] text-[#222] leading-[44px] mb-16">
                각종 AI 기술을 활용하여<br />더 가치있는 서비스와 솔루션을 전달해 나갑니다.
              </p>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { num: '6', label: '운영사업' },
                { num: '40+', label: '파트너사' },
                { num: '60만+', label: '누적 프로젝트' }
              ].map((stat, idx) => (
                <FadeIn key={idx} delay={0.2 + idx * 0.1}>
                  <div className="w-[130px] h-[130px] rounded-full border border-gray-300 flex flex-col items-center justify-center">
                    <div className="text-[32px] font-bold text-[#222] leading-none mb-2">{stat.num}</div>
                    <div className="text-[13px] text-gray-500">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gray-200 w-full" />
      </div>

      {/* WHAT WE DO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 relative">
          {/* Sticky Left Column */}
          <div className="w-full md:w-[220px] shrink-0 md:sticky md:top-32 h-fit">
            <FadeIn>
              <div className="text-xs text-blue-600 uppercase font-bold mb-2">Brand</div>
              <h2 className="font-oswald text-[32px] font-bold text-[#222] leading-tight">
                WHAT WE DO
              </h2>
            </FadeIn>
          </div>

          {/* Vertical Divider (Desktop only) */}
          <div className="hidden md:block w-px bg-gray-200 absolute left-[240px] top-0 bottom-0" />

          {/* Cards Area */}
          <div className="flex-1 md:pl-12 flex flex-col space-y-16 md:space-y-24">
            {SERVICES.map((service, idx) => (
              <FadeIn key={service.id} delay={0.1}>
                <Link to={service.link} className="block group">
                  <div className={`relative w-full min-h-[320px] rounded-2xl overflow-hidden ${service.color} p-8 md:p-12 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`}>
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-30">
                      <img 
                        src={`https://picsum.photos/seed/${service.title.replace(' ', '')}/800/600`} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {/* Top row */}
                    <div className="relative z-10 flex justify-between items-start">
                      <div className="text-[13px] font-bold text-white/40 font-oswald">
                        {service.id}
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-white/20">
                        <IconArrowUpRight size={24} stroke={1.5} />
                      </div>
                    </div>

                    {/* Bottom row */}
                    <div className="relative z-10 mt-20">
                      <h3 className="font-oswald text-[48px] font-bold text-white leading-none mb-4">
                        {service.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-white font-bold text-lg">{service.subtitle}</span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
                        <span className="text-white/80 text-[15px]">{service.desc}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}

            <FadeIn>
              <div className="flex justify-center mt-8">
                <Link 
                  to="/service-copy" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#222] text-white text-[15px] font-bold rounded-full hover:bg-black transition-colors"
                >
                  전체 서비스 보기
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FULL IMAGE INTERLUDE */}
      <section className="w-full h-[55vh] relative flex items-center justify-center overflow-hidden bg-gray-900">
        <img 
          src="https://picsum.photos/seed/tech/1920/1080" 
          alt="Technology Meets Creativity" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
        <FadeIn className="relative z-10">
          <h2 className="font-oswald text-[42px] md:text-[56px] font-bold text-white tracking-tight text-center px-6">
            Technology Meets Creativity
          </h2>
        </FadeIn>
      </section>

      {/* LOCATION SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="w-full md:w-[220px] shrink-0">
            <FadeIn>
              <div className="text-xs text-gray-400 uppercase font-bold mb-4">Location</div>
              <h2 className="text-[32px] font-bold text-[#222] leading-[1.3] mb-8">
                오시는 길
              </h2>
              <div className="space-y-4 text-[15px] text-gray-600">
                <div className="flex items-start gap-3">
                  <IconMapPin size={20} className="shrink-0 mt-0.5 text-gray-400" />
                  <span>서울특별시 강남구 테헤란로 123<br />비전빌딩 10층</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconPhone size={20} className="shrink-0 text-gray-400" />
                  <span>02-1234-5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconMail size={20} className="shrink-0 text-gray-400" />
                  <span>contact@visionai.com</span>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="flex-1">
            <FadeIn delay={0.1}>
              <div className="w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
                <span className="text-sm font-bold">지도 API 연동 영역</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
