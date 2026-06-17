"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Locale, Site } from "@/lib/sites";
import { getSiteContent, PRICE_KRW } from "@/lib/sites";
import { UI, formatPriceKRW } from "@/lib/i18n";

interface PurchaseFlowProps {
  site: Site;
  locale: Locale;
}

type Step = "summary" | "payment" | "success";

export default function PurchaseFlow({ site, locale }: PurchaseFlowProps) {
  const t = UI[locale];
  const c = getSiteContent(site, locale);
  const price = formatPriceKRW(PRICE_KRW, locale);

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("summary");

  const close = useCallback(() => {
    setOpen(false);
    // 닫힌 뒤 초기화 (애니메이션 고려해 약간 지연)
    window.setTimeout(() => setStep("summary"), 200);
  }, []);

  // Esc로 닫기 + 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <>
      {/* 가격 + 구매 카드 */}
      <div className="rounded-card bg-surface p-6 shadow-card">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-ink-faint" style={{ fontSize: "14px" }}>
              {t.oneTime}
            </p>
            <p className="mt-1 text-ink" style={{ fontSize: "34px", fontWeight: 600, letterSpacing: "-0.02em" }}>
              {price}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-5 flex h-12 w-full items-center justify-center rounded-pill bg-primary text-white transition-transform duration-150 active:scale-[0.99]"
          style={{ fontSize: "17px", fontWeight: 400 }}
        >
          {t.buyNow}
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={t.checkoutTitle}
        >
          {/* 백드롭 */}
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={close} aria-hidden />

          {/* 시트 */}
          <div className="animate-fade-up relative z-[1] w-full max-w-[440px] rounded-t-card bg-canvas p-6 sm:rounded-card sm:p-7">
            {step === "success" ? (
              <SuccessView t={t} onDone={close} />
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-ink" style={{ fontSize: "21px", fontWeight: 600, letterSpacing: "-0.01em" }}>
                    {t.checkoutTitle}
                  </h2>
                  <button
                    type="button"
                    onClick={close}
                    aria-label={t.done}
                    className="text-ink-faint"
                    style={{ fontSize: "22px", lineHeight: 1 }}
                  >
                    ✕
                  </button>
                </div>

                {step === "summary" ? (
                  <SummaryView
                    site={site}
                    title={c.title}
                    period={c.period}
                    price={price}
                    t={t}
                    onContinue={() => setStep("payment")}
                  />
                ) : (
                  <PaymentView
                    price={price}
                    t={t}
                    onBack={() => setStep("summary")}
                    onPaid={() => setStep("success")}
                  />
                )}

                <p className="mt-4 text-center text-ink-faint" style={{ fontSize: "12px" }}>
                  {t.demoNote}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

type T = (typeof UI)[Locale];

function SummaryView({
  site,
  title,
  period,
  price,
  t,
  onContinue,
}: {
  site: Site;
  title: string;
  period: string;
  price: string;
  t: T;
  onContinue: () => void;
}) {
  return (
    <div>
      <p className="mt-5 text-ink-faint" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
        {t.orderSummary}
      </p>
      <div className="mt-3 flex items-center gap-4 rounded-md bg-surface p-3">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm">
          <Image src={site.backgroundImage} alt={title} fill sizes="64px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-ink" style={{ fontSize: "17px", fontWeight: 600 }}>
            {title}
          </p>
          <p className="truncate text-ink-muted" style={{ fontSize: "14px" }}>
            {period}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-black/[0.08] pt-4">
        <span className="text-ink" style={{ fontSize: "17px", fontWeight: 600 }}>
          {t.total}
        </span>
        <span className="text-ink" style={{ fontSize: "17px", fontWeight: 600 }}>
          {price}
        </span>
      </div>

      <button
        type="button"
        onClick={onContinue}
        className="mt-5 flex h-12 w-full items-center justify-center rounded-pill bg-primary text-white active:scale-[0.99]"
        style={{ fontSize: "17px" }}
      >
        {t.continueToPayment}
      </button>
    </div>
  );
}

function PaymentView({
  price,
  t,
  onBack,
  onPaid,
}: {
  price: string;
  t: T;
  onBack: () => void;
  onPaid: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !card || !expiry || !cvc) {
      setError(true);
      return;
    }
    onPaid();
  };

  const inputCls =
    "mt-1 w-full rounded-sm bg-surface px-3 py-2.5 text-ink outline-none focus:ring-2 focus:ring-primary";

  return (
    <form onSubmit={submit} className="mt-5">
      <p className="text-ink-faint" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
        {t.payInfoTitle}
      </p>

      <div className="mt-3 space-y-3" style={{ fontSize: "15px" }}>
        <label className="block">
          <span className="text-ink-muted" style={{ fontSize: "13px" }}>{t.fieldName}</span>
          <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label className="block">
          <span className="text-ink-muted" style={{ fontSize: "13px" }}>{t.fieldEmail}</span>
          <input className={inputCls} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </label>
        <label className="block">
          <span className="text-ink-muted" style={{ fontSize: "13px" }}>{t.fieldCard}</span>
          <input className={inputCls} inputMode="numeric" placeholder="1234 5678 9012 3456" value={card} onChange={(e) => setCard(e.target.value)} />
        </label>
        <div className="flex gap-3">
          <label className="block flex-1">
            <span className="text-ink-muted" style={{ fontSize: "13px" }}>{t.fieldExpiry}</span>
            <input className={inputCls} placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
          </label>
          <label className="block flex-1">
            <span className="text-ink-muted" style={{ fontSize: "13px" }}>{t.fieldCvc}</span>
            <input className={inputCls} inputMode="numeric" placeholder="123" value={cvc} onChange={(e) => setCvc(e.target.value)} />
          </label>
        </div>
      </div>

      {error && (
        <p className="mt-3" style={{ fontSize: "13px", color: "#d70015" }}>
          {t.required}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 flex h-12 w-full items-center justify-center rounded-pill bg-primary text-white active:scale-[0.99]"
        style={{ fontSize: "17px" }}
      >
        {t.pay} · {price}
      </button>
      <button
        type="button"
        onClick={onBack}
        className="mt-2 flex h-10 w-full items-center justify-center text-link"
        style={{ fontSize: "15px" }}
      >
        {t.back2}
      </button>
    </form>
  );
}

function SuccessView({ t, onDone }: { t: T; onDone: () => void }) {
  return (
    <div className="py-4 text-center">
      <div
        className="mx-auto flex items-center justify-center rounded-full bg-primary text-white"
        style={{ width: "56px", height: "56px", fontSize: "28px" }}
        aria-hidden
      >
        ✓
      </div>
      <h2 className="mt-4 text-ink" style={{ fontSize: "21px", fontWeight: 600, letterSpacing: "-0.01em" }}>
        {t.successTitle}
      </h2>
      <p className="mt-2 text-ink-muted" style={{ fontSize: "15px", lineHeight: 1.47 }}>
        {t.successBody}
      </p>
      <button
        type="button"
        onClick={onDone}
        className="mt-6 flex h-12 w-full items-center justify-center rounded-pill bg-primary text-white active:scale-[0.99]"
        style={{ fontSize: "17px" }}
      >
        {t.done}
      </button>
    </div>
  );
}
