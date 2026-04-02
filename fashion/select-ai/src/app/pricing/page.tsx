"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { pricingPlans } from "@/lib/mock/data";

const FAQ_ITEMS = [
  { q: "무료 체험은 어떻게 이용하나요?", a: "회원가입 후 별도의 카드 등록 없이 3건의 AI 이미지를 무료로 생성할 수 있습니다. 무료 결과물에는 워터마크가 포함됩니다." },
  { q: "구독은 언제든 취소할 수 있나요?", a: "네, 언제든 자유롭게 취소 가능합니다. 취소 시 현재 결제 주기가 끝날 때까지 서비스를 이용할 수 있습니다." },
  { q: "연간 결제 시 환불이 가능한가요?", a: "결제 후 7일 이내 사용량이 없는 경우 전액 환불이 가능합니다. 이후에는 잔여 기간에 대한 비례 환불이 적용됩니다." },
  { q: "플랜 업그레이드/다운그레이드는 어떻게 하나요?", a: "설정 > 요금제 메뉴에서 언제든 변경 가능합니다. 업그레이드 시 즉시 적용되며, 다운그레이드는 다음 결제 주기부터 적용됩니다." },
  { q: "생성한 이미지의 저작권은 누구에게 있나요?", a: "AI로 생성된 모든 이미지의 상업적 사용 권리는 구독자에게 있습니다. 자유롭게 SNS, 쇼핑몰, 광고 등에 활용하세요." },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <section className="pt-28 pb-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-3">요금제</h1>
            <p className="text-brand-sub text-lg">비즈니스 규모에 맞는 플랜을 선택하세요</p>
          </div>

          {/* Toggle */}
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

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {pricingPlans.map((plan) => {
              const price = billingCycle === "monthly" ? plan.price : plan.yearlyPrice;
              const isHighlighted = plan.highlighted;
              return (
                <div
                  key={plan.id}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-surface-light">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text text-center mb-10">자주 묻는 질문</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium text-brand-text text-sm">{item.q}</span>
                  <span className={`text-brand-sub transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-brand-sub text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
