# Ver.1: AI 패션 이미지 SaaS — 클로드코드 빌드 설계서

> 이 문서만으로 Ver.1 웹사이트를 빌드할 수 있도록 작성됨
> 별도의 독립 프로젝트로 제작

---

## 서비스 개요

- **서비스명**: SELECT AI (또는 대표 확정 후 변경)
- **한 줄 정의**: "사진 올리면 AI 모델컷 나온다" — 패션 셀러를 위한 AI 이미지 생성 구독 서비스
- **타깃**: 동대문 셀러, 인스타 쇼핑몰, 스마트스토어/쿠팡 셀러, 자사몰 운영자
- **수익 모델**: 월 구독 (기본/프로/프리미엄)

---

## 사이트맵

```
/                    — 메인 랜딩페이지 (설득형, 비주얼 퍼스트)
/app                 — 기능 체험 페이지 (로그인 필요)
/app/model-cut       — 모델컷 변환
/app/fitting         — 가상피팅
/app/video           — 영상 변환
/app/product-cut     — 연출컷 생성
/app/gallery         — 내 갤러리
/pricing             — 결제 페이지
```

---

## 기술 스택

| 항목 | 선택 |
|------|------|
| 프레임워크 | Next.js 14+ (App Router) |
| 스타일링 | Tailwind CSS |
| 인증 | NextAuth + 카카오 로그인 |
| 결제 | 토스페이먼츠 또는 카카오페이 |
| DB | PostgreSQL (Prisma ORM) |
| 스토리지 | AWS S3 (생성 이미지) |
| 배포 | Vercel (프론트) |
| AI API | 자체 GPU 서버 (Flux + ComfyUI + LoRA) |

---

## 데이터 모델

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  plan          String   @default("free")  // free, basic, pro, premium
  referralCode  String   @unique @default(cuid())
  referredBy    String?
  createdAt     DateTime @default(now())
  images        GeneratedImage[]
  subscription  Subscription?
}

model GeneratedImage {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  type        String   // modelCut, fitting, video, productCut
  inputUrl    String
  outputUrl   String
  thumbnailUrl String?
  category    String?  // top, bottom, onepiece, bag, shoes, perfume
  metadata    Json?    // { model, pose, background, ratio }
  createdAt   DateTime @default(now())
}

model Subscription {
  id            String   @id @default(cuid())
  userId        String   @unique
  user          User     @relation(fields: [userId], references: [id])
  plan          String   // basic, pro, premium
  status        String   @default("active")
  currentPeriodStart DateTime
  currentPeriodEnd   DateTime
  paymentMethod String?
  createdAt     DateTime @default(now())
}

model UsageTracker {
  id        String   @id @default(cuid())
  userId    String
  month     String   // "2026-04"
  modelCut  Int      @default(0)
  fitting   Int      @default(0)
  video     Int      @default(0)
  productCut Int     @default(0)
}
```

---

## 페이지 상세 설계

### 1. 메인 랜딩페이지 (/)

> 핵심 원칙: 섹션 1~3은 이미지 90% + 텍스트 10%
> 모바일 기준 한 섹션 = 한 화면

#### 네비게이션 바

```
[SELECT 로고]  [홈]  [요금제]  [무료로 시작하기(CTA)]
```

- 스크롤 시 배경 투명 → 불투명 전환
- 모바일: 햄버거 메뉴 + CTA 버튼 상단 고정

#### 섹션 1: 히어로 비주얼

```
┌─────────────────────────────────────┐
│                                     │
│   [AI 모델컷 결과물 풀스크린         │
│    자동재생 영상 (무음, 3~5초 루프)]  │
│                                     │
│   "모델 촬영 없이, AI로 10초만에."   │
│   서브: "제품 사진 한 장이면          │
│    스튜디오급 모델컷이 완성됩니다"    │
│                                     │
│   [무료로 3장 만들어보기] CTA        │
│                                     │
└─────────────────────────────────────┘
```

구현 노트:
- 배경 영상: `<video autoPlay muted loop playsInline>`
- 헤드라인: 반투명 오버레이 위 흰색 텍스트
- CTA: 브랜드 메인 컬러, 큰 사이즈, thumb zone 배치
- 모바일: 영상 대신 정적 이미지 대체 (데이터 절약)

#### 섹션 2: 비포-애프터 호버 갤러리

```
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│BEFORE│ │BEFORE│ │BEFORE│ │BEFORE│
│[누끼]│ │[바닥]│ │[가방]│ │[신발]│
│      │ │      │ │      │ │      │
│hover │ │      │ │      │ │      │
│→AFTER│ │      │ │      │ │      │
│[모델]│ │      │ │      │ │      │
└──────┘ └──────┘ └──────┘ └──────┘
```

구현 노트:
- `BeforeAfterHover` 컴포넌트 제작 (★ Ver.3에서 재사용)
- 데스크탑: 마우스 호버 시 이미지 교체 (CSS transition opacity)
- 모바일: 탭으로 전환 또는 자동 슬라이드
- 좌측 상단에 "BEFORE" / "AFTER" 라벨 뱃지
- 카테고리 필터 탭: TOP / BOTTOM / BAG / SHOES / ALL
- 하단 CTA: "나도 만들어보기"

```tsx
// BeforeAfterHover 컴포넌트 구조
interface BeforeAfterHoverProps {
  beforeImage: string;
  afterImage: string;
  category: string;
  modelThumbnail?: string; // AFTER 시 우측 상단 모델 뱃지
}
```

#### 섹션 3: 핵심 기능 4가지

```
2×2 그리드 카드

