import { useState } from 'react';
import { IconPhotoAi, IconVideo, IconBrandInstagram, IconCamera, IconArrowRight, IconArrowRightCircle } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

const features = [
  { id: '01', icon: <IconPhotoAi size={24} stroke={1.5} />, title: "AI 룩북", desc: "제품 사진만으로 전문 모델이 착용한 듯한 고품질 룩북 제작" },
  { id: '02', icon: <IconVideo size={24} stroke={1.5} />, title: "AI 광고영상", desc: "텍스트와 이미지를 기반으로 한 시선을 사로잡는 숏폼 영상" },
  { id: '03', icon: <IconBrandInstagram size={24} stroke={1.5} />, title: "SNS 콘텐츠", desc: "인스타그램, 틱톡 등 플랫폼에 최적화된 트렌디한 비주얼" },
  { id: '04', icon: <IconCamera size={24} stroke={1.5} />, title: "제품 연출컷", desc: "다양한 배경과 상황에 맞는 고해상도 제품 연출 이미지" }
];

function Style1() {
  return (
    <div className="min-h-screen bg-[#E4E3E0] pt-24 pb-24 text-[#141414]">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-b border-[#141414]">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="font-oswald text-sm tracking-widest uppercase mb-4 opacity-50">Service 01</div>
              <h1 className="font-oswald text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
                AI ADS
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-xl font-bold mb-2">AI로 완성하는 프리미엄 광고 제작</p>
              <p className="text-sm opacity-70">Since 2024.01</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column: Image & Desc */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <FadeIn delay={0.1}>
              <div className="aspect-[4/5] bg-[#141414] rounded-sm overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/fashion/800/1000" 
                  alt="AI ADS" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-[#141414]/20 m-4 rounded-sm" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg leading-relaxed">
                제품 이미지 하나로 고품질 광고 콘텐츠를 제작합니다. 최신 AI 기술을 활용하여 룩북, 배너, SNS 콘텐츠 등 브랜드에 최적화된 비주얼을 빠르고 효과적으로 완성합니다.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Data Grid Features */}
          <div className="md:col-span-7">
            <FadeIn delay={0.3}>
              <div className="mb-8 flex justify-between items-end border-b border-[#141414] pb-4">
                <h2 className="font-oswald text-2xl font-bold">FEATURES</h2>
                <span className="font-mono text-xs opacity-50 uppercase">System Capabilities</span>
              </div>
              
              <div className="flex flex-col border-t border-[#141414]">
                {features.map((feature) => (
                  <div 
                    key={feature.id} 
                    className="group grid grid-cols-[40px_1fr_2fr_40px] md:grid-cols-[60px_1.5fr_2fr_60px] items-center py-6 border-b border-[#141414] hover:bg-[#141414] hover:text-[#E4E3E0] transition-colors duration-300 cursor-pointer px-4 -mx-4"
                  >
                    <div className="font-mono text-sm opacity-50 group-hover:opacity-100">{feature.id}</div>
                    <div className="flex items-center gap-4">
                      <div className="opacity-50 group-hover:opacity-100">{feature.icon}</div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                    </div>
                    <div className="text-sm opacity-70 group-hover:opacity-100 pr-4">{feature.desc}</div>
                    <div className="flex justify-end opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <IconArrowRight size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

function Style2() {
  return (
    <div className="min-h-screen bg-white text-black pt-20 md:pt-24 pb-24 font-sans selection:bg-[#ccff00] selection:text-black">
      <div className="border-y-4 border-black overflow-hidden flex whitespace-nowrap bg-[#ccff00] py-4">
        <div className="animate-marquee flex gap-8 text-4xl md:text-5xl font-anton uppercase tracking-wider">
          <span>AI ADS CREATIVE TOOL</span><span>*</span>
          <span>HIGH PERFORMANCE</span><span>*</span>
          <span>AI ADS CREATIVE TOOL</span><span>*</span>
          <span>HIGH PERFORMANCE</span><span>*</span>
          <span>AI ADS CREATIVE TOOL</span><span>*</span>
          <span>HIGH PERFORMANCE</span><span>*</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn>
            <div className="border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white h-full flex flex-col justify-center">
              <h1 className="font-anton text-7xl md:text-[120px] uppercase leading-[0.85] mb-8">AI<br/>ADS</h1>
              <p className="text-xl md:text-2xl font-bold border-l-8 border-[#ccff00] pl-6 leading-relaxed">
                제품 이미지 하나로 고품질 광고 콘텐츠를 제작합니다.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-4 border-black p-6 hover:bg-[#ccff00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
                  <div className="text-5xl font-anton mb-6">{f.id}</div>
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold mb-2 uppercase">{f.title}</h3>
                  <p className="text-sm font-medium leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Style3({ variant = 'solid' }: { variant?: 'solid' | 'gradient' | 'image' | 'mesh' | 'card1' | 'card2' | 'card3' | 'card4' | 'card5' | 'card6' | 'card7' | 'card8' }) {
  const getHeroBackground = () => {
    switch (variant) {
      case 'solid':
        return 'bg-[#0a7d5a]';
      case 'gradient':
        return 'bg-gradient-to-br from-[#0a7d5a] via-[#0d946d] to-[#044d36]';
      case 'image':
        return 'bg-[#0a7d5a]'; // Fallback, image is handled via absolute div
      case 'mesh':
        return 'bg-[#053d2c]'; // Base for mesh
      default:
        return 'bg-[#0a7d5a]';
    }
  };

  const renderHero = () => {
    if (variant === 'card1') {
      return (
        <section className="w-full pt-8 pb-12 px-6">
          <div className="max-w-6xl mx-auto rounded-[2rem] bg-[#0a7d5a] py-16 md:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4 relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center text-white">
                  <IconPhotoAi size={40} stroke={1.5} />
                </div>
                <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-white uppercase tracking-tight leading-none">
                  AI ADS
                </h1>
              </div>
              <p className="text-white/80 text-lg md:text-[20px] relative z-10">
                AI 기술로 완성하는 고품질 광고 콘텐츠
              </p>
            </FadeIn>
          </div>
        </section>
      );
    }
    if (variant === 'card2') {
      return (
        <section className="w-full pt-8 pb-12 px-6">
          <div className="max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#0a7d5a]">
            <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center items-start text-left relative z-10">
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white shrink-0">
                    <IconPhotoAi size={32} stroke={1.5} />
                  </div>
                  <h1 className="font-oswald text-[40px] md:text-[50px] font-extrabold text-white uppercase tracking-tight leading-none">
                    AI ADS
                  </h1>
                </div>
                <p className="text-white/80 text-lg">
                  AI 기술로 완성하는 고품질 광고 콘텐츠
                </p>
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
              <img src="https://picsum.photos/seed/aiads2/800/800" alt="AI ADS" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>
      );
    }
    if (variant === 'card3') {
      return (
        <section className="w-full pt-8 pb-12 px-6 relative">
          <div className="absolute inset-0 z-0 h-[100%]">
            <img src="https://picsum.photos/seed/aiads3/1920/800" alt="Background" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 py-16 md:py-24 flex flex-col items-center justify-center text-center relative z-10 shadow-2xl mt-8">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center text-white">
                  <IconPhotoAi size={40} stroke={1.5} />
                </div>
                <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-white uppercase tracking-tight leading-none">
                  AI ADS
                </h1>
              </div>
              <p className="text-white/80 text-lg md:text-[20px]">
                AI 기술로 완성하는 고품질 광고 콘텐츠
              </p>
            </FadeIn>
          </div>
        </section>
      );
    }
    if (variant === 'card4') {
      return (
        <section className="w-full pt-8 pb-12 px-6">
          <div className="max-w-5xl mx-auto rounded-[2rem] border border-gray-200 bg-white py-16 md:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#0a7d5a] flex items-center justify-center text-[#0a7d5a]">
                  <IconPhotoAi size={40} stroke={1.5} />
                </div>
                <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-[#0a7d5a] uppercase tracking-tight leading-none">
                  AI ADS
                </h1>
              </div>
              <p className="text-gray-500 text-lg md:text-[20px]">
                AI 기술로 완성하는 고품질 광고 콘텐츠
              </p>
            </FadeIn>
          </div>
        </section>
      );
    }
    if (variant === 'card5') {
      return (
        <section className="w-full pt-12 pb-16 px-6 perspective-[2000px]">
          <div className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-b from-[#0a7d5a] to-[#06523b] py-16 md:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(10,125,90,0.6),0_15px_0_0_#043828] transform transition-all duration-500 hover:-translate-y-2">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4 relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/80 flex items-center justify-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] bg-white/10">
                  <IconPhotoAi size={40} stroke={1.5} />
                </div>
                <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-white uppercase tracking-tight leading-none drop-shadow-lg">
                  AI ADS
                </h1>
              </div>
              <p className="text-white/90 text-lg md:text-[20px] relative z-10 drop-shadow-md">
                AI 기술로 완성하는 고품질 광고 콘텐츠
              </p>
            </FadeIn>
          </div>
        </section>
      );
    }
    if (variant === 'card6') {
      return (
        <section className="w-full pt-12 pb-16 px-6 bg-[#e0e5ec]">
          <div className="max-w-6xl mx-auto rounded-[2rem] bg-[#e0e5ec] py-16 md:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center text-[#0a7d5a]">
                  <IconPhotoAi size={40} stroke={1.5} />
                </div>
                <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-[#0a7d5a] uppercase tracking-tight leading-none shadow-sm">
                  AI ADS
                </h1>
              </div>
              <p className="text-gray-600 text-lg md:text-[20px]">
                AI 기술로 완성하는 고품질 광고 콘텐츠
              </p>
            </FadeIn>
          </div>
        </section>
      );
    }
    if (variant === 'card7') {
      return (
        <section className="w-full pt-16 pb-24 px-6">
          <div className="max-w-5xl mx-auto relative">
            {/* Back layers */}
            <div className="absolute inset-0 bg-[#0a7d5a]/20 rounded-[2rem] transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8" />
            <div className="absolute inset-0 bg-[#0a7d5a]/40 rounded-[2rem] transform translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4" />
            {/* Main card */}
            <div className="relative rounded-[2rem] bg-[#0a7d5a] py-16 md:py-24 flex flex-col items-center justify-center text-center overflow-hidden shadow-xl border border-white/20">
              <FadeIn>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center text-white bg-white/10 backdrop-blur-sm">
                    <IconPhotoAi size={40} stroke={1.5} />
                  </div>
                  <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-white uppercase tracking-tight leading-none drop-shadow-lg">
                    AI ADS
                  </h1>
                </div>
                <p className="text-white/90 text-lg md:text-[20px]">
                  AI 기술로 완성하는 고품질 광고 콘텐츠
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      );
    }
    if (variant === 'card8') {
      return (
        <section className="w-full pt-12 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-800" />
          {/* Decorative background blobs for glass effect */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0a7d5a] rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#10b981] rounded-full mix-blend-screen filter blur-[100px] opacity-60" />
          
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-white/10 backdrop-blur-xl border-t border-l border-white/40 border-b border-r border-white/10 py-16 md:py-24 flex flex-col items-center justify-center text-center relative z-10 shadow-[20px_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.2)]">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl rotate-12 bg-gradient-to-br from-white/40 to-white/5 border border-white/30 flex items-center justify-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                  <div className="-rotate-12">
                    <IconPhotoAi size={40} stroke={1.5} />
                  </div>
                </div>
                <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 uppercase tracking-tight leading-none drop-shadow-2xl">
                  AI ADS
                </h1>
              </div>
              <p className="text-white/80 text-lg md:text-[20px] font-light tracking-wide">
                AI 기술로 완성하는 고품질 광고 콘텐츠
              </p>
            </FadeIn>
          </div>
        </section>
      );
    }

    // Default full-width variants
    return (
      <section className={`w-full py-16 md:py-24 ${getHeroBackground()} flex flex-col items-center justify-center text-center px-6 relative overflow-hidden`}>
        {/* Background Additions based on variant */}
        {variant === 'image' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/aiads/1920/600" 
              alt="AI ADS Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#0a7d5a]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}
        
        {variant === 'mesh' && (
          <div className="absolute inset-0 z-0 opacity-60">
            <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[150%] rounded-full bg-[radial-gradient(circle,#0a7d5a_0%,transparent_70%)] blur-[80px]" />
            <div className="absolute bottom-[-50%] right-[-10%] w-[60%] h-[120%] rounded-full bg-[radial-gradient(circle,#10b981_0%,transparent_70%)] blur-[80px]" />
          </div>
        )}

        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4 relative z-10">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center text-white">
              <IconPhotoAi size={40} stroke={1.5} />
            </div>
            <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-white uppercase tracking-tight leading-none">
              AI ADS
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-[20px] relative z-10">
            AI 기술로 완성하는 고품질 광고 콘텐츠
          </p>
        </FadeIn>
        
        {/* Gradient Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans pt-20 md:pt-24 pb-24">
      {/* HERO */}
      {renderHero()}

      {/* CONTENT */}
      <section className="max-w-[1000px] mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-[240px] shrink-0">
            <FadeIn>
              <div className="text-[#3b4859] font-bold mb-4 text-sm uppercase tracking-widest">Service.01</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                AI로 완성하는<br/>프리미엄 광고 제작
              </h2>
              <div className="text-sm text-gray-500 mb-10">Since 2024.01</div>
              
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#4a5568] hover:bg-[#2d3748] text-white px-6 py-3.5 text-sm font-bold transition-colors shadow-sm w-full md:w-auto">
                홈페이지 바로가기 <IconArrowRightCircle size={18} />
              </a>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <FadeIn delay={0.2}>
              <img 
                src="https://picsum.photos/seed/fashion/800/500" 
                alt="AI ADS" 
                className="w-full bg-gray-50 mb-8 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <p className="text-[15px] text-gray-600 leading-[1.8] whitespace-pre-wrap">
                제품 이미지 하나로 고품질 광고 콘텐츠를 제작합니다. 최신 AI 기술을 활용하여 룩북, 배너, SNS 콘텐츠 등 브랜드에 최적화된 비주얼을 빠르고 효과적으로 완성합니다.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DetailAiAds() {
  const [style, setStyle] = useState<'v1' | 'v2' | 'v3_solid' | 'v3_gradient' | 'v3_image' | 'v3_mesh' | 'v3_card1' | 'v3_card2' | 'v3_card3' | 'v3_card4' | 'v3_card5' | 'v3_card6' | 'v3_card7' | 'v3_card8'>('v3_solid');
  return (
    <>
      {style === 'v1' && <Style1 />}
      {style === 'v2' && <Style2 />}
      {style === 'v3_solid' && <Style3 variant="solid" />}
      {style === 'v3_gradient' && <Style3 variant="gradient" />}
      {style === 'v3_image' && <Style3 variant="image" />}
      {style === 'v3_mesh' && <Style3 variant="mesh" />}
      {style === 'v3_card1' && <Style3 variant="card1" />}
      {style === 'v3_card2' && <Style3 variant="card2" />}
      {style === 'v3_card3' && <Style3 variant="card3" />}
      {style === 'v3_card4' && <Style3 variant="card4" />}
      {style === 'v3_card5' && <Style3 variant="card5" />}
      {style === 'v3_card6' && <Style3 variant="card6" />}
      {style === 'v3_card7' && <Style3 variant="card7" />}
      {style === 'v3_card8' && <Style3 variant="card8" />}
      
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 z-50 bg-white shadow-2xl rounded-full p-1.5 flex gap-1 border border-gray-200 overflow-x-auto max-w-[90vw] scrollbar-hide">
        <button onClick={() => setStyle('v1')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v1' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Style A</button>
        <button onClick={() => setStyle('v2')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v2' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Style B</button>
        <div className="w-px bg-gray-200 mx-1 my-2 shrink-0" />
        <button onClick={() => setStyle('v3_solid')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_solid' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Demo 1 (Solid)</button>
        <button onClick={() => setStyle('v3_gradient')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_gradient' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Demo 2 (Gradient)</button>
        <button onClick={() => setStyle('v3_image')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_image' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Demo 3 (Image)</button>
        <button onClick={() => setStyle('v3_mesh')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_mesh' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Demo 4 (Mesh)</button>
        <div className="w-px bg-gray-200 mx-1 my-2 shrink-0" />
        <button onClick={() => setStyle('v3_card1')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_card1' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Card 1 (Solid)</button>
        <button onClick={() => setStyle('v3_card2')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_card2' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Card 2 (Split)</button>
        <button onClick={() => setStyle('v3_card3')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_card3' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Card 3 (Glass)</button>
        <button onClick={() => setStyle('v3_card4')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_card4' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Card 4 (Minimal)</button>
        <div className="w-px bg-gray-200 mx-1 my-2 shrink-0" />
        <button onClick={() => setStyle('v3_card5')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_card5' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Card 5 (3D Float)</button>
        <button onClick={() => setStyle('v3_card6')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_card6' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Card 6 (Neumorphism)</button>
        <button onClick={() => setStyle('v3_card7')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_card7' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Card 7 (Layered)</button>
        <button onClick={() => setStyle('v3_card8')} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${style === 'v3_card8' ? 'bg-[#0a7d5a] text-white' : 'text-gray-500 hover:bg-gray-100'}`}>Card 8 (Holographic)</button>
      </div>
    </>
  );
}
