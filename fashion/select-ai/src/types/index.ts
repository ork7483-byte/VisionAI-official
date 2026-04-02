// ===== 사용자 =====
export interface User {
  id: string;
  email: string;
  name?: string;
  plan: "free" | "basic" | "pro" | "premium";
  referralCode: string;
  referredBy?: string;
}

// ===== 생성 이미지 =====
export type ImageType = "modelCut" | "fitting" | "video" | "productCut";
export type Category = "top" | "bottom" | "onepiece" | "bag" | "shoes" | "perfume" | "accessory";

export interface GeneratedImage {
  id: string;
  userId: string;
  type: ImageType;
  inputUrl: string;
  outputUrl: string;
  thumbnailUrl?: string;
  category?: Category;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

// ===== 구독 =====
export interface Subscription {
  id: string;
  userId: string;
  plan: "basic" | "pro" | "premium";
  status: "active" | "cancelled" | "expired";
  currentPeriodStart: string;
  currentPeriodEnd: string;
}

// ===== 사용량 =====
export interface UsageTracker {
  id: string;
  userId: string;
  month: string;
  modelCut: number;
  fitting: number;
  video: number;
  productCut: number;
}

// ===== 요금제 =====
export interface PricingPlan {
  id: string;
  name: string;
  nameKo: string;
  price: number;
  yearlyPrice: number;
  badge?: string;
  highlighted?: boolean;
  features: PlanFeature[];
}

export interface PlanFeature {
  label: string;
  value: string | boolean;
}

// ===== 비포/애프터 =====
export interface BeforeAfterItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  label?: string;
}

// ===== 가상피팅 옵션 =====
export interface FittingOptions {
  topImage: string;
  bottomImage?: string;
  modelImage: string;
  poseImage: string;
  backgroundImage: string;
  ratio: string;
}

// ===== 프리셋 =====
export interface Preset {
  id: string;
  label: string;
  imageUrl: string;
}

// ===== 갤러리 아이템 =====
export interface GalleryItem {
  id: string;
  imageUrl: string;
  thumbnailUrl?: string;
  type: ImageType;
  category?: string;
  createdAt: string;
}

// ===== 후기 =====
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

// ===== API 응답 =====
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface GenerateResult {
  taskId: string;
  status: "pending" | "processing" | "completed" | "failed";
  outputUrl?: string;
  progress?: number;
}
