"use client";

import { useCallback, useState } from "react";
import type { Locale, Site, SiteContent } from "@/lib/sites";
import { UI } from "@/lib/i18n";

interface LauncherProps {
  site: Site;
  content: SiteContent;
  locale: Locale;
}

// "시작하기" 탭 → "이동 중…" + 스피너 → 1.5s 후 원 회사 AR 시스템으로 리다이렉트
const REDIRECT_DELAY_MS = 1500;

export default function Launcher({ site, content, locale }: LauncherProps) {
  const [moving, setMoving] = useState(false);
  const t = UI[locale];

  const handleStart = useCallback(() => {
    if (moving) return;
    setMoving(true);

    // 파일럿 효과 측정용 진입 로그 (env 미설정 시 서버에서 무시됨, 실패해도 무관)
    try {
      const payload = JSON.stringify({ slug: site.slug, locale });
      const blob = new Blob([payload], { type: "application/json" });
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/launch", blob);
      } else {
        void fetch("/api/launch", { method: "POST", body: payload, keepalive: true });
      }
    } catch {
      /* 로깅 실패는 무시 */
    }

    window.setTimeout(() => {
      window.location.href = site.arSystemUrl;
    }, REDIRECT_DELAY_MS);
  }, [moving, site.slug, site.arSystemUrl, locale]);

  return (
    <main className="launcher-root bg-canvas text-ink">
      {/* 1. 배경 미디어 레이어 */}
      <div
        className="absolute inset-0 z-0 animate-fade-in bg-canvas bg-cover bg-center"
        style={{ backgroundImage: `url(${site.backgroundImage})` }}
        role="img"
        aria-label={content.title}
      />

      {/* 2. 그라데이션 오버레이 */}
      <div
        className="absolute inset-x-0 bottom-0 z-[1]"
        style={{
          height: "50vh",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* 3. 콘텐츠 블록 */}
      <div className="safe-bottom absolute inset-x-0 bottom-0 z-[2] px-5">
        <h1
          className="will-fade animate-fade-up delay-title m-0 font-bold"
          style={{ fontSize: "32px", letterSpacing: "-0.02em", lineHeight: 1.2 }}
        >
          {content.title}
        </h1>

        <p
          className="will-fade animate-fade-up delay-sub mt-2 mb-6 font-normal text-ink-muted"
          style={{ fontSize: "16px", lineHeight: 1.4 }}
        >
          {content.subtitle}
        </p>

        {/* 이동 중 안내 문구 */}
        {moving && (
          <p
            className="animate-fade-in mb-3 font-normal text-ink-faint"
            style={{ fontSize: "14px" }}
            aria-live="polite"
          >
            {content.loadingText}
          </p>
        )}

        {/* 4. CTA 버튼 */}
        <button
          type="button"
          onClick={handleStart}
          disabled={moving}
          aria-busy={moving}
          className="will-fade animate-fade-up delay-cta flex w-full items-center justify-center gap-2 rounded-pill border-none bg-ink text-canvas shadow-cta transition-transform duration-150 active:scale-[0.98] active:opacity-90 disabled:active:scale-100"
          style={{ height: "56px", fontSize: "17px", fontWeight: 600 }}
        >
          {moving ? (
            <>
              <Spinner />
              <span>{t.moving}</span>
            </>
          ) : (
            <span>{t.start}</span>
          )}
        </button>
      </div>
    </main>
  );
}

// 5. 로딩 스피너 — 흰 버튼 위에 표시되므로 어두운 톤
function Spinner() {
  return (
    <span
      className="inline-block animate-spin rounded-full"
      style={{
        width: "20px",
        height: "20px",
        border: "2px solid rgba(0,0,0,0.2)",
        borderTopColor: "#000000",
      }}
      aria-hidden="true"
    />
  );
}
