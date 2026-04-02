# Ver.3: AI 쇼핑몰 빌더 SaaS — 클로드코드 빌드 설계서

> 이 문서만으로 Ver.3 웹사이트를 빌드할 수 있도록 작성됨
> 전제: Ver.1이 이미 운영 중이며, Ver.1의 컴포넌트와 AI 엔진을 재사용

---

## 서비스 개요

- **서비스명**: VisionShop (또는 대표 확정 후 변경)
- **한 줄 정의**: "가입하면 AI가 내장된 패션 쇼핑몰이 만들어진다" — 패션 전용 Shopify + AI
- **타깃**: 자사몰을 원하는 중소 패션 브랜드, 인스타 쇼핑몰 → 자사몰 전환 셀러
- **수익 모델**: 월 구독 (스타터/그로스/엔터프라이즈)

---

## Ver.1에서 가져오는 것 (추가 개발 없음)

```
[AI 엔진 API] — 그대로
├── 모델컷 변환 API
├── 가상피팅 API
├── 영상 변환 API
├── 연출컷 API
└── 배경 제거 API

[프론트엔드 컴포넌트] — import만으로 재사용
├── BeforeAfterHover       → 쇼핑몰 갤러리에 탑재
├── FittingPanel            → 대시보드 AI 스튜디오에 임베드
├── VideoPreview            → 대시보드 AI 스튜디오에 임베드
├── ImageUploader           → 상품 등록에 사용
├── ResultCanvas            → 대시보드에 사용
├── GalleryGrid             → 쇼핑몰 상품 목록에 적용
├── PricingTable            → Ver.3 랜딩에 사용
├── ReferralWidget          → 대시보드에 사용
├── CategoryFilter          → 쇼핑몰 카테고리에 사용
└── CountUpAnimation        → Ver.3 랜딩에 사용

[백엔드 모듈] — 확장
├── Auth (카카오 로그인)     → 그대로
├── Subscription            → 플랜 변경만 (스타터/그로스/엔터프라이즈)
├── Usage                   → 그대로
├── Gallery                 → Product 모델과 연결 추가
└── Referral                → 그대로
```

---

## Ver.3에서 새로 만드는 것

```
[쇼핑몰 빌더 모듈]
├── ShopBuilder             — 쇼핑몰 생성/설정
├── ThemeEngine             — 테마/디자인 커스터마이징
├── DomainManager           — 서브도메인/커스텀도메인
└── ShopSettings            — 기본정보, 배송, 정책

[상품 관리 모듈]
├── ProductManager          — 상품 CRUD
├── CategoryManager         — 카테고리 관리
└── AI AutoPipeline         — 상품 사진 → AI 자동 생성 파이프라인

[주문/결제 모듈]
├── OrderManager            — 주문 관리
├── PaymentGateway          — 구매자 결제 처리
├── ShippingManager         — 배송 관리
└── SettlementManager       — 셀러 정산

[쇼핑몰 프론트 모듈]
├── ShopFront               — 고객이 보는 쇼핑몰 전체
├── ProductPage             — 상품 상세 (AI 상세페이지 자동 탑재)
├── CartPage                — 장바구니
├── CheckoutPage            — 결제
└── HoverGallery            — BeforeAfterHover 기반 상품 갤러리
```

---

## 사이트맵

```
[마케팅 랜딩]
/                          — 셀러 유치 랜딩페이지
/pricing                   — 요금제

[셀러 대시보드]
/dashboard                 — 대시보드 홈 (매출, 주문, AI 사용량)
/dashboard/products        — 상품 목록
/dashboard/products/new    — 상품 등록 (AI 자동 생성 포함)
/dashboard/products/[id]   — 상품 수정
/dashboard/ai-studio       — AI 스튜디오 (Ver.1 /app 임베드)
/dashboard/ai-studio/model-cut
/dashboard/ai-studio/fitting
/dashboard/ai-studio/video
/dashboard/ai-studio/product-cut
/dashboard/orders          — 주문 관리
/dashboard/design          — 쇼핑몰 디자인 (테마, 로고, 배너)
/dashboard/domain          — 도메인 설정
/dashboard/settings        — 기본 설정
/dashboard/analytics       — 분석/통계

[생성된 쇼핑몰] (멀티테넌트)
{shop}.visionshop.kr       — 고객이 보는 쇼핑몰
{shop}.visionshop.kr/products
{shop}.visionshop.kr/products/[id]
{shop}.visionshop.kr/cart
{shop}.visionshop.kr/checkout
```

