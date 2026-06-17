import Link from "next/link";
import type { Locale } from "@/lib/sites";
import { UI, withLang } from "@/lib/i18n";

interface SiteNavProps {
  locale: Locale;
  /** lang 토글이 머무를 현재 경로 (쿼리 제외) */
  path: string;
}

// Apple 글로벌 내비 — translucent fog + blur, 높이 48px
export default function SiteNav({ locale, path }: SiteNavProps) {
  const t = UI[locale];
  return (
    <header className="glass sticky top-0 z-50">
      <nav className="mx-auto flex h-12 max-w-content items-center justify-between px-5 sm:px-6">
        <Link
          href={withLang("/", locale)}
          className="font-semibold text-ink"
          style={{ fontSize: "17px", letterSpacing: "-0.022em" }}
        >
          {t.appName}
        </Link>

        <div className="flex items-center gap-1" style={{ fontSize: "13px" }}>
          <Link
            href={path === "/" ? "/" : path}
            aria-current={locale === "ko" ? "true" : undefined}
            className={locale === "ko" ? "font-semibold text-ink" : "text-ink-faint"}
          >
            KO
          </Link>
          <span aria-hidden className="text-ink-faint">
            ·
          </span>
          <Link
            href={withLang(path, "en")}
            aria-current={locale === "en" ? "true" : undefined}
            className={locale === "en" ? "font-semibold text-ink" : "text-ink-faint"}
          >
            EN
          </Link>
        </div>
      </nav>
    </header>
  );
}
