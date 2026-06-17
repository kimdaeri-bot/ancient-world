import SiteNav from "@/components/site-nav";
import RegionCatalog from "@/components/region-catalog";
import { allSites } from "@/lib/sites";
import { resolveLocale, UI } from "@/lib/i18n";

interface HomeProps {
  searchParams: { lang?: string };
}

export default function Home({ searchParams }: HomeProps) {
  const locale = resolveLocale(searchParams.lang);
  const t = UI[locale];

  return (
    <>
      <SiteNav locale={locale} path="/" />

      <main className="bg-canvas">
        {/* 히어로 */}
        <section className="mx-auto max-w-content px-5 pb-12 pt-16 sm:px-6 sm:pt-24">
          <p
            className="animate-fade-up text-ink-faint"
            style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em" }}
          >
            {t.kicker}
          </p>
          <h1
            className="animate-fade-up mt-3 whitespace-pre-line text-ink"
            style={{ fontSize: "clamp(40px, 8vw, 56px)", fontWeight: 600, lineHeight: 1.07, letterSpacing: "-0.015em" }}
          >
            {t.heroTitle}
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-[34rem] text-ink-muted"
            style={{ fontSize: "21px", fontWeight: 400, lineHeight: 1.38, letterSpacing: "-0.01em" }}
          >
            {t.heroSubtitle}
          </p>
        </section>

        <RegionCatalog sites={allSites()} locale={locale} />
      </main>
    </>
  );
}