---

## 기술 스택 (Ver.1에 추가)

| 항목 | 선택 | 비고 |
|------|------|------|
| 멀티테넌트 | 서브도메인 라우팅 | Next.js middleware |
| 쇼핑몰 프론트 | Next.js 동적 렌더링 | 테넌트별 테마 적용 |
| 이미지 CDN | CloudFront | 쇼핑몰 이미지 서빙 |
| 커스텀 도메인 | DNS API + Let's Encrypt | 자동 SSL |
| 결제 (구매자) | 토스페이먼츠 | 쇼핑몰 구매 결제 |
| 정산 | 자체 구현 | 셀러 매출 정산 |

---

## 데이터 모델 (Ver.1 확장)

```prisma
// ===== 기존 (Ver.1에서 가져옴) =====

model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  plan          String   @default("free")
  referralCode  String   @unique @default(cuid())
  referredBy    String?
  createdAt     DateTime @default(now())
  images        GeneratedImage[]
  subscription  Subscription?
  shop          Shop?            // ← 추가: 쇼핑몰 연결
}

// GeneratedImage, Subscription, UsageTracker — 변경 없음

// ===== 신규 (Ver.3 전용) =====

model Shop {
  id            String    @id @default(cuid())
  sellerId      String    @unique
  seller        User      @relation(fields: [sellerId], references: [id])
  shopName      String
  subdomain     String    @unique  // {subdomain}.visionshop.kr
  customDomain  String?
  logo          String?
  bannerImages  Json?     // [url, url, ...]
  theme         String    @default("default")
  description   String?
  settings      Json?     // { currency, shippingPolicy, returnPolicy }
  status        String    @default("active")
  createdAt     DateTime  @default(now())
  products      Product[]
  orders        Order[]
  categories    Category[]
}

model Category {
  id        String    @id @default(cuid())
  shopId    String
  shop      Shop      @relation(fields: [shopId], references: [id])
  name      String
  slug      String
  order     Int       @default(0)
  products  Product[]
}

model Product {
  id            String    @id @default(cuid())
  shopId        String
  shop          Shop      @relation(fields: [shopId], references: [id])
  categoryId    String?
  category      Category? @relation(fields: [categoryId], references: [id])
  name          String
  price         Int
  salePrice     Int?
  description   String?
  images        Json      // { product: url, modelCut: url, styled: url }
  detailPage    String?   // AI 생성 상세페이지 HTML
  options       Json?     // [{ name: "사이즈", values: ["S","M","L"] }]
  stock         Int       @default(0)
  status        String    @default("active")
  hoverEnabled  Boolean   @default(true)  // 호버 전환 활성화
  createdAt     DateTime  @default(now())
  orderItems    OrderItem[]
}

model Order {
  id            String      @id @default(cuid())
  shopId        String
  shop          Shop        @relation(fields: [shopId], references: [id])
  orderNumber   String      @unique
  buyerName     String
  buyerEmail    String
  buyerPhone    String
  buyerAddress  Json
  items         OrderItem[]
  totalPrice    Int
  paymentStatus String      @default("pending")
  shippingStatus String     @default("preparing")
  trackingNumber String?
  createdAt     DateTime    @default(now())
}

model OrderItem {
  id          String   @id @default(cuid())
  orderId     String
  order       Order    @relation(fields: [orderId], references: [id])
  productId   String
  product     Product  @relation(fields: [productId], references: [id])
  quantity    Int
  price       Int
  options     Json?    // { "사이즈": "M", "색상": "블랙" }
}
```

---

## 페이지 상세 설계

### A. 마케팅 랜딩 (/)

#### 섹션 1: 히어로

```
헤드라인: "AI가 내장된 패션 쇼핑몰, 10분이면 오픈."
서브: "모델 촬영, 상세페이지, 호버 갤러리까지 — 전부 AI가 해결"
배경: 생성된 쇼핑몰 작동 화면 영상 (호버 전환 작동 모습)

[무료로 내 쇼핑몰 만들기] CTA
```

