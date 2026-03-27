import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

const SERVICES = [
  { id: '01', title: 'AI ADS', subtitle: 'AI 광고제작', link: '/vision/ai-ads', image: 'fashion' },
  { id: '02', title: 'AI MODEL', subtitle: 'AI 모델', link: '/vision/ai-model', image: 'model' },
  { id: '03', title: 'WEB AGENCY', subtitle: '웹에이전시', link: '/vision/web-agency', image: 'website' },
  { id: '04', title: 'MATCHMAKING', subtitle: '결정사', link: '/vision/matchmaking', image: 'couple' },
  { id: '05', title: 'MARKETING', subtitle: '온라인마케팅', link: '/vision/marketing', image: 'marketing' },
  { id: '06', title: 'AI EDUCATION', subtitle: 'AI 교육', link: '/vision/ai-education', image: 'education' }
];

export default function ServiceStartCopy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SERVICES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-20 md:pb-28">
      {/* HERO SECTION */}
      <section className="w-full py-10 md:py-16 flex flex-col items-center justify-center text-center px-6 relative">
        <FadeIn>
          <h1 className="font-oswald text-[42px] md:text-[48px] font-extrabold text-[#222] uppercase tracking-tight leading-none mb-3">
            SERVICE
          </h1>
          <p className="text-gray-500 text-lg md:text-[18px]">
            VisionAI가 운영중인 서비스입니다.
          </p>
        </FadeIn>
        
        {/* Gradient Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-300 via-50% to-transparent" />
      </section>

      {/* GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => {
            const isActive = idx === activeIndex;
            
            return (
              <div key={service.id}>
                <Link
                  to={service.link}
                  className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden group"
                  onMouseEnter={() => {
                    setActiveIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {/* Background Image */}
                  <img
                    src={`https://picsum.photos/seed/${service.image}/800/600`}
                    alt={service.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* Number - Top Left */}
                  <div className="absolute top-5 left-6 text-white font-oswald font-bold text-sm tracking-widest z-10">
                    {service.id}
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
                      {service.title}
                    </h3>
                    <div
                      className={`text-white/90 text-[15px] font-bold mt-3 transition-all duration-500 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                      }`}
                    >
                      {service.subtitle}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
