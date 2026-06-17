import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ancient World — 교사 주도 AR 세계사 수업 도구",
  description:
    "QR 스캔 즉시 실행. 앱 설치 없이 학생 폰으로 고대 유적을 AR로 답사하는 교실 수업 도구.",
};

// viewport-fit=cover: iPhone notch / 홈 인디케이터 safe-area 대응
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
