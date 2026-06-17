"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import type { Locale, Site } from "@/lib/sites";
import { getSiteContent, type SiteContent } from "@/lib/sites";
import { UI } from "@/lib/i18n";

interface QrCardProps {
  site: Site;
  locale: Locale;
  /** 절대 URL 생성을 위한 origin (런타임에 결정) */
  origin: string;
}

export default function QrCard({ site, locale, origin }: QrCardProps) {
  const [copied, setCopied] = useState(false);
  const content: SiteContent = getSiteContent(site, locale);
  const t = UI[locale];

  const path = locale === "en" ? `/${site.slug}?lang=en` : `/${site.slug}`;
  const url = `${origin}${path}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* 클립보드 미지원 무시 */
    }
  };

  return (
    <div className="flex flex-col items-center rounded-2xl bg-white p-5 text-center text-black">
      <div className="rounded-xl bg-white p-2">
        <QRCodeSVG value={url} size={160} level="M" marginSize={0} />
      </div>
      <h2 className="mt-4 font-bold" style={{ fontSize: "18px", letterSpacing: "-0.01em" }}>
        {content.title}
      </h2>
      <p className="mt-1" style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)" }}>
        {content.subtitle}
      </p>

      <div className="mt-4 flex w-full gap-2">
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 flex-1 items-center justify-center rounded-pill bg-black text-white"
          style={{ fontSize: "14px", fontWeight: 600 }}
        >
          {t.openLauncher}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="flex h-10 flex-1 items-center justify-center rounded-pill border border-black/15 bg-white text-black transition-opacity active:opacity-70"
          style={{ fontSize: "14px", fontWeight: 600 }}
        >
          {copied ? t.copied : t.copyLink}
        </button>
      </div>
    </div>
  );
}
