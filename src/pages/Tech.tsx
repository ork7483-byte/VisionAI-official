import FadeIn from '../components/FadeIn';

const SECTIONS = [
  {
    label: 'Model Generation',
    title: '모델 생성',
    items: [
      { image: 'https://picsum.photos/seed/model1/600/400', title: 'AI 패션 모델' },
      { image: 'https://picsum.photos/seed/model2/600/400', title: 'AI 뷰티 모델' },
      { image: 'https://picsum.photos/seed/model3/600/400', title: 'AI 글로벌 모델' },
      { image: 'https://picsum.photos/seed/model4/600/400', title: 'AI 시니어 모델' },
      { image: 'https://picsum.photos/seed/model5/600/400', title: 'AI 키즈 모델' },
      { image: 'https://picsum.photos/seed/model6/600/400', title: 'AI 커플 모델' },
    ],
  },
  {
    label: 'Web Generation',
    title: '웹 생성',
    items: [
      { image: 'https://picsum.photos/seed/web1/600/400', title: '기업 홈페이지' },
      { image: 'https://picsum.photos/seed/web2/600/400', title: '쇼핑몰' },
      { image: 'https://picsum.photos/seed/web3/600/400', title: '랜딩페이지' },
      { image: 'https://picsum.photos/seed/web4/600/400', title: '포트폴리오 사이트' },
      { image: 'https://picsum.photos/seed/web5/600/400', title: '블로그' },
      { image: 'https://picsum.photos/seed/web6/600/400', title: '예약 시스템' },
    ],
  },
  {
    label: 'Virtual Fitting',
    title: '가상피팅',
    items: [
      { image: 'https://picsum.photos/seed/fit1/600/400', title: '상의 피팅' },
      { image: 'https://picsum.photos/seed/fit2/600/400', title: '하의 피팅' },
      { image: 'https://picsum.photos/seed/fit3/600/400', title: '원피스 피팅' },
      { image: 'https://picsum.photos/seed/fit4/600/400', title: '아우터 피팅' },
      { image: 'https://picsum.photos/seed/fit5/600/400', title: '액세서리 피팅' },
      { image: 'https://picsum.photos/seed/fit6/600/400', title: '전신 코디' },
    ],
  },
  {
    label: 'Hair Model',
    title: '헤어모델',
    items: [
      { image: 'https://picsum.photos/seed/hair1/600/400', title: '여성 롱헤어' },
      { image: 'https://picsum.photos/seed/hair2/600/400', title: '여성 숏컷' },
      { image: 'https://picsum.photos/seed/hair3/600/400', title: '남성 헤어' },
      { image: 'https://picsum.photos/seed/hair4/600/400', title: '염색 스타일' },
      { image: 'https://picsum.photos/seed/hair5/600/400', title: '펌 스타일' },
      { image: 'https://picsum.photos/seed/hair6/600/400', title: '웨딩 헤어' },
    ],
  },
  {
    label: 'Food Photo',
    title: '음식사진',
    items: [
      { image: 'https://picsum.photos/seed/food1/600/400', title: '한식' },
      { image: 'https://picsum.photos/seed/food2/600/400', title: '양식' },
      { image: 'https://picsum.photos/seed/food3/600/400', title: '일식' },
      { image: 'https://picsum.photos/seed/food4/600/400', title: '카페 메뉴' },
      { image: 'https://picsum.photos/seed/food5/600/400', title: '디저트' },
      { image: 'https://picsum.photos/seed/food6/600/400', title: '음료' },
    ],
  },
  {
    label: 'Detail Page',
    title: '상세페이지',
    items: [
      { image: 'https://picsum.photos/seed/detail1/600/400', title: '패션 상세페이지' },
      { image: 'https://picsum.photos/seed/detail2/600/400', title: '뷰티 상세페이지' },
      { image: 'https://picsum.photos/seed/detail3/600/400', title: '식품 상세페이지' },
      { image: 'https://picsum.photos/seed/detail4/600/400', title: '가전 상세페이지' },
      { image: 'https://picsum.photos/seed/detail5/600/400', title: '가구 상세페이지' },
      { image: 'https://picsum.photos/seed/detail6/600/400', title: '건강 상세페이지' },
    ],
  },
];

export default function Tech() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-20 md:pb-28">
      {/* HERO SECTION */}
      <section className="w-full py-10 md:py-16 flex flex-col items-center justify-center text-center px-6 relative">
        <FadeIn>
          <h1 className="font-oswald text-[42px] md:text-[48px] font-extrabold text-[#222] uppercase tracking-tight leading-none mb-3">
            TECH
          </h1>
          <p className="text-gray-500 text-lg md:text-[18px]">
            VisionAI의 기술 포트폴리오입니다.
          </p>
        </FadeIn>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-300 via-50% to-transparent" />
      </section>

      {/* PORTFOLIO SECTIONS */}
      {SECTIONS.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
            <div className="flex flex-col md:flex-row gap-12 md:gap-8">
              <div className="w-full md:w-[220px] shrink-0">
                <FadeIn>
                  <div className="text-xs text-gray-400 uppercase font-bold mb-4">{section.label}</div>
                  <h2 className="text-[32px] font-bold text-[#222] leading-[1.3]">
                    {section.title}
                  </h2>
                </FadeIn>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.items.map((item, idx) => (
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

          {/* Divider between sections */}
          {sectionIdx < SECTIONS.length - 1 && (
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="h-px bg-gray-200 w-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
