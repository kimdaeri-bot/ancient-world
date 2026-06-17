import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/site-nav";
import SiteCard from "@/components/site-card";
import PurchaseFlow from "@/components/purchase-flow";
import {
  allSites,
  getSite,
  getSiteContent,
  getDurationMin,
  REGION_LABEL,
  sitesInRegion,
} from "@/lib/sites";
import { resolveLocale, UI, withLang } from "@/lib/i18n";

interface PageProps {
  params: { slug: string };
  searchParams: { lang?: string };
}

export function generateStaticParams() {
  return allSites().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params, searchParams }: PageProps): Metadata {
  const site = getSite(params.slug);
  if (!site) return { title: "Ancient World" };
  const locale = resolveLocale(searchParams.lang);
  const c = getSiteContent(site, locale);
  return {
    title: `${c.title} · Ancient World`,
    description: c.description,
  };
}

export default function SitePage({ params, searchParams }: PageProps) {
  const site = getSite(params.slug);
  if (!site) notFound();

  const locale = resolveLocale(searchParams.lang);
  const c = getSiteContent(site, locale);
  const t = UI[locale];
  const duration = getDurationMin(site.slug);
  const nearby = sitesInRegion(site.region, site.slug);

  const stats = [
    { label: t.durationLabel, value: `${duration}${t.minutesUnit}` },
    { label: t.formatLabel, value: t.formatValue },
    { label: t.narrationLabel, value: t.narrationValue },
  ];

  return (
    <>
      <SiteNav locale={locale} path={`/${site.slug}`} />

      <main className="bg-canvas">
        {/* 풀블리드 히어로 이미지 + 제목 오버레이 */}
        <section className="relative h-[58vh] min-h-[360px] w-full overflow-hidden">
          <Image src={site.backgroundImage} alt={c.title} fill priority sizes="100vw" className="object-cover" />
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: "70%",
              background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-content px-5 pb-8 sm:px-6">
              <p
                className="text-white/80"
                style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                {REGION_LABEL[site.region][locale]}
              </p>
              <h1
                className="mt-2 text-white"
                style={{ fontSize: "clamp(34px, 7vw, 48px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.015em" }}
              >
                {c.title}
              </h1>
              <p className="mt-2 text-white/80" style={{ fontSize: "17px", letterSpacing: "-0.01em" }}>
                {c.period}
              </p>
            </div>
          </div>
        </section>

        {/* 본문 + 구매 (2열: 좌 콘텐츠 / 우 구매 카드) */}
        <div className="mx-auto max-w-content gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid lg:grid-cols-[1fr_360px]">
          <article>
            {/* 메타 스탯 행 */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 border-b border-black/[0.08] pb-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-ink-faint" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {s.label}
                  </p>
                  <p className="mt-1 text-ink" style={{ fontSize: "19px", fontWeight: 600, letterSpacing: "-0.01em" }}>
                    {s.value}
                  </p>
                </div>
              ))}
            </div>

            {/* 소개 */}
            <h2 className="mt-8 text-ink" style={{ fontSize: "24px", fontWeight: 600, letterSpacing: "-0.01em" }}>
              {t.overviewTitle}
            </h2>
            <p className="mt-3 text-ink" style={{ fontSize: "19px", fontWeight: 400, lineHeight: 1.52, letterSpacing: "-0.01em" }}>
              {c.description}
            </p>

            {/* 포함 사항 */}
            <h2 className="mt-10 text-ink" style={{ fontSize: "24px", fontWeight: 600, letterSpacing: "-0.01em" }}>
              {t.includedTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {t.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink" style={{ fontSize: "17px", lineHeight: 1.4 }}>
                  <span className="mt-0.5 shrink-0 text-primary" style={{ fontSize: "18px", lineHeight: 1.2 }} aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={withLang("/", locale)}
              className="mt-10 inline-flex items-center gap-1 text-link"
              style={{ fontSize: "17px", letterSpacing: "-0.016em" }}
            >
              <span aria-hidden>‹</span>
              {t.back}
            </Link>
          </article>

          {/* 구매 카드 (모바일에선 본문 아래로) */}
          <aside className="mt-10 lg:mt-0">
            <div className="lg:sticky lg:top-20">
              <PurchaseFlow site={site} locale={locale} />
            </div>
          </aside>
        </div>

        {/* 같은 지역의 다른 유적 */}
        {nearby.length > 0 && (
          <section className="border-t border-black/[0.08]">
            <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
              <h2 className="text-ink" style={{ fontSize: "24px", fontWeight: 600, lineHeight: 1.16, letterSpacing: "-0.01em" }}>
                {t.nearbyTitle}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {nearby.map((s) => (
                  <SiteCard key={s.slug} site={s} locale={locale} compact />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
