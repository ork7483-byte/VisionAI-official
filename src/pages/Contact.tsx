import { IconMapPin, IconPhone, IconMail, IconBrandInstagram, IconClock } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">

      {/* HERO */}
      <section className="w-full py-16 md:py-24 flex flex-col items-center justify-center text-center px-6 relative">
        <FadeIn>
          <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-[#222] uppercase tracking-tight leading-none mb-4">
            CONTACT
          </h1>
          <p className="text-gray-500 text-lg md:text-[20px]">
            프로젝트 문의 및 상담 안내
          </p>
        </FadeIn>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          {/* Left: Info */}
          <div className="w-full md:w-[320px] shrink-0">
            <FadeIn>
              <div className="text-xs text-gray-400 uppercase font-bold mb-4">Get in Touch</div>
              <h2 className="text-[32px] font-bold text-[#222] leading-[1.3] mb-8">
                언제든지<br />연락주세요
              </h2>

              <div className="space-y-6 text-[15px] text-gray-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <IconMapPin size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="font-bold text-[#222] mb-1">주소</div>
                    <span>서울특별시 강남구 테헤란로 123<br />비전빌딩 10층</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <IconPhone size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="font-bold text-[#222] mb-1">전화</div>
                    <span>02-1234-5678</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <IconMail size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="font-bold text-[#222] mb-1">이메일</div>
                    <span>contact@visionai.com</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <IconClock size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="font-bold text-[#222] mb-1">영업시간</div>
                    <span>평일 09:00 - 18:00</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <IconBrandInstagram size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="font-bold text-[#222] mb-1">인스타그램</div>
                    <span>@visionai_official</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <div className="flex-1">
            <FadeIn delay={0.1}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#222] uppercase mb-2">이름 *</label>
                    <input
                      type="text"
                      placeholder="홍길동"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] text-[#222] placeholder-gray-300 focus:outline-none focus:border-[#222] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#222] uppercase mb-2">연락처 *</label>
                    <input
                      type="tel"
                      placeholder="010-0000-0000"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] text-[#222] placeholder-gray-300 focus:outline-none focus:border-[#222] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#222] uppercase mb-2">이메일 *</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] text-[#222] placeholder-gray-300 focus:outline-none focus:border-[#222] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#222] uppercase mb-2">관심 서비스</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] text-[#222] focus:outline-none focus:border-[#222] transition-colors bg-white">
                    <option value="">선택해주세요</option>
                    <option value="ai-ads">AI 광고제작</option>
                    <option value="ai-model">AI 모델</option>
                    <option value="web-agency">웹에이전시</option>
                    <option value="matchmaking">매칭 서비스</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#222] uppercase mb-2">문의 내용 *</label>
                  <textarea
                    rows={6}
                    placeholder="프로젝트에 대해 간략히 설명해주세요."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] text-[#222] placeholder-gray-300 focus:outline-none focus:border-[#222] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#222] text-white text-[15px] font-bold rounded-full hover:bg-black transition-colors"
                >
                  문의 보내기
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gray-200 w-full" />
      </div>

      {/* MAP SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="w-full md:w-[220px] shrink-0">
            <FadeIn>
              <div className="text-xs text-gray-400 uppercase font-bold mb-4">Location</div>
              <h2 className="text-[32px] font-bold text-[#222] leading-[1.3]">
                오시는 길
              </h2>
            </FadeIn>
          </div>
          <div className="flex-1">
            <FadeIn delay={0.1}>
              <div className="w-full aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center text-gray-400">
                <span className="text-sm font-bold">지도 API 연동 영역</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
