import Link from "next/link";

// 루트(/)는 교사·관리자용 간단한 소개 + 수업용 QR 페이지로의 진입점.
// 학생은 이 페이지를 거치지 않고 교사가 띄운 QR로 /[slug] 런처에 바로 진입한다.
const SELLING_POINTS = [
  "기기 구매 0원 — 학생 폰으로 바로 실행",
  "교사가 통제하는 45분 수업 도구",
  "앱 설치 불필요 — QR 스캔 즉시 실행, 30명 동시 접속",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-[640px] flex-col justify-center px-6 py-16 text-ink">
      <p className="text-ink-muted" style={{ fontSize: "14px", letterSpacing: "0.04em" }}>
        ANCIENT WORLD · 세계사 수업 도구
      </p>
      <h1
        className="mt-3 font-bold"
        style={{ fontSize: "32px", letterSpacing: "-0.02em", lineHeight: 1.2 }}
      >
        고대 유적을 교실로.
        <br />
        QR 하나로 시작하는 AR 답사.
      </h1>
      <p className="mt-4 text-ink-muted" style={{ fontSize: "16px", lineHeight: 1.5 }}>
        AR 복원·음성가이드는 검증된 시스템 그대로. 교사가 수업 단위로 QR을 띄우면
        학생들이 폰으로 스캔해 바로 시작합니다.
      </p>

      <ul className="mt-8 flex flex-col gap-3">
        {SELLING_POINTS.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-ink"
            style={{ fontSize: "16px", lineHeight: 1.4 }}
          >
            <span
              aria-hidden
              className="mt-[7px] inline-block shrink-0 rounded-full bg-ink"
              style={{ width: "6px", height: "6px" }}
            />
            {point}
          </li>
        ))}
      </ul>

      <Link
        href="/teacher"
        className="mt-10 inline-flex h-14 items-center justify-center rounded-pill bg-ink text-canvas shadow-cta"
        style={{ fontSize: "17px", fontWeight: 600 }}
      >
        수업용 QR 보기
      </Link>
    </main>
  );
}
