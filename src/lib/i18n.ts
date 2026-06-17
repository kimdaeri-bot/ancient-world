import type { Locale } from "./sites";

export const LOCALES: Locale[] = ["ko", "en"];
export const DEFAULT_LOCALE: Locale = "ko";

/** ?lang=en 같은 검색 파라미터에서 로케일을 안전하게 추출 */
export function resolveLocale(input?: string | string[]): Locale {
  const raw = Array.isArray(input) ? input[0] : input;
  return raw === "en" ? "en" : DEFAULT_LOCALE;
}

/** 현재 로케일을 유지한 채 경로에 ?lang= 을 붙인다 (ko는 기본이라 생략) */
export function withLang(path: string, locale: Locale): string {
  if (locale !== "en") return path;
  return `${path}${path.includes("?") ? "&" : "?"}lang=en`;
}

type UIStrings = {
  appName: string;
  kicker: string;
  heroTitle: string;
  heroSubtitle: string;
  allRegions: string;
  viewDetail: string;
  exploreRegion: string;
  back: string;
  nearbyTitle: string;
  notFoundTitle: string;
  notFoundBody: string;
  backHome: string;
};

export const UI: Record<Locale, UIStrings> = {
  ko: {
    appName: "Ancient World",
    kicker: "ANCIENT WORLD",
    heroTitle: "고대 세계를,\n눈앞에서.",
    heroSubtitle:
      "역사 속으로 사라진 고대 유적을 있는 그대로 다시 만나보세요. 지역을 골라 둘러봅니다.",
    allRegions: "전체",
    viewDetail: "자세히 보기",
    exploreRegion: "지역별로 둘러보기",
    back: "둘러보기로",
    nearbyTitle: "같은 지역의 다른 유적",
    notFoundTitle: "콘텐츠를 찾을 수 없어요",
    notFoundBody: "주소를 다시 확인해 주세요.",
    backHome: "홈으로",
  },
  en: {
    appName: "Ancient World",
    kicker: "ANCIENT WORLD",
    heroTitle: "The ancient world,\nbefore your eyes.",
    heroSubtitle:
      "Meet the lost monuments of antiquity as they once stood. Choose a region and explore.",
    allRegions: "All",
    viewDetail: "Learn more",
    exploreRegion: "Explore by region",
    back: "Back to explore",
    nearbyTitle: "More in this region",
    notFoundTitle: "Content not found",
    notFoundBody: "Please check the address and try again.",
    backHome: "Back home",
  },
};