#### 섹션 2: 데모 쇼핑몰 쇼케이스

```
"이런 쇼핑몰이 10분 만에 만들어집니다"

[실제 생성된 쇼핑몰 스크린샷/영상 3~4개]
- 호버 전환 갤러리 작동 모습
- AI 모델컷이 적용된 상품 목록
- AI 상세페이지
```

#### 섹션 3: AI 기능 + 쇼핑몰 기능

```
좌측: AI 기능 (Ver.1에서 가져옴)     우측: 쇼핑몰 기능 (Ver.3 신규)
├── AI 모델컷 자동 생성               ├── 원클릭 쇼핑몰 개설
├── 가상피팅 룩북                     ├── 상품 등록/관리
├── 영상 자동 변환                    ├── 주문/결제/배송
├── 연출컷 생성                       ├── 호버 전환 갤러리 자동
└── 상세페이지 자동화                  └── 커스텀 도메인
```

#### 섹션 4: 작동 데모

```
STEP 1: 가입 + 쇼핑몰명 입력 (1분)
STEP 2: 상품 사진 업로드 (3분)
STEP 3: AI가 모델컷 + 상세페이지 자동 생성 (2분)
STEP 4: 내 쇼핑몰 오픈! (즉시)
```

#### 섹션 5: 가격표

| 항목 | 스타터 (49,000) | ⭐ 그로스 (149,000) | 엔터프라이즈 (399,000) |
|------|---------------|-------------------|---------------------|
| 상품 등록 | 50개 | 300개 | 무제한 |
| AI 이미지 | 월 50장 | 월 300장 | 무제한 |
| AI 영상 | X | 월 10건 | 무제한 |
| 가상피팅 | X | O | O |
| 커스텀 도메인 | X | O | O |
| 호버 갤러리 | O | O | O |
| 상세페이지 AI | O | O | O |
| 주문 관리 | O | O | O |
| 전담 매니저 | X | X | O |

#### 섹션 6: 사회적 증거 + 섹션 7: CTA (Ver.1과 동일 구조)

#### 섹션 8: 엔터프라이즈 (Ver.2 영업 채널)

```
─────────────────────────────────────
"브랜드 맞춤 구축이 필요하신가요?"

전담 매니저가 AI 쇼핑몰을 구축해드립니다.
✅ 브랜드 맞춤 디자인
✅ AI 모델 커스텀 학습
✅ 기존 쇼핑몰 데이터 마이그레이션
✅ 런칭 후 3개월 운영 지원

[문의하기 →] (카카오톡 채널)
─────────────────────────────────────
```

---

### B. 셀러 대시보드 (/dashboard)

#### 사이드바

```
┌─────────────────────┐
│ [쇼핑몰 로고/이름]    │
│ [내 쇼핑몰 보기 →]   │
├─────────────────────┤
│ 📊 대시보드           │
│ 📦 상품 관리          │
│ 🎨 AI 스튜디오       │
│ 📄 상세페이지         │
│ 🛒 주문 관리          │
│ 🎨 쇼핑몰 디자인      │
│ 🔗 도메인 설정        │
│ 📈 분석              │
│ ⚙️ 설정              │
├─────────────────────┤
│ 🎁 추천 프로그램      │
│ 💳 요금제: 그로스     │
└─────────────────────┘
```

#### 대시보드 홈 (/dashboard)

```
┌─────────────────────────────────────────┐
│ 오늘의 요약                              │
│                                         │
│ [매출]        [주문]       [방문자]       │
│ ₩1,234,000   12건         345명          │
│                                         │
│ AI 사용량 (이번 달)                      │
│ 모델컷: 45/300   영상: 3/10             │
│ ████████░░░░     ███░░░░░░░             │
│                                         │
│ 최근 주문                                │
│ [주문 테이블]                            │
└─────────────────────────────────────────┘
```

#### 상품 등록 (/dashboard/products/new) — AI 자동 파이프라인