┌─────────────────┐ ┌─────────────────┐
│ 📸 모델컷 변환    │ │ 👗 가상피팅       │
│                 │ │                 │
│ 바닥컷/누끼 →    │ │ 의상+모델+포즈    │
│ AI 모델 착장     │ │ +배경 자유 조합   │
│                 │ │                 │
│ [데모 GIF]       │ │ [데모 GIF]       │
└─────────────────┘ └─────────────────┘
┌─────────────────┐ ┌─────────────────┐
│ 🎬 영상 변환      │ │ 🖼️ 연출컷 생성    │
│                 │ │                 │
│ 룩북 이미지 →    │ │ 제품 이미지 →    │
│ SNS 영상 자동    │ │ 스튜디오급 연출   │
│                 │ │                 │
│ [데모 GIF]       │ │ [데모 GIF]       │
└─────────────────┘ └─────────────────┘
```

구현 노트:
- 카드 호버 시 GIF 자동재생 또는 확대 모달
- 모바일: 세로 스택

#### 섹션 4: 작동 데모 영상

```
[화면 녹화 GIF/영상 - 자동재생, 무음, 루프]

① 사진 업로드 (2초) → ② AI 생성 (3초) → ③ 완성! (2초)

[무료로 체험하기] CTA
```

#### 섹션 5: 결과물 갤러리

- 카테고리 필터: 전체 / 패션 / 가방 / 신발 / 향수
- 이미지 6~12장 그리드 (3열)
- 클릭 시 확대 모달 (Before/After 토글)
- `GalleryGrid` 컴포넌트 (★ Ver.3에서 재사용)

#### 섹션 6: 사회적 증거

```
[수치 카운트업 애니메이션 - 스크롤 트리거]
____+        ____+        ___%
셀러 사용 중   이미지 생성    만족도

[후기 카드 3~5개 좌우 스와이프 캐러셀]
```

#### 섹션 7: 가격표

| 항목 | 기본 (29,900원) | ⭐ 프로 (79,900원) | 프리미엄 (199,000원) |
|------|---------------|-----------------|-------------------|
| 모델컷 생성 | 월 20장 | 월 100장 | 무제한 |
| 가상피팅 | X | O | O |
| 영상 변환 | X | 월 5건 | 월 30건 |
| 연출컷 | 월 10장 | 월 50장 | 무제한 |
| 고해상도 | X | O | O |
| 워터마크 | 있음 | 없음 | 없음 |
| 래퍼럴 초대권 | 3개 | 5개 | 10개 |

구현 노트:
- `PricingTable` 컴포넌트 (★ Ver.3에서 재사용)
- 프로 카드: 10~15% 크게, 브랜드 컬러 배경, "BEST" 뱃지, 강조 테두리
- 월간/연간 토글 (연간 시 "2개월 무료" 표시)
- 모바일: 프로 카드가 가장 먼저 보이도록 배치

#### 섹션 8: 최종 CTA + 카카오톡

```
"지금 무료로 3장 만들어보세요"
"카드 등록 없이 바로 시작"

