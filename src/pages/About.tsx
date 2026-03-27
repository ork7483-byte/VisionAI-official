import { Link } from 'react-router-dom';
import { IconBrandLinkedin, IconMail, IconArrowUpRight } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

const TEAM = [
  { name: '김대표', role: 'CEO / Founder', desc: 'AI 비즈니스 전략 총괄', image: 'https://picsum.photos/seed/ceo/400/400' },
  { name: '이디렉터', role: 'Creative Director', desc: 'AI 광고 크리에이티브 디렉팅', image: 'https://picsum.photos/seed/director/400/400' },
  { name: '박매니저', role: 'Project Manager', desc: '프로젝트 기획 및 운영', image: 'https://picsum.photos/seed/pm/400/400' },
  { name: '최개발자', role: 'Lead Developer', desc: 'AI 모델 개발 및 시스템 구축', image: 'https://picsum.photos/seed/dev/400/400' },
];

const PROJECTS = [
  { year: '2024', title: 'AI 룩북 자동화 시스템 구축', client: '패션 브랜드 A사', desc: 'AI 기반 룩북 제작 파이프라인으로 제작 기간 80% 단축' },
  { year: '2024', title: '가상 모델 브랜드 캠페인', client: '뷰티 브랜드 B사', desc: '브랜드 전용 AI 모델 생성 및 SNS 캠페인 운영' },
  { year: '2023', title: '기업 웹사이트 리뉴얼', client: '스타트업 C사', desc: '반응형 웹사이트 설계부터 SEO 최적화까지 풀 패키지 구축' },
  { year: '2023', title: 'AI 매칭 알고리즘 개발', client: '매칭 플랫폼 D사', desc: '가치관 기반 프리미엄 매칭 알고리즘 설계 및 런칭' },
  { year: '2023', title: 'AI 광고 영상 제작 솔루션', client: '이커머스 E사', desc: '제품 이미지 기반 숏폼 영상 자동 생성 시스템' },
  { year: '2022', title: '브랜드 SNS 콘텐츠 자동화', client: 'F&B 브랜드 F사', desc: '월 200건 이상의 SNS 콘텐츠를 AI로 자동 생성' },
];

const PORTFOLIO = [
  { image: 'https://picsum.photos/seed/port1/600/400', title: 'AI 룩북 - 패션 브랜드' },
  { image: 'https://picsum.photos/seed/port2/600/400', title: 'AI 모델 캠페인' },
  { image: 'https://picsum.photos/seed/port3/600/400', title: '기업 웹사이트' },
  { image: 'https://picsum.photos/seed/port4/600/400', title: 'AI 광고 콘텐츠' },
  { image: 'https://picsum.photos/seed/port5/600/400', title: '브랜드 SNS 비주얼' },
  { image: 'https://picsum.photos/seed/port6/600/400', title: '프리미엄 매칭 앱' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">

      {/* HERO */}
      <section className="w-full py-10 md:py-16 flex flex-col items-center justify-center text-center px-6 relative">
        <FadeIn>
          <h1 className="font-oswald text-[42px] md:text-[48px] font-extrabold text-[#222] uppercase tracking-tight leading-none mb-3">
            ABOUT US
          </h1>
          <p className="text-gray-500 text-lg md:text-[18px]">
            AI 기술로 새로운 가치를 만드는 팀
          </p>
        </FadeIn>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-300 via-50% to-transparent" />
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="w-full md:w-[220px] shrink-0">
            <FadeIn>
              <div className="text-xs text-gray-400 uppercase font-bold mb-4">Team</div>
              <h2 className="text-[32px] font-bold text-[#222] leading-[1.3]">
                함께 만드는<br />사람들
              </h2>
            </FadeIn>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member, idx) => (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <div className="group">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-[#222] mb-1">{member.name}</h3>
                    <div className="text-[13px] font-bold text-gray-400 uppercase mb-2">{member.role}</div>
                    <p className="text-[14px] text-gray-500">{member.desc}</p>
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

      {/* PROJECTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="w-full md:w-[220px] shrink-0">
            <FadeIn>
              <div className="text-xs text-gray-400 uppercase font-bold mb-4">Projects</div>
              <h2 className="text-[32px] font-bold text-[#222] leading-[1.3]">
                진행한<br />프로젝트
              </h2>
            </FadeIn>
          </div>

          <div className="flex-1">
            <div className="flex flex-col">
              {PROJECTS.map((project, idx) => (
                <FadeIn key={idx} delay={0.05 * idx}>
                  <div className="group grid grid-cols-[60px_1fr] md:grid-cols-[80px_1.2fr_1.5fr_1fr] items-start md:items-center py-6 border-b border-gray-200 gap-4 hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg">
                    <div className="font-oswald text-sm font-bold text-gray-300">{project.year}</div>
                    <div>
                      <h3 className="text-[15px] font-bold text-[#222] mb-1">{project.title}</h3>
                      <span className="text-[13px] text-gray-400 md:hidden">{project.client}</span>
                    </div>
                    <div className="hidden md:block text-[14px] text-gray-500">{project.desc}</div>
                    <div className="hidden md:block text-[13px] text-gray-400 text-right">{project.client}</div>
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

      {/* PORTFOLIO GALLERY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="w-full md:w-[220px] shrink-0">
            <FadeIn>
              <div className="text-xs text-gray-400 uppercase font-bold mb-4">Portfolio</div>
              <h2 className="text-[32px] font-bold text-[#222] leading-[1.3]">
                포트폴리오
              </h2>
            </FadeIn>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PORTFOLIO.map((item, idx) => (
                <FadeIn key={idx} delay={0.08 * idx}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-[#222] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="font-oswald text-[36px] md:text-[48px] font-bold text-white leading-tight mb-4">
              READY TO START?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              AI 기술로 비즈니스의 새로운 가능성을 열어보세요.<br />
              지금 바로 상담을 시작하실 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#222] text-[15px] font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                프로젝트 문의하기 <IconArrowUpRight size={18} />
              </Link>
              <a
                href="mailto:contact@visionai.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-[15px] font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                이메일 보내기 <IconMail size={18} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
