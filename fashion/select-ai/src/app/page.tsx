"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BeforeAfterHover from "@/components/shared/BeforeAfterHover";
import CategoryFilter from "@/components/shared/CategoryFilter";
import {
  beforeAfterItems,
  featureCards,
  socialProofStats,
  testimonials,
  pricingPlans,
  categoryFilters,
} from "@/lib/mock/data";

/* ───────── Fade-in on scroll ───────── */
function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ───────── Count-up number ───────── */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          setCount(current);
        }, 16);
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ───────── MAIN PAGE ───────── */
export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const featureImages: Record<string, string> = {
    modelCut: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=300&fit=crop",
    fitting: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
    video: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    productCut: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
  };

  const filteredBA = activeCategory === "all"
    ? beforeAfterItems
    : beforeAfterItems.filter((i) => i.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* ====== SECTION 1: HERO ====== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <FadeInSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
              모델 촬영 없이,<br />AI로 10초만에.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              제품 사진 한 장이면 스튜디오급 모델컷이 완성됩니다
            </p>
            <a href="#before-after" className="btn-primary-lg text-lg">
              무료로 3장 만들어보기
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* ====== SECTION 2: BEFORE / AFTER ====== */}
      <section id="before-after" className="bg-surface-light section-padding">
        <div className="container-main">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-3">이렇게 달라집니다</h2>
              <p className="text-brand-sub text-lg">호버하면 AI 결과물을 확인하세요</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="flex justify-center mb-8">
              <CategoryFilter categories={categoryFilters} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredBA.map((item, idx) => (
              <FadeInSection key={item.id} delay={idx * 80}>
                <BeforeAfterHover
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  category={item.category}
                  label={item.label}
                />
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={200}>
            <div className="text-center mt-10">
              <a href="#hero" className="btn-primary">나도 만들어보기</a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ====== SECTION 3: FEATURES ====== */}
      <section id="features" className="section-padding bg-white">
        <div className="container-main">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-3">AI가 다 해드립니다</h2>
              <p className="text-brand-sub text-lg">사진 한 장으로 할 수 있는 모든 것</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureCards.map((card, idx) => (
              <FadeInSection key={card.id} delay={idx * 100}>
                <div className="card-base flex flex-col md:flex-row gap-5 items-start">
                  <div className="w-full md:w-48 h-36 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={featureImages[card.id]}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl mb-2">{card.icon}</div>
                    <h3 className="text-xl font-bold text-brand-text mb-1">{card.title}</h3>
                    <p className="text-brand-sub text-sm mb-2">{card.description}</p>
                    <p className="text-brand-text text-sm leading-relaxed">{card.detail}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 4: DEMO STEPS ====== */}
      <section className="bg-surface-light section-padding">
        <div className="container-main">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-3">3단계면 끝</h2>
              <p className="text-brand-sub text-lg">누구나 쉽게, 10초만에</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "사진 업로드", desc: "바닥컷, 누끼, 제품 사진 아무거나 올리세요" },
              { step: "02", title: "AI 생성", desc: "모델, 포즈, 배경을 선택하면 AI가 자동 생성" },
              { step: "03", title: "완성!", desc: "스튜디오급 모델컷을 바로 다운로드" },
            ].map((s, idx) => (
              <FadeInSection key={s.step} delay={idx * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-brand-text mb-2">{s.title}</h3>
                  <p className="text-brand-sub text-sm">{s.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 text-2xl">→</div>
                )}
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <div className="text-center mt-12">
              <div className="rounded-2xl overflow-hidden max-w-2xl mx-auto bg-gray-200 aspect-video flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=450&fit=crop" alt="데모" className="w-full h-full object-cover" />
              </div>
              <a href="#hero" className="btn-primary mt-8 inline-block">무료로 체험하기</a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ====== SECTION 5: SOCIAL PROOF ====== */}
      <section className="bg-brand-dark section-padding">
        <div className="container-main">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto text-center">
            {socialProofStats.map((stat, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div>
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.slice(0, 3).map((t, idx) => (
              <FadeInSection key={t.id} delay={idx * 120}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">&ldquo;{t.content}&rdquo;</p>
                  <div className="text-white/60 text-sm">
                    <span className="font-medium text-white">{t.name}</span> · {t.role}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 6: PRICING ====== */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-main">
          <FadeInSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-3">합리적인 요금제</h2>
              <p className="text-brand-sub text-lg">지금 시작하면 무료 3건 제공</p>
            </div>
          </FadeInSection>

          {/* Toggle */}
          <FadeInSection delay={100}>
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-brand-text" : "text-brand-sub"}`}>월간</span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className={`relative w-14 h-7 rounded-full transition-colors ${billingCycle === "yearly" ? "bg-brand-primary" : "bg-gray-300"}`}
              >
                <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${billingCycle === "yearly" ? "translate-x-7" : "translate-x-0.5"}`} />
              </button>
              <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-brand-text" : "text-brand-sub"}`}>
                연간
                <span className="ml-1.5 text-xs bg-brand-success text-white px-2 py-0.5 rounded-full">2개월 무료</span>
              </span>
            </div>
          </FadeInSection>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {pricingPlans.map((plan, idx) => {
              const price = billingCycle === "monthly" ? plan.price : plan.yearlyPrice;
              const isHighlighted = plan.highlighted;
              return (
                <FadeInSection key={plan.id} delay={idx * 100}>
                  <div
                    className={`relative rounded-2xl p-7 transition-all ${
                      isHighlighted
                        ? "border-2 border-brand-primary shadow-xl scale-105 bg-white"
                        : "border border-gray-200 bg-white"
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                        {plan.badge}
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-brand-text mb-1">{plan.name}</h3>
                    <p className="text-brand-sub text-sm mb-4">{plan.nameKo}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-brand-text">
                        {billingCycle === "monthly"
                          ? `₩${price.toLocaleString()}`
                          : `₩${Math.round(price / 12).toLocaleString()}`}
                      </span>
                      <span className="text-brand-sub text-sm">/월</span>
                      {billingCycle === "yearly" && (
                        <p className="text-xs text-brand-sub mt-1">연 ₩{price.toLocaleString()}</p>
                      )}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm">
                          {f.value === false ? (
                            <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-xs">✕</span>
                          ) : (
                            <span className="w-5 h-5 rounded-full bg-indigo-100 text-brand-primary flex items-center justify-center text-xs">✓</span>
                          )}
                          <span className="text-brand-text">{f.label}</span>
                          {typeof f.value === "string" && (
                            <span className="ml-auto text-brand-sub text-xs">{f.value}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                      isHighlighted
                        ? "bg-brand-primary text-white hover:bg-indigo-700"
                        : "bg-gray-100 text-brand-text hover:bg-gray-200"
                    }`}>
                      시작하기
                    </button>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== SECTION 7: FINAL CTA ====== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-indigo-600 to-purple-700" />
        <div className="relative z-10 section-padding text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">지금 무료로 3장 만들어보세요</h2>
            <p className="text-white/80 text-lg mb-10">카드 등록 없이 바로 시작</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#hero" className="bg-white text-brand-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors">
                무료로 시작하기
              </a>
              <a href="https://open.kakao.com/selectai" target="_blank" rel="noopener noreferrer" className="btn-kakao text-base py-4 px-8">
                💬 카카오톡으로 문의하기
              </a>
            </div>
            <p className="text-white/60 text-sm mt-8">💡 친구에게 추천하고, 무료 사용량을 받으세요</p>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