[무료로 시작하기] (대형 CTA)

"궁금한 점이 있으신가요?"
[카카오톡으로 문의하기]

💡 친구에게 추천하고, 무료 사용량을 받으세요
```

---

### 2. 기능 체험 페이지 (/app)

#### 레이아웃

```
┌──────────────────────────────────────────────┐
│ [로고]  [모델컷] [가상피팅] [영상] [연출컷]     │
│         [내 갤러리]  [요금제]  [프로필]         │
├──────────────────────────────────────────────┤
│                                              │
│  좌측 패널 (옵션)    중앙 캔버스 (결과물)       │
│  width: 300px       flex: 1                  │
│                                              │
│                     우측: 내 갤러리 (선택적)    │
│                                              │
├──────────────────────────────────────────────┤
│  남은 횟수: 2/3건    [업그레이드]               │
└──────────────────────────────────────────────┘
```

#### 탭 1: 모델컷 변환 (/app/model-cut)

좌측 패널:
```
[제품 이미지 업로드]
  - 드래그앤드롭 또는 파일 선택
  - 미리보기 표시

[카테고리 선택]
  - 상의 / 하의 / 원피스 / 가방 / 신발 / 액세서리

[모델 선택]
  - 프리셋 모델 그리드 (4~6명)
  - [+ 내 이미지 첨부] 버튼

[생성하기] 버튼
```

중앙 캔버스:
```
생성 전: "의상을 첨부하고 생성하기를 눌러주세요"
생성 중: 로딩 애니메이션 (진행률 표시)
생성 후: 결과 이미지 표시
         [다운로드] [갤러리에 저장] [공유]
```

#### 탭 2: 가상피팅 (/app/fitting)

좌측 패널 (SELECT에서 구현한 구조 그대로):
```
01 의상
   [상/하의] [원피스] 탭 전환
   상의: 프리셋 4개 + [내 이미지 첨부]
   하의: 프리셋 3개 + [내 이미지 첨부]

02 모델
   프리셋 3명 + [+ 추가] + [내 이미지 첨부]

03 포즈
   프리셋 4개 + [내 이미지 첨부]

04 배경
   프리셋 4개 + [내 이미지 첨부]
```

상단: 비율 선택 `16:9 | 3:2 | 4:3 | 1:1 | 3:4 | 2:3 | 9:16`
우측: 내 갤러리 (생성 이미지 저장)
중앙: 결과물 캔버스

```tsx
// FittingPanel 컴포넌트 구조 (★ Ver.3에서 재사용)
interface FittingPanelProps {
  onGenerate: (options: FittingOptions) => void;
}

interface FittingOptions {
  topImage: string;
  bottomImage?: string;
  modelImage: string;
  poseImage: string;
  backgroundImage: string;
  ratio: string;
}
```

#### 탭 3: 영상 변환 (/app/video)

좌측 패널:
```
[이미지 선택]
  - 내 갤러리에서 선택 또는 업로드

[Visual Mood 설정]
  - 프리셋 무드 선택

[Scene Control]
  - 공간/빛/분위기 옵션

[영상 길이]
  - 3초 / 5초 / 10초

[생성하기]
```

중앙: 영상 미리보기 플레이어

#### 탭 4: 연출컷 (/app/product-cut)

좌측 패널:
```
[제품 이미지 업로드]

[카테고리 선택]
  - PERFUME / FASHION / SHOES / BAG

[BEFORE / AFTER 토글]

[생성하기]
```

중앙: Before/After 비교 뷰

#### 내 갤러리 (/app/gallery)

```
필터: [전체] [모델컷] [가상피팅] [영상] [연출컷]

