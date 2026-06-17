import { headers } from "next/headers";
import QrCard from "@/components/qr-card";
import { allSites } from "@/lib/sites";
import { resolveLocale, UI } from "@/lib/i18n";

interface PageProps {
  searchParams: { lang?: string };
}

export const metadata = {
  title: "수업용 QR · Ancient World",
};

function getOrigin(): string {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export default function TeacherPage({ searchParams }: PageProps) {
  const locale = resolveLocale(searchParams.lang);
  const t = UI[locale];
  const origin = getOrigin();
  const sites = allSites();

  return (
    <main className="mx-auto max-w-[900px] px-6 py-12 text-ink">
      <h1 className="m-0 font-bold" style={{ fontSize: "28px", letterSpacing: "-0.02em" }}>
        {t.teacherTitle}
      </h1>
      <p className="mt-3 max-w-[640px] text-ink-muted" style={{ fontSize: "16px", lineHeight: 1.5 }}>
        {t.teacherIntro}
      </p>
      <p className="mt-2 text-ink-faint" style={{ fontSize: "14px" }}>
        {t.teacherHowto}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((site) => (
          <QrCard key={site.slug} site={site} locale={locale} origin={origin} />
        ))}
      </div>
    </main>
  );
}
