import type { Config } from "tailwindcss";

// Ancient World Edu — Apple HIG 기반 모노톤(흑/백) 런처 토큰
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 단일 흑백 톤 — 액센트 컬러 없음 (콘텐츠가 주인공)
        canvas: "#000000",
        ink: "#FFFFFF",
        "ink-muted": "rgba(255,255,255,0.6)",
        "ink-faint": "rgba(255,255,255,0.5)",
      },
      fontFamily: {
        // Pretendard 우선, Apple SF Pro / 시스템 폰트 폴백
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        // Apple 시그니처 풀 라운드 알약(pill)
        pill: "980px",
      },
      boxShadow: {
        cta: "0 4px 24px rgba(0,0,0,0.3)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease forwards",
        "fade-up": "fade-up 0.4s ease forwards",
        spin: "spin 0.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
