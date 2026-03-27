import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

const SERVICES = [
  { id: '01', title: 'AI ADS', subtitle: 'AI 광고제작', link: '/vision/ai-ads', image: 'fashion' },
  { id: '02', title: 'AI MODEL', subtitle: 'AI 모델', link: '/vision/ai-model', image: 'model' },
  { id: '03', title: 'WEB AGENCY', subtitle: '웹에이전시', link: '/vision/web-agency', image: 'website' },
  { id: '04', title: 'MATCHMAKING', subtitle: '결정사', link: '/vision/matchmaking', image: 'couple' }
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
      <section className="w-full py-16 md:py-24 flex flex-col items-center justify-center text-center px-6 relative">
        <FadeIn>
          <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-[#222] uppercase tracking-tight leading-none mb-4">
            SERVICE
          </h1>
          <p className="text-gray-500 text-lg md:text-[20px]">
            VisionAI가 운영중인 서비스입니다.
          </p>
        </FadeIn>
        
        {/* Gradient Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </section>

      {/* GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => {
            const isActive = idx === activeIndex;
            
            return (
              <FadeIn key={service.id} delay={idx * 0.1}>
                <Link 
                  to={service.link}
                  className="block relative w-full aspect-[21/9] md:h-[425px] rounded-2xl overflow-hidden group"
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
                  <div 
                    className={`absolute inset-0 transition-colors duration-500 ${
                      isActive ? 'bg-black/20' : 'bg-black/60'
                    }`} 
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                    <div className="text-white/60 font-oswald font-bold text-sm tracking-widest">
                      {service.id}
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col">
                        <h3 
                          className={`font-oswald text-[32px] md:text-[42px] font-bold text-white leading-none transition-transform duration-500 ${
                            isActive ? '-translate-y-2' : 'translate-y-0'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <div 
                          className={`text-white/90 font-bold text-lg mt-2 transition-all duration-500 ${
                            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                        >
                          {service.subtitle}
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <div 
                        className={`w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 -translate-x-4'
                        }`}
                      >
                        <IconArrowUpRight size={24} stroke={2} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
