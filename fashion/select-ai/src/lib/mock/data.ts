import type {
  BeforeAfterItem,
  GalleryItem,
  PricingPlan,
  Testimonial,
  Preset,
  User,
  UsageTracker,
} from "@/types";

// ===== 목업 유저 =====
export const mockUser: User = {
  id: "user_001",
  email: "seller@example.com",
  name: "김셀러",
  plan: "free",
  referralCode: "REF_ABC123",
};

export const mockUsage: UsageTracker = {
  id: "usage_001",
  userId: "user_001",
  month: "2026-04",
  modelCut: 1,
  fitting: 0,
  video: 0,
  productCut: 0,
};

// ===== 비포/애프터 갤러리 =====
export const beforeAfterItems: BeforeAfterItem[] = [
  { id: "ba1", beforeImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=530&fit=crop", afterImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=530&fit=crop", category: "top", label: "상의" },
  { id: "ba2", beforeImage: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=530&fit=crop", afterImage: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=530&fit=crop", category: "bottom", label: "하의" },
  { id: "ba3", beforeImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=530&fit=crop", afterImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=530&fit=crop", category: "bag", label: "가방" },
  { id: "ba4", beforeImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=530&fit=crop", afterImage: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=530&fit=crop", category: "shoes", label: "신발" },
  { id: "ba5", beforeImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=530&fit=crop", afterImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=530&fit=crop", category: "top", label: "원피스" },
  { id: "ba6", beforeImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=530&fit=crop", afterImage: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=530&fit=crop", category: "perfume", label: "향수" },
  { id: "ba7", beforeImage: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=530&fit=crop", afterImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=530&fit=crop", category: "top", label: "상의" },
  { id: "ba8", beforeImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=530&fit=crop", afterImage: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=530&fit=crop", category: "bag", label: "가방" },
];

// ===== 결과물 갤러리 =====
export const galleryItems: GalleryItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: `gallery_${i + 1}`,
  imageUrl: `/images/mock/gallery-${i + 1}.jpg`,
  thumbnailUrl: `/images/mock/gallery-${i + 1}-thumb.jpg`,
  type: (["modelCut", "fitting", "video", "productCut"] as const)[i % 4],
  category: (["top", "bottom", "bag", "shoes", "perfume"] as const)[i % 5],
  createdAt: new Date(2026, 3, i + 1).toISOString(),
}));

