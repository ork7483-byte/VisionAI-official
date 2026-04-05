import { IconHanger, IconArrowRightCircle, IconBrandGithub, IconBrandVercel, IconCircleCheck, IconCircle, IconClock, IconTag, IconStar } from '@tabler/icons-react';
import FadeIn from '../components/FadeIn';

const PROJECT = {
  id: '02',
  title: 'AI MODEL AGENCY',
  subtitle: 'AI 모델 에이전시',
  description: 'AI 모델 에이전시. 가상 모델을 활용한 패션 화보, 룩북, 광고 이미지 제작 SaaS. SELECT AI 플랫폼을 통해 브랜드에 최적화된 AI 모델 이미지를 빠르게 생성할 수 있습니다.',
  since: '2024.03',
  status: 'active' as const,
  siteUrl: 'https://www.selectaimodel.co.kr/',
  githubUrl: 'https://github.com/ork7483-byte/vton',
  vercelUrl: 'https://vercel.com/vision-ai/vton',
};

const TECH_STACK = [
  { name: 'React', color: 'bg-blue-100 text-blue-700' },
  { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
  { name: 'Vite', color: 'bg-purple-100 text-purple-700' },
  { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-700' },
  { name: 'AI Model API', color: 'bg-green-100 text-green-700' },
];

const TIMELINE = [
  { date: '2026.04.02', content: '프로덕션 배포', tag: 'deploy' },
  { date: '2026.04.02', content: 'GitHub 레포 생성', tag: 'infra' },
];

const LINKS = [
  { label: '사이트 바로가기', url: PROJECT.siteUrl, icon: IconArrowRightCircle },
  { label: 'GitHub 레포', url: PROJECT.githubUrl, icon: IconBrandGithub },
  { label: 'Vercel 대시보드', url: PROJECT.vercelUrl, icon: IconBrandVercel },
];

const TODOS = [
  { done: true, text: 'AI 모델 이미지 생성 엔진' },
  { done: true, text: '패션 화보 자동 제작' },
  { done: true, text: '룩북 생성 기능' },
  { done: true, text: '사용자 대시보드 UI' },
  { done: true, text: 'Vercel 배포' },
  { done: true, text: '프로덕션 안정화' },
  { done: false, text: '결제 시스템' },
  { done: false, text: '고객 대시보드' },
];

const TAGS = ['AI 서비스', '패션', '모델', 'SaaS'];

const QA_REVIEW = {
  score: 8.0,
  date: '2026.04.05',
  items: [
    { area: '기능 완성도', score: 8.5 },
    { area: '디자인 품질', score: 8 },
    { area: '모바일 대응', score: 7.5 },
    { area: '데이터 정확성', score: 8 },
    { area: '사용성', score: 8 },
  ],
};

const TAG_COLORS: Record<string, string> = {
  feature: 'bg-blue-50 text-blue-600',
  deploy: 'bg-green-50 text-green-600',
  infra: 'bg-purple-50 text-purple-600',
  fix: 'bg-orange-50 text-orange-600',
};

const STATUS_MAP = {
  active: { label: '운영 중', color: 'bg-green-500' },
  dev: { label: '개발 중', color: 'bg-yellow-500' },
  paused: { label: '중단', color: 'bg-gray-400' },
};

export default function DetailAiModelPortfolio() {
  const status = STATUS_MAP[PROJECT.status];

  return (
    <div className="min-h-screen bg-white font-sans pt-20 md:pt-24 pb-24">
      <section className="w-full pt-6 pb-8 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-violet-900 to-purple-800" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50" />

        <div className="max-w-7xl mx-auto rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 py-6 md:py-8 flex flex-col items-center justify-center text-center relative z-10 shadow-[20px_20px_50px_rgba(0,0,0,0.5)]">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl rotate-12 bg-gradient-to-br from-white/40 to-white/5 border border-white/30 flex items-center justify-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                <div className="-rotate-12"><IconHanger size={40} stroke={1.5} /></div>
              </div>
              <h1 className="font-oswald text-[50px] md:text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 uppercase tracking-tight leading-none drop-shadow-2xl">{PROJECT.title}</h1>
            </div>
            <p className="text-white/80 text-lg md:text-[20px] font-light tracking-wide">{PROJECT.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="w-full md:w-[260px] shrink-0">
            <FadeIn>
              <div className="text-[#3b4859] font-bold mb-4 text-sm uppercase tracking-widest">Service.{PROJECT.id}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{PROJECT.subtitle}</h2>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2.5 h-2.5 rounded-full ${status.color} animate-pulse`} />
                <span className="text-sm font-medium text-gray-700">{status.label}</span>
              </div>
              <div className="text-sm text-gray-500 mb-8">Since {PROJECT.since}</div>
              <div className="flex flex-col gap-3 mb-8">
                {LINKS.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#4a5568] hover:bg-[#2d3748] text-white px-5 py-3 text-sm font-bold transition-colors w-full justify-center">
                    <link.icon size={18} />{link.label}
                  </a>
                ))}
              </div>
              <div className="mb-8">
                <div className="flex items-center gap-1.5 text-sm font-bold text-gray-700 mb-3"><IconTag size={16} />카테고리</div>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (<span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">{tag}</span>))}
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-700 mb-3">기술 스택</div>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech) => (<span key={tech.name} className={`px-3 py-1 text-xs font-semibold rounded-full ${tech.color}`}>{tech.name}</span>))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="flex-1 space-y-10">
            <FadeIn delay={0.1}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6"><IconClock size={20} className="text-gray-700" /><h3 className="text-lg font-bold text-gray-900">업데이트 타임라인</h3></div>
                <div className="relative pl-6 border-l-2 border-gray-200 space-y-6">
                  {TIMELINE.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[calc(1.5rem+5px)] w-3 h-3 rounded-full bg-white border-2 border-gray-400 top-1" />
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="text-xs font-mono text-gray-400 shrink-0">{item.date}</span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${TAG_COLORS[item.tag] || 'bg-gray-100 text-gray-600'}`}>{item.tag}</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">라이브 상태</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-100"><div className="flex items-center gap-2 mb-2"><div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" /><span className="text-sm font-bold text-gray-700">사이트</span></div><p className="text-xs text-gray-500">정상 운영 중</p></div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100"><div className="flex items-center gap-2 mb-2"><div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" /><span className="text-sm font-bold text-gray-700">Vercel</span></div><p className="text-xs text-gray-500">Production Ready</p></div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100"><div className="flex items-center gap-2 mb-2"><div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" /><span className="text-sm font-bold text-gray-700">GitHub</span></div><p className="text-xs text-gray-500">master · 최신</p></div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">To-Do<span className="ml-2 text-sm font-normal text-gray-400">{TODOS.filter(t => t.done).length}/{TODOS.length}</span></h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-5"><div className="bg-green-500 h-2 rounded-full transition-all" style={{ width: `${(TODOS.filter(t => t.done).length / TODOS.length) * 100}%` }} /></div>
                <div className="space-y-3">
                  {TODOS.map((todo, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {todo.done ? <IconCircleCheck size={20} className="text-green-500 shrink-0 mt-0.5" /> : <IconCircle size={20} className="text-gray-300 shrink-0 mt-0.5" />}
                      <span className={`text-sm ${todo.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{todo.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2"><IconStar size={20} className="text-yellow-500" /><h3 className="text-lg font-bold text-gray-900">QA 리뷰</h3></div>
                  <span className="text-xs text-gray-400">마지막 검수: {QA_REVIEW.date}</span>
                </div>
                <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-4xl font-extrabold text-gray-900">{QA_REVIEW.score}</div>
                  <div><div className="text-sm font-bold text-gray-700">종합 점수</div><div className="text-xs text-gray-400">10점 만점</div></div>
                  <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_, i) => (<IconStar key={i} size={18} className={i < Math.round(QA_REVIEW.score / 2) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} />))}</div>
                </div>
                <div className="space-y-3">
                  {QA_REVIEW.items.map((item) => (
                    <div key={item.area} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-28 shrink-0">{item.area}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2"><div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${item.score * 10}%` }} /></div>
                      <span className="text-sm font-bold text-gray-700 w-8 text-right">{item.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">프로젝트 설명</h3>
                <p className="text-[15px] text-gray-600 leading-[1.8]">{PROJECT.description}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
