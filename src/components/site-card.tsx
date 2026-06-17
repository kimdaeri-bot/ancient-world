import Image from "next/image";
import Link from "next/link";
import type { Locale, Site } from "@/lib/sites";
import { getSiteContent, type Region } from "@/lib/sites";
import { UI, withLang } from "@/lib/i18n";

interface SiteCardProps {
  site: Site;
  locale: Locale;
  /** 같은 지역 더보기 등에 쓰는 컴팩트 변형 */
  compact?: boolean;
}

const REGION_TAG: Record<Region, Record<Locale, string>> = {
  italy: { ko: "이탈리아", en: "Italy" },
  greece: { ko: "그리스", en: "Greece" },
  egypt: { ko: "이집트", en: "Egypt" },
};

// Apple 화이트 피처 카드 — 테두리·그림자 없이 색 대비로 떠오른다.
// 이미지 위에서만 부드러운 그림자, 카드 hover 시 미세 상승.
export default function SiteCard({ site, locale, compact = false }: SiteCardProps) {
  const c = getSiteContent(site, locale);
  const t = UI[locale];

  return (
    <Link
      href={withLang(`/${site.slug}`, locale)}
      className="group block overflow-hidden rounded-card bg-surface transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-card"
    >
      <div className={`relative w-full ${compact ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={site.backgroundImage}
          alt={c.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className={compact ? "px-5 py-4" : "px-6 py-5"}>
        <p
          className="text-ink-faint"
          style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}
        >
          {REGION_TAG[site.region][locale]}
        </p>
        <h3
          className="mt-1 text-ink"
          style={{
            fontSize: compact ? "20px" : "24px",
            fontWeight: 600,
            lineHeight: 1.14,
            letterSpacing: "-0.01em",
          }}
        >
          {c.title}
        </h3>
        <p className="mt-1 text-ink-muted" style={{ fontSize: "14px", lineHeight: 1.29 }}>
          {c.period}
        </p>
        {!compact && (
          <span
            className="mt-3 inline-flex items-center gap-1 text-link"
            style={{ fontSize: "14px", letterSpacing: "-0.016em" }}
          >
            {t.viewDetail}
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
              ›
            </span>
          </span>
        )}
      </div>
    </Link>
  );
}