// ===== 요금제 =====
export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    nameKo: "기본",
    price: 29900,
    yearlyPrice: 299000,
    features: [
      { label: "모델컷 생성", value: "월 20장" },
      { label: "가상피팅", value: false },
      { label: "영상 변환", value: false },
      { label: "연출컷", value: "월 10장" },
      { label: "고해상도", value: false },
      { label: "워터마크", value: "있음" },
      { label: "래퍼럴 초대권", value: "3개" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    nameKo: "프로",
    price: 79900,
    yearlyPrice: 799000,
    badge: "BEST",
    highlighted: true,
    features: [
      { label: "모델컷 생성", value: "월 100장" },
      { label: "가상피팅", value: true },
      { label: "영상 변환", value: "월 5건" },
      { label: "연출컷", value: "월 50장" },
      { label: "고해상도", value: true },
      { label: "워터마크", value: "없음" },
      { label: "래퍼럴 초대권", value: "5개" },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    nameKo: "프리미엄",
    price: 199000,
    yearlyPrice: 1990000,
    features: [
      { label: "모델컷 생성", value: "무제한" },
      { label: "가상피팅", value: true },
      { label: "영상 변환", value: "월 30건" },
      { label: "연출컷", value: "무제한" },
      { label: "고해상도", value: true },
      { label: "워터마크", value: "없음" },
      { label: "래퍼럴 초대권", value: "10개" },
    ],
  },
];

// ===== 후기 =====
export const testimonials: Testimonial[] = [
  { id: "t1", name: "박서연", role: "동대문 셀러", content: "촬영비 월 200만원 아꼈어요. AI가 만든 모델컷인지 아무도 몰라요.", rating: 5 },
  { id: "t2", name: "이준호", role: "스마트스토어 운영자", content: "상품 등록 시간이 반으로 줄었습니다. 특히 가상피팅이 신세계에요.", rating: 5 },
  { id: "t3", name: "김지은", role: "인스타 쇼핑몰", content: "인스타 피드가 확 달라졌어요. 팔로워도 늘고 매출도 올랐어요!", rating: 5 },
  { id: "t4", name: "최민수", role: "쿠팡 셀러", content: "경쟁사 대비 상품 이미지 퀄리티가 확 올라갔습니다. 클릭률이 30% 증가했어요.", rating: 4 },
  { id: "t5", name: "장현아", role: "자사몰 운영자", content: "모델 섭외 없이도 룩북 수준의 이미지를 만들 수 있어서 놀랐어요.", rating: 5 },
];

// ===== 사회적 증거 수치 =====
export const socialProofStats = [
  { label: "셀러 사용 중", value: 2500, suffix: "+" },
  { label: "이미지 생성", value: 150000, suffix: "+" },
  { label: "만족도", value: 98, suffix: "%" },
];

// ===== 핵심 기능 카드 =====
export const featureCards = [
  {
    id: "modelCut",
    icon: "📸",
    title: "모델컷 변환",
    description: "바닥컷/누끼 → AI 모델 착장",
    detail: "제품 사진 한 장이면 스튜디오급 모델컷이 10초만에 완성됩니다.",
    demoUrl: "/images/mock/demo-modelcut.gif",
  },
  {
    id: "fitting",
    icon: "👗",
    title: "가상피팅",
    description: "의상+모델+포즈+배경 자유 조합",
    detail: "원하는 모델에 원하는 의상을 입히고, 포즈와 배경까지 커스텀하세요.",
    demoUrl: "/images/mock/demo-fitting.gif",
  },
  {
    id: "video",
    icon: "🎬",
    title: "영상 변환",
    description: "룩북 이미지 → SNS 영상 자동",
    detail: "정적 이미지를 동적 영상으로 변환하여 SNS 콘텐츠를 자동 생성합니다.",
    demoUrl: "/images/mock/demo-video.gif",
  },
  {
    id: "productCut",
    icon: "🖼️",
    title: "연출컷 생성",
    description: "제품 이미지 → 스튜디오급 연출",
    detail: "단순 제품 사진을 감성적인 연출컷으로 변환합니다.",
    demoUrl: "/images/mock/demo-productcut.gif",
  },
];

// ===== 모델 프리셋 =====
export const modelPresets: Preset[] = [
  { id: "model1", label: "모델 A", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
  { id: "model2", label: "모델 B", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" },
  { id: "model3", label: "모델 C", imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" },
  { id: "model4", label: "모델 D", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  { id: "model5", label: "모델 E", imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop" },
  { id: "model6", label: "모델 F", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" },
];

// ===== 포즈 프리셋 =====
export const posePresets: Preset[] = [
  { id: "pose1", label: "스탠딩", imageUrl: "/images/mock/pose-1.jpg" },
  { id: "pose2", label: "워킹", imageUrl: "/images/mock/pose-2.jpg" },
  { id: "pose3", label: "시팅", imageUrl: "/images/mock/pose-3.jpg" },
  { id: "pose4", label: "포즈", imageUrl: "/images/mock/pose-4.jpg" },
];

// ===== 배경 프리셋 =====
export const backgroundPresets: Preset[] = [
  { id: "bg1", label: "스튜디오 화이트", imageUrl: "/images/mock/bg-1.jpg" },
  { id: "bg2", label: "카페", imageUrl: "/images/mock/bg-2.jpg" },
  { id: "bg3", label: "거리", imageUrl: "/images/mock/bg-3.jpg" },
  { id: "bg4", label: "자연", imageUrl: "/images/mock/bg-4.jpg" },
];

// ===== 의상 프리셋 =====
export const topPresets: Preset[] = [
  { id: "top1", label: "티셔츠", imageUrl: "/images/mock/top-1.jpg" },
  { id: "top2", label: "셔츠", imageUrl: "/images/mock/top-2.jpg" },
  { id: "top3", label: "자켓", imageUrl: "/images/mock/top-3.jpg" },
  { id: "top4", label: "니트", imageUrl: "/images/mock/top-4.jpg" },
];

export const bottomPresets: Preset[] = [
  { id: "bottom1", label: "슬랙스", imageUrl: "/images/mock/bottom-1.jpg" },
  { id: "bottom2", label: "데님", imageUrl: "/images/mock/bottom-2.jpg" },
  { id: "bottom3", label: "스커트", imageUrl: "/images/mock/bottom-3.jpg" },
];

// ===== 카테고리 필터 =====
export const categoryFilters = [
  { id: "all", label: "전체" },
  { id: "top", label: "상의" },
  { id: "bottom", label: "하의" },
  { id: "bag", label: "가방" },
  { id: "shoes", label: "신발" },
  { id: "perfume", label: "향수" },
];

export const galleryTypeFilters = [
  { id: "all", label: "전체" },
  { id: "modelCut", label: "모델컷" },
  { id: "fitting", label: "가상피팅" },
  { id: "video", label: "영상" },
  { id: "productCut", label: "연출컷" },
];

// ===== 비율 옵션 =====
export const ratioOptions = [
  { id: "16:9", label: "16:9" },
  { id: "3:2", label: "3:2" },
  { id: "4:3", label: "4:3" },
  { id: "1:1", label: "1:1" },
  { id: "3:4", label: "3:4" },
  { id: "2:3", label: "2:3" },
  { id: "9:16", label: "9:16" },
];