```
STEP 1: 기본 정보
┌─────────────────────────────────────┐
│ 상품명: [________________]          │
│ 가격:   [________] 원               │
│ 카테고리: [TOP ▾]                   │
│ 옵션: [+ 사이즈 추가] [+ 색상 추가]  │
└─────────────────────────────────────┘

STEP 2: 제품 사진 업로드
┌─────────────────────────────────────┐
│ 📷 제품 사진을 끌어다 놓으세요       │
│                                     │
│ [업로드된 사진 미리보기]             │
└─────────────────────────────────────┘

STEP 3: AI 자동 생성 (★ 핵심 차별점)
┌─────────────────────────────────────┐
│ AI가 자동으로 생성합니다:            │
│                                     │
│ ☑ 누끼컷 (배경 제거)               │
│ ☑ 모델컷 (AI 모델 착장)     [모델 선택 ▾] │
│ ☑ 연출컷 (스튜디오급)              │
│ ☑ 상세페이지 (카피+레이아웃)        │
│                                     │
│ [AI 생성 시작하기]                  │
│                                     │
│ 생성 결과 미리보기:                  │
│ [누끼] [모델컷] [연출컷] [상세페이지] │
│                                     │
│ ☑ 호버 전환 활성화                  │
│   (갤러리에서 제품컷 → 모델컷 자동전환) │
└─────────────────────────────────────┘

STEP 4: 확인 → [상품 등록하기]
```

---

### C. 생성된 쇼핑몰 ({shop}.visionshop.kr)

#### 메인 페이지

```
[헤더]
  로고  |  카테고리1  카테고리2  카테고리3  |  검색  장바구니

[메인 배너]
  슬라이드 배너 (셀러가 대시보드에서 설정)

[상품 갤러리] ← BeforeAfterHover 컴포넌트 탑재
  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
  │      │ │      │ │      │ │      │
  │ 제품컷│ │ 제품컷│ │ 제품컷│ │ 제품컷│
  │      │ │      │ │      │ │      │
  │hover │ │      │ │      │ │      │
  │→모델컷│ │      │ │      │ │      │
  ├──────┤ ├──────┤ ├──────┤ ├──────┤
  │상품명 │ │상품명 │ │상품명 │ │상품명 │
  │₩가격  │ │₩가격  │ │₩가격  │ │₩가격  │
  └──────┘ └──────┘ └──────┘ └──────┘

[푸터]
```

#### 상품 상세 페이지

```
[상품 이미지 슬라이드]
  제품컷 / 모델컷 / 연출컷 전환

[상품 정보]
  상품명, 가격, 옵션 선택, 수량, [장바구니] [바로구매]

[AI 생성 상세페이지]
  ← 자동 적용된 상세페이지 (카피+이미지+레이아웃)
```

---

## 멀티테넌트 구현 가이드

```typescript
// middleware.ts — 서브도메인 라우팅
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];
  
  // 메인 도메인 → 마케팅 랜딩
  if (subdomain === 'www' || subdomain === 'visionshop') {
    return NextResponse.next();
  }
  
  // dashboard → 셀러 대시보드
  if (subdomain === 'dashboard') {
    return NextResponse.next();
  }
  
  // 그 외 → 쇼핑몰 프론트 ({shop}.visionshop.kr)
  const url = req.nextUrl.clone();
  url.pathname = `/shop/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}
```

---

## 빌드 전 준비물 (Ver.1 운영 데이터 기반)

| # | 준비물 | 비고 |
|---|--------|------|
| 1 | Ver.1 유저 데이터 분석 결과 | 어떤 기능이 가장 많이 쓰이는지 |
| 2 | 쇼핑몰 테마 디자인 3~5종 | 패션 특화 |
| 3 | 데모 쇼핑몰 3~4개 | 마케팅 랜딩용 |
| 4 | 결제 PG 사업자 등록 | 쇼핑몰 구매 결제용 |
| 5 | 정산 시스템 설계 | 셀러 매출 정산 주기/수수료 |
| 6 | 서브도메인 DNS 설정 | *.visionshop.kr |
| 7 | SSL 와일드카드 인증서 | *.visionshop.kr |
| 8 | Ver.1 베타 유저 중 Ver.3 테스터 선발 | 5~10명 |
