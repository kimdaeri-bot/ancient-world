// ─────────────────────────────────────────────────────────────────────────
// 유적 콘텐츠 데이터 (slug → 콘텐츠 매핑)
//
// 지역(region)별로 묶어 카탈로그로 둘러본다. 예약/날짜 개념은 없고,
// 순수하게 고대 유적 콘텐츠를 지역별로 탐색·열람하는 용도다.
// 실서비스에서는 이 표를 DB(Supabase 등)나 외부 콘텐츠 API로 교체하면 된다.
// ─────────────────────────────────────────────────────────────────────────

export type Locale = "ko" | "en";

export type Region = "italy" | "greece" | "egypt";

export const REGION_ORDER: Region[] = ["italy", "greece", "egypt"];

export const REGION_LABEL: Record<Region, Record<Locale, string>> = {
  italy: { ko: "이탈리아", en: "Italy" },
  greece: { ko: "그리스", en: "Greece" },
  egypt: { ko: "이집트", en: "Egypt" },
};

export interface SiteContent {
  title: string;
  /** 연대 — 카드/상세의 보조 캡션 */
  period: string;
  /** 상세 페이지 본문 */
  description: string;
}

export interface Site {
  slug: string;
  region: Region;
  backgroundImage: string;
  ko: SiteContent;
  en: SiteContent;
}

export const SITES: Record<string, Site> = {
  colosseum: {
    slug: "colosseum",
    region: "italy",
    backgroundImage: "https://picsum.photos/seed/colosseum-ancient/1200/1600",
    ko: {
      title: "콜로세움",
      period: "서기 80년 · 로마",
      description:
        "로마 제국의 심장부에 세워진 거대한 원형 경기장입니다. 약 5만 명의 관중이 검투사 경기와 맹수 사냥을 지켜보던 곳으로, 정교한 아치 구조와 지하 통로는 고대 로마 공학과 오락 문화의 정점을 보여줍니다.",
    },
    en: {
      title: "The Colosseum",
      period: "80 AD · Rome",
      description:
        "A colossal amphitheatre at the heart of the Roman Empire. Up to 50,000 spectators watched gladiatorial combat and wild beast hunts here. Its intricate arches and underground passages mark the pinnacle of ancient Roman engineering and spectacle.",
    },
  },
  "forum-romanum": {
    slug: "forum-romanum",
    region: "italy",
    backgroundImage: "https://picsum.photos/seed/forum-romanum-ancient/1200/1600",
    ko: {
      title: "로마 포룸",
      period: "서기전 500년경 · 로마",
      description:
        "고대 로마의 정치·종교·상업이 한데 모이던 중심 광장입니다. 원로원과 신전, 개선문이 늘어선 이곳에서 연설과 재판, 행진이 펼쳐졌고, 천 년에 걸친 제국의 역사가 만들어졌습니다.",
    },
    en: {
      title: "The Roman Forum",
      period: "c. 500 BC · Rome",
      description:
        "The civic heart of ancient Rome, where politics, religion, and commerce converged. Lined with the Senate house, temples, and triumphal arches, it hosted speeches, trials, and processions — the stage on which a thousand years of empire unfolded.",
    },
  },
  pompeii: {
    slug: "pompeii",
    region: "italy",
    backgroundImage: "https://picsum.photos/seed/pompeii-ancient/1200/1600",
    ko: {
      title: "폼페이",
      period: "서기 79년 · 나폴리 인근",
      description:
        "서기 79년 베수비오 화산의 폭발로 화산재 아래 묻힌 로마 도시입니다. 거리와 주택, 상점과 벽화가 그 순간 그대로 보존되어, 2천 년 전 고대 로마인의 일상을 가장 생생하게 전합니다.",
    },
    en: {
      title: "Pompeii",
      period: "79 AD · near Naples",
      description:
        "A Roman city buried under volcanic ash by the eruption of Vesuvius in 79 AD. Its streets, houses, shops, and frescoes survive frozen in that moment, offering the most vivid window into the daily life of ancient Romans.",
    },
  },
  parthenon: {
    slug: "parthenon",
    region: "greece",
    backgroundImage: "https://picsum.photos/seed/parthenon-ancient/1200/1600",
    ko: {
      title: "파르테논 신전",
      period: "서기전 438년 · 아테네",
      description:
        "아테네 아크로폴리스 정상에 세워진 여신 아테나를 위한 신전입니다. 완벽한 비례의 도리아식 기둥과 정교한 부조 장식은 고전기 그리스 예술의 완성형이자 민주주의 도시국가의 자부심을 상징합니다.",
    },
    en: {
      title: "The Parthenon",
      period: "438 BC · Athens",
      description:
        "A temple to the goddess Athena crowning the Athenian Acropolis. Its perfectly proportioned Doric columns and refined sculptural friezes represent the summit of Classical Greek art and the pride of the democratic city-state.",
    },
  },
  pyramid: {
    slug: "pyramid",
    region: "egypt",
    backgroundImage: "https://picsum.photos/seed/pyramid-ancient/1200/1600",
    ko: {
      title: "기자 대피라미드",
      period: "서기전 2560년경 · 기자",
      description:
        "약 4,500년 전 파라오 쿠푸를 위해 세워진 기자의 대피라미드입니다. 146미터 높이로 수천 년간 인류가 만든 가장 높은 건축물이었으며, 정밀하게 쌓아 올린 수백만 개의 석재는 고대 이집트 문명의 위용을 보여줍니다.",
    },
    en: {
      title: "The Great Pyramid of Giza",
      period: "c. 2560 BC · Giza",
      description:
        "Built some 4,500 years ago for the pharaoh Khufu, the Great Pyramid of Giza rose 146 metres — the tallest structure on Earth for millennia. Its millions of precisely fitted stone blocks stand as a monument to the might of ancient Egypt.",
    },
  },
  karnak: {
    slug: "karnak",
    region: "egypt",
    backgroundImage: "https://picsum.photos/seed/karnak-ancient/1200/1600",
    ko: {
      title: "카르나크 신전",
      period: "서기전 2000년경 · 테베",
      description:
        "고대 이집트 최대의 신전 복합단지로, 테베(현재의 룩소르)에 자리합니다. 거대한 기둥 134개가 늘어선 대열주실은 2천 년에 걸쳐 여러 파라오가 증축한 신앙의 중심지였습니다.",
    },
    en: {
      title: "Karnak Temple",
      period: "c. 2000 BC · Thebes",
      description:
        "The largest temple complex of ancient Egypt, at Thebes (modern Luxor). Its great hypostyle hall of 134 towering columns was a center of worship expanded by successive pharaohs over two thousand years.",
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

/** 같은 지역의 다른 유적들 (자기 자신 제외) */
export function sitesInRegion(region: Region, exclude?: string): Site[] {
  return allSites().filter((s) => s.region === region && s.slug !== exclude);
}
