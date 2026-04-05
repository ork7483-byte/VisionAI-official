import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

const BRANDS = [
  { id: '01', title: 'AI AD AGENCY', subtitle: 'AI 광고 에이전시', link: 'https://crawled.vercel.app', image: 'advertising', external: true },
  { id: '02', title: 'AI MODEL AGENCY', subtitle: 'AI 모델 에이전시', link: 'https://www.selectaimodel.co.kr/', image: 'modeling', external: true },
  { id: '03', title: 'AI WEB AGENCY', subtitle: 'AI 웹 에이전시', link: 'https://project113-azure.vercel.app/', image: 'webdesign', external: true },
  { id: '04', title: 'AI INFLUENCER', subtitle: 'AI 인플루언서 매칭', link: 'https://ulggang.vercel.app/matching', image: 'influencer', external: true },
  { id: '05', title: 'AI FITTING', subtitle: 'AI 가상피팅', link: 'https://vton-visionai.vercel.app', image: 'fitting', external: true },
  { id: '06', title: 'AI FOOD PHOTO', subtitle: 'AI 음식사진 생성', link: 'https://food-visionai.vercel.app', image: 'food', external: true },
  { id: '07', title: 'AI HAIR MODEL', subtitle: 'AI 헤어모델', link: 'https://hair-visionai.vercel.app', image: 'hairstyle', external: true },
  { id: '08', title: 'AI DETAIL PAGE', subtitle: 'AI 상세페이지 생성', link: 'https://detailpage-visionai.vercel.app', image: 'ecommerce', external: true },
  { id: '09', title: 'AI FASHION MALL', subtitle: 'AI 패션몰 제작', link: 'https://yours-lovat.vercel.app/', image: 'fashion', external: true },
  { id: '10', title: 'SNS AGENCY', subtitle: 'SNS 채널 운영 대행 (범용)', link: 'https://external-site-ten.vercel.app', image: 'marketing', external: true },
  { id: '11', title: 'BEAUTY BRAND SNS', subtitle: '뷰티 브랜드 전문 SNS 대행', link: 'https://external-site-beauty.vercel.app', image: 'cosmetics', external: true },
  { id: '12', title: 'OPS DASHBOARD', subtitle: '마케팅 자동화 내부 대시보드', link: 'https://phase0-dashboard-app.vercel.app', image: 'dashboard', external: true },
];

export default function Brand() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % BRANDS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-20 md:pb-28">
      {/* HERO SECTION */}
      <section className="w-full py-10 md:py-16 flex flex-col items-center justify-center text-center px-6 relative">
        <FadeIn>
          <h1 className="font-oswald text-[42px] md:text-[48px] font-extrabold text-[#222] uppercase tracking-tight leading-none mb-3">
            BRAND
          </h1>
          <p className="text-gray-500 text-lg md:text-[18px]">
            VisionAI의 브랜드 서비스입니다.
          </p>
        </FadeIn>

        {/* Gradient Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-300 via-50% to-transparent" />
      </section>

      {/* GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {BRANDS.map((brand, idx) => {
            const isActive = idx === activeIndex;
            const Wrapper = brand.external ? 'a' : Link;
            const wrapperProps = brand.external
              ? { href: brand.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: brand.link };

            return (
              <div key={brand.id}>
                <Wrapper
                  {...(wrapperProps as any)}
                  className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden group"
                  onMouseEnter={() => {
                    setActiveIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {/* Background Image */}
                  <img
                    src={`https://picsum.photos/seed/${brand.image}/800/600`}
                    alt={brand.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* Number - Top Left */}
                  <div className="absolute top-5 left-6 text-white font-oswald font-bold text-sm tracking-widest z-10">
                    {brand.id}
                  </div>

                  {/* Arrow - Top Right */}
                  <div
                    className={`absolute top-5 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-500 z-10 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  >
                    <IconArrowUpRight size={20} stroke={2} />
                  </div>

                  {/* Title - Center */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
                    <h3 className="font-oswald text-[40px] md:text-[52px] font-extrabold text-white leading-none tracking-tight uppercase drop-shadow-lg">
                      {brand.title}
                    </h3>
                    <div
                      className={`text-white/90 text-[15px] font-bold mt-3 transition-all duration-500 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                      }`}
                    >
                      {brand.subtitle}
                    </div>
                  </div>
                </Wrapper>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
