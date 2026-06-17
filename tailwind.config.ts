import type { Config } from "tailwindcss";

// Ancient World — Apple HIG 기반 디자인 토큰
// 이분법 캔버스(라이트그레이 #f5f5f7 ↔ 블랙 #000000), 단일 액센트 Apple Blue.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f5f7", // 기본 라이트 캔버스 (살짝 푸른 회색)
        surface: "#ffffff", // 카드/표면
        brand: "#000000", // 다크 섹션 캔버스
        "surface-dark": "#1d1d1f", // 다크 표면
        ink: "#1d1d1f", // 본문/제목 (라이트 위)
        "ink-muted": "rgba(0,0,0,0.8)", // 보조 텍스트
        "ink-faint": "rgba(0,0,0,0.56)", // 3차 텍스트/캡션
        primary: "#0071e3", // 단일 액센트 — 인터랙티브 요소 전용
        link: "#0066cc", // 텍스트 링크 (라이트 위)
        "link-dark": "#2997ff", // 텍스트 링크 (다크 위)
      },
      fontFamily: {
        // 라틴/숫자는 SF Pro, 한글은 Pretendard로 자연 폴백
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Pretendard Variable",
          "Pretendard",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        card: "28px",
        pill: "980px",
      },
      boxShadow: {
        // Apple 시그니처 — 부드럽고 넓게 퍼지는 단일 그림자
        card: "rgba(0,0,0,0.22) 3px 5px 30px 0px",
      },
      maxWidth: {
        content: "980px",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease forwards",
        "fade-up": "fade-up 0.5s cubic-bezier(0.2,0.6,0.25,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
