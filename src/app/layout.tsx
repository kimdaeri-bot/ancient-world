import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ancient World — 고대 유적을 지역별로 둘러보기",
  description:
    "역사 속으로 사라진 고대 유적을 있는 그대로. 이탈리아·그리스·이집트의 콜로세움, 파르테논, 피라미드 등을 지역별로 둘러보는 콘텐츠 가이드.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f5f7",
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
