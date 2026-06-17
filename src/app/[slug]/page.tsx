import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Launcher from "@/components/launcher";
import { allSites, getSite, getSiteContent } from "@/lib/sites";
import { resolveLocale } from "@/lib/i18n";

interface PageProps {
  params: { slug: string };
  searchParams: { lang?: string };
}

// 알려진 유적은 미리 정적 생성 → 학생 30명 동시 접속에도 즉시 로딩
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
    description: c.subtitle,
  };
}

export default function LauncherPage({ params, searchParams }: PageProps) {
  const site = getSite(params.slug);
  if (!site) notFound();

  const locale = resolveLocale(searchParams.lang);
  const content = getSiteContent(site, locale);

  return <Launcher site={site} content={content} locale={locale} />;
}
