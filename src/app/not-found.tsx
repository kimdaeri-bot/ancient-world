import Link from "next/link";
import { UI } from "@/lib/i18n";

export default function NotFound() {
  const t = UI.ko;
  return (
    <main className="launcher-root flex flex-col items-center justify-center bg-canvas px-6 text-center text-ink">
      <h1 className="m-0 font-bold" style={{ fontSize: "24px", letterSpacing: "-0.02em" }}>
        {t.notFoundTitle}
      </h1>
      <p className="mt-3 text-ink-muted" style={{ fontSize: "16px", lineHeight: 1.4 }}>
        {t.notFoundBody}
      </p>
      <Link
        href="/teacher"
        className="mt-8 flex items-center justify-center rounded-pill bg-ink text-canvas shadow-cta"
        style={{ height: "52px", padding: "0 28px", fontSize: "17px", fontWeight: 600 }}
      >
        {t.teacherTitle}
      </Link>
    </main>
  );
}