이미지 그리드 (3~4열)
각 이미지 호버 시: [다운로드] [삭제] 오버레이
```

#### 전환 포인트 (유료 전환 유도)

```
무료 3건 소진 시 팝업:
┌─────────────────────────────┐
│                             │
│  더 만들고 싶으신가요? 🎨     │
│                             │
│  프로 플랜으로               │
│  월 100장까지 무제한 생성     │
│                             │
│  [프로 플랜 시작하기]        │
│  [다음에]                   │
│                             │
└─────────────────────────────┘

무료 결과물: 워터마크 + 저해상도
유료 결과물: 워터마크 없음 + 고해상도
```

#### 래퍼럴 위젯 (사이드바 또는 하단)

```
┌─────────────────────────────┐
│  🎁 무료 체험 선물하기        │
│  남은 초대권: 3/3            │
│  [초대 링크 복사]            │
└─────────────────────────────┘
```

---

### 3. 결제 페이지 (/pricing)

- 메인 가격표와 동일한 UI
- 플랜 선택 → 결제 정보 입력 → 완료
- 월간/연간 토글
- 결제 수단: 카드 + 카카오페이
- 결제 완료 → /app으로 리다이렉트

---

## 컬러 & 디자인 시스템

| 용도 | 색상 | 코드 |
|------|------|------|
| 메인 (CTA, 프로 플랜) | 인디고 | #4F46E5 |
| 보조 (성공, 절감 강조) | 그린 | #10B981 |
| 배경 (라이트) | 라이트그레이 | #FAFAFA |
| 배경 (다크 섹션) | 거의 블랙 | #0F172A |
| 텍스트 | 거의 블랙 | #111827 |
| 서브텍스트 | 그레이 | #6B7280 |
| BEFORE 뱃지 | 다크 | #1F2937 |
| AFTER 뱃지 | 다크 | #1F2937 |
| 상태 - 무료 | 그레이 | #9CA3AF |
| 상태 - 프로 | 인디고 | #4F46E5 |

폰트: Pretendard (한글) + Inter (영문)

---

## 재사용 컴포넌트 목록 (★ = Ver.3에서 재사용)

| 컴포넌트 | 위치 | Ver.3 재사용 |
|---------|------|------------|
| BeforeAfterHover | 랜딩 섹션2, 갤러리 | ★ 쇼핑몰 갤러리에 탑재 |
| GalleryGrid | 랜딩 섹션5, /app/gallery | ★ 쇼핑몰 상품목록 |
| FittingPanel | /app/fitting | ★ 대시보드 AI 스튜디오 |
| VideoPreview | /app/video | ★ 대시보드 AI 스튜디오 |
| ImageUploader | /app 전체 | ★ 상품 등록 |
| ResultCanvas | /app 전체 | ★ 대시보드 |
| PricingTable | 랜딩 섹션7, /pricing | ★ Ver.3 랜딩 |
| ReferralWidget | /app 사이드바 | ★ 대시보드 |
| CategoryFilter | 갤러리 | ★ 쇼핑몰 |
| CountUpAnimation | 랜딩 섹션6 | ★ Ver.3 랜딩 |

> ★ 표시된 컴포넌트는 독립적으로 설계하여 나중에 Ver.3에서 import만으로 재사용할 수 있도록 합니다.

---

## 빌드 전 준비물

| # | 준비물 | 상태 |
|---|--------|------|
| 1 | 서비스명 / 도메인 확정 | [ ] |
| 2 | 로고 (SVG, 다크/라이트) | [ ] |
| 3 | 히어로 영상 또는 이미지 | [ ] |
| 4 | 비포-애프터 갤러리 이미지 8~12세트 | [ ] |
| 5 | 기능별 데모 GIF 4개 | [ ] |
| 6 | 결과물 갤러리 이미지 6~12장 | [ ] |
| 7 | 베타 테스터 후기 3~5개 | [ ] |
| 8 | AI 엔진 API 엔드포인트 | [ ] |
| 9 | 카카오 로그인 API 키 | [ ] |
| 10 | 토스페이먼츠 API 키 | [ ] |
| 11 | AWS S3 버킷 설정 | [ ] |
| 12 | 카카오톡 채널 개설 | [ ] |
