import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface ServiceDetailProps {
  heroTitle: string;
  heroKoreanTitle: string;
  heroBgColor: string;
  heroLogo?: React.ReactNode;
  whoWeAreTitle: string;
  sinceDate: string;
  homepageUrl?: string;
  screenshotImage: string;
  description: string;
  serviceLabel?: string;
  serviceTitle?: string;
  features?: Feature[];
  accentColor: string;
}

export default function ServiceDetailTemplate({
  heroTitle,
  heroKoreanTitle,
  heroBgColor,
  whoWeAreTitle,
  sinceDate,
  homepageUrl,
  screenshotImage,
  description,
  serviceLabel = "Service",
  serviceTitle = "제공 서비스",
  features = [],
  accentColor
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">
      {/* HERO SECTION */}
      <section 
        className="w-full py-10 md:py-16 flex flex-col items-center justify-center text-center px-6"
        style={{ background: `linear-gradient(135deg, ${heroBgColor} 0%, ${heroBgColor}cc 40%, ${heroBgColor}66 100%)` }}
      >
        <FadeIn>
          <h1 className="font-oswald text-5xl md:text-[60px] font-extrabold text-white uppercase tracking-tight leading-none mb-4">
            {heroTitle}
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            {heroKoreanTitle}
          </p>
        </FadeIn>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-8">
            {/* Left Column */}
            <div className="w-full md:w-[260px] shrink-0">
              <FadeIn>
                <div className="text-[13px] font-bold uppercase mb-4" style={{ color: accentColor }}>
                  Who We Are
                </div>
                <h2 className="text-2xl md:text-[26px] font-bold text-[#222] leading-snug mb-4">
                  {whoWeAreTitle}
                </h2>
                <div className="text-[13px] text-gray-400 mb-8">
                  Since {sinceDate}
                </div>
                {homepageUrl && (
                  <a 
                    href={homepageUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#333] text-white text-sm font-bold rounded-full hover:bg-black transition-colors"
                  >
                    홈페이지 바로가기
                  </a>
                )}
              </FadeIn>
            </div>

            {/* Right Column */}
            <div className="flex-1">
              <FadeIn delay={0.1}>
                <div className="rounded-lg overflow-hidden shadow-md mb-8 aspect-[16/9] bg-gray-100">
                  <img 
                    src={screenshotImage} 
                    alt={heroTitle} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Description Offset */}
          <div className="md:pl-[292px]">
            <FadeIn delay={0.2}>
              <p className="text-[15px] text-gray-500 leading-[1.8] whitespace-pre-wrap">
                {description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES SECTION */}
      {features.length > 0 && (
        <section className="py-20 md:py-28 px-6 border-t border-gray-100">
          <div className="max-w-[960px] mx-auto">
            <FadeIn>
              <div className="text-[13px] font-bold uppercase mb-2" style={{ color: accentColor }}>
                {serviceLabel}
              </div>
              <h2 className="text-2xl md:text-[26px] font-bold text-[#222] mb-12">
                {serviceTitle}
              </h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {features.map((feature, idx) => (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center h-full hover:shadow-md transition-shadow">
                    <div className="mb-4 text-gray-700">
                      {feature.icon}
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
