// ─────────────────────────────────────────────────────────────────────────
// 유적 데이터 (slug → 콘텐츠 매핑)
//
// 우리는 "중간다리"일 뿐 — AR 렌더링/음성가이드/탐색은 전부 원 회사의
// AR 시스템(arSystemUrl)에서 처리한다. 여기에는 런처 진입 화면에 필요한
// 최소 메타데이터만 둔다.
//
// QR 1개 = 유적 1개. 교사가 수업 단위로 QR을 교체한다.
// 실서비스에서는 이 표를 원 회사가 제공하는 콘텐츠 목록/URL로 교체하거나,
// Supabase 등 DB에서 불러오면 된다.
// ─────────────────────────────────────────────────────────────────────────

export type Locale = "ko" | "en";

export interface SiteContent {
  title: string;
  subtitle: string;
  loadingText: string;
}

export interface Site {
  slug: string;
  backgroundImage: string;
  /** 원 회사 AR 시스템 진입 URL — "시작하기" 탭 시 이곳으로 리다이렉트 */
  arSystemUrl: string;
  ko: SiteContent;
  en: SiteContent;
}

export const SITES: Record<string, Site> = {
  colosseum: {
    slug: "colosseum",
    backgroundImage: "https://picsum.photos/seed/colosseum-ancient/800/1600",
    arSystemUrl: "https://demo.ancient-world.eu/colosseum",
    ko: {
      title: "고대 로마 콜로세움",
      subtitle: "서기 80년",
      loadingText: "잠시만요, 2000년 전으로 이동 중…",
    },
    en: {
      title: "The Roman Colosseum",
      subtitle: "80 AD",
      loadingText: "Hold on — traveling back 2,000 years…",
    },
  },
  parthenon: {
    slug: "parthenon",
    backgroundImage: "https://picsum.photos/seed/parthenon-ancient/800/1600",
    arSystemUrl: "https://demo.ancient-world.eu/parthenon",
    ko: {
      title: "파르테논 신전",
      subtitle: "서기전 438년",
      loadingText: "잠시만요, 2500년 전으로 이동 중…",
    },
    en: {
      title: "The Parthenon",
      subtitle: "438 BC",
      loadingText: "Hold on — traveling back 2,500 years…",
    },
  },
  pyramid: {
    slug: "pyramid",
    backgroundImage: "https://picsum.photos/seed/pyramid-ancient/800/1600",
    arSystemUrl: "https://demo.ancient-world.eu/pyramid",
    ko: {
      title: "기자 대피라미드",
      subtitle: "서기전 2560년",
      loadingText: "잠시만요, 4500년 전으로 이동 중…",
    },
    en: {
      title: "The Great Pyramid of Giza",
      subtitle: "2560 BC",
      loadingText: "Hold on — traveling back 4,500 years…",
    },
  },
  "forum-romanum": {
    slug: "forum-romanum",
    backgroundImage: "https://picsum.photos/seed/forum-romanum-ancient/800/1600",
    arSystemUrl: "https://demo.ancient-world.eu/forum-romanum",
    ko: {
      title: "로마 포룸",
      subtitle: "서기전 500년경",
      loadingText: "잠시만요, 고대 로마 광장으로 이동 중…",
    },
    en: {
      title: "The Roman Forum",
      subtitle: "c. 500 BC",
      loadingText: "Hold on — entering the heart of ancient Rome…",
    },
  },
  pompeii: {
    slug: "pompeii",
    backgroundImage: "https://picsum.photos/seed/pompeii-ancient/800/1600",
    arSystemUrl: "https://demo.ancient-world.eu/pompeii",
    ko: {
      title: "폼페이",
      subtitle: "서기 79년",
      loadingText: "잠시만요, 화산 폭발 직전의 도시로 이동 중…",
    },
    en: {
      title: "Pompeii",
      subtitle: "79 AD",
      loadingText: "Hold on — entering the city before the eruption…",
    },
  },
  karnak: {
    slug: "karnak",
    backgroundImage: "https://picsum.photos/seed/karnak-ancient/800/1600",
    arSystemUrl: "https://demo.ancient-world.eu/karnak",
    ko: {
      title: "카르나크 신전",
      subtitle: "서기전 2000년경",
      loadingText: "잠시만요, 고대 이집트로 이동 중…",
    },
    en: {
      title: "Karnak Temple",
      subtitle: "c. 2000 BC",
      loadingText: "Hold on — traveling to ancient Egypt…",
    },
  },
};

export function getSite(slug: string): Site | undefined {
  return SITES[slug];
}

export function getSiteContent(site: Site, locale: Locale): SiteContent {
  return locale === "en" ? site.en : site.ko;
}

export function allSites(): Site[] {
  return Object.values(SITES);
}
