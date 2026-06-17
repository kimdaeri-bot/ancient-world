import Link from "next/link";
import { UI } from "@/lib/i18n";

export default function NotFound() {
  const t = UI.ko;
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-canvas px-6 text-center text-ink">
      <h1 className="m-0" style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.015em" }}>
        {t.notFoundTitle}
      </h1>
      <p className="mt-3 text-ink-muted" style={{ fontSize: "17px", lineHeight: 1.47 }}>
        {t.notFoundBody}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-pill bg-primary text-white"
        style={{ height: "44px", padding: "0 22px", fontSize: "17px", fontWeight: 400 }}
      >
        {t.backHome}
      </Link>
    </main>
  );
}
