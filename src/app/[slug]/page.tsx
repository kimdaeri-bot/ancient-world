import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/site-nav";
import SiteCard from "@/components/site-card";
import {
  allSites,
  getSite,
  getSiteContent,
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
  const nearby = sitesInRegion(site.region, site.slug);

  return (
    <>
      <SiteNav locale={locale} path={`/${site.slug}`} />

      <main className="bg-canvas">
        {/* 풀블리드 히어로 이미지 + 제목 오버레이 */}
        <section className="relative h-[58vh] min-h-[360px] w-full overflow-hidden">
          <Image
            src={site.backgroundImage}
            alt={c.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
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

        {/* 본문 */}
        <article className="mx-auto max-w-[720px] px-5 py-12 sm:px-6 sm:py-16">
          <p
            className="text-ink"
            style={{ fontSize: "21px", fontWeight: 400, lineHeight: 1.52, letterSpacing: "-0.01em" }}
          >
            {c.description}
          </p>

          <Link
            href={withLang("/", locale)}
            className="mt-10 inline-flex items-center gap-1 text-link"
            style={{ fontSize: "17px", letterSpacing: "-0.016em" }}
          >
            <span aria-hidden>‹</span>
            {t.back}
          </Link>
        </article>

        {/* 같은 지역의 다른 유적 */}
        {nearby.length > 0 && (
          <section className="border-t border-black/[0.08]">
            <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
              <h2
                className="text-ink"
                style={{ fontSize: "24px", fontWeight: 600, lineHeight: 1.16, letterSpacing: "-0.01em" }}
              >
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
