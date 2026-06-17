// ─────────────────────────────────────────────────────────────────────────
// 유적 콘텐츠 데이터 (slug → 콘텐츠 매핑)
//
// 지역(region)별로 묶어 카탈로그로 둘러본다. 예약/날짜 개념은 없고,
// 순수하게 고대 유적 콘텐츠를 지역별로 탐색·열람하는 용도다.
// 콘텐츠/이미지 출처: Lithodomos "Ancient World" 가이드 (gaia.lithodomos.com).
// ─────────────────────────────────────────────────────────────────────────

export type Locale = "ko" | "en";

export type Region =
  | "greece"
  | "italy"
  | "iberia"
  | "france"
  | "croatia"
  | "middle-east"
  | "britain"
  | "turkey"
  | "australia";

export const REGION_ORDER: Region[] = [
  "greece",
  "italy",
  "iberia",
  "france",
  "croatia",
  "middle-east",
  "britain",
  "turkey",
  "australia",
];

export const REGION_LABEL: Record<Region, Record<Locale, string>> = {
  greece: { ko: "그리스", en: "Greece" },
  italy: { ko: "이탈리아", en: "Italy" },
  iberia: { ko: "이베리아", en: "Iberia" },
  france: { ko: "프랑스", en: "France" },
  croatia: { ko: "크로아티아", en: "Croatia" },
  "middle-east": { ko: "중동", en: "Middle East" },
  britain: { ko: "영국", en: "United Kingdom" },
  turkey: { ko: "튀르키예", en: "Türkiye" },
  australia: { ko: "호주", en: "Australia" },
};

export interface SiteContent {
  title: string;
  /** 위치·시대 보조 캡션 */
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

const G = "https://gaia.lithodomos.com";

export const SITES: Record<string, Site> = {
  athens: {
    slug: "athens",
    region: "greece",
    backgroundImage: `${G}/b2ebcf565b14b488b769a516dbccb604.jpg`,
    ko: {
      title: "고대 아테네",
      period: "그리스 · 고전기 아테네",
      description:
        "민주주의와 철학이 태어난 고전기 그리스의 중심 도시입니다. 아크로폴리스와 아고라를 중심으로 서양 문명의 토대가 형성되었습니다.",
    },
    en: {
      title: "Ancient Athens",
      period: "Greece · Classical Athens",
      description:
        "The heart of Classical Greece, where democracy and philosophy were born. Around the Acropolis and the Agora, the foundations of Western civilization took shape.",
    },
  },
  corinth: {
    slug: "corinth",
    region: "greece",
    backgroundImage: `${G}/e720eb9369b2d8777e914ead18e28ae1.jpg`,
    ko: {
      title: "고대 코린토스",
      period: "그리스 · 교역 도시",
      description:
        "두 바다를 잇는 길목에 자리한 부유한 교역 도시입니다. 아폴론 신전과 거대한 시장이 도시의 번영을 증언합니다.",
    },
    en: {
      title: "Ancient Corinth",
      period: "Greece · the trading city",
      description:
        "A wealthy trading city set on the isthmus between two seas. The Temple of Apollo and its great marketplace attest to its prosperity.",
    },
  },
  delphi: {
    slug: "delphi",
    region: "greece",
    backgroundImage: `${G}/a4b514a52c06b63fc693b5f396662c10.jpg`,
    ko: {
      title: "고대 델포이",
      period: "그리스 · 신탁의 성소",
      description:
        "고대 그리스인들이 세계의 중심으로 여긴 신탁의 성소입니다. 아폴론 신전에서 내려진 예언이 도시국가들의 운명을 좌우했습니다.",
    },
    en: {
      title: "Ancient Delphi",
      period: "Greece · the sacred oracle",
      description:
        "The oracular sanctuary the Greeks considered the center of the world. Prophecies delivered at the Temple of Apollo shaped the fate of city-states.",
    },
  },
  epidauros: {
    slug: "epidauros",
    region: "greece",
    backgroundImage: `${G}/3dfd4751f50c395a556b2e3d11062ea5.jpg`,
    ko: {
      title: "고대 에피다우로스",
      period: "그리스 · 치유와 극장의 도시",
      description:
        "치유의 신 아스클레피오스를 모신 성소이자, 완벽한 음향으로 유명한 고대 원형극장이 자리한 곳입니다.",
    },
    en: {
      title: "Ancient Epidauros",
      period: "Greece · healing and theatre",
      description:
        "A sanctuary of Asclepius, god of healing, and home to an ancient theatre renowned for its perfect acoustics.",
    },
  },
  olympia: {
    slug: "olympia",
    region: "greece",
    backgroundImage: `${G}/a5ec10ae2ef46d28eb3cd8c80844d6f7.jpg`,
    ko: {
      title: "고대 올림피아",
      period: "그리스 · 올림픽의 발상지",
      description:
        "고대 올림픽 경기가 열린 제우스의 성소입니다. 거대한 신전과 경기장이 그리스 세계를 하나로 묶은 축제를 증언합니다.",
    },
    en: {
      title: "Ancient Olympia",
      period: "Greece · birthplace of the Games",
      description:
        "The sanctuary of Zeus where the ancient Olympic Games were held. Its great temple and stadium witnessed the festival that united the Greek world.",
    },
  },
  sounion: {
    slug: "sounion",
    region: "greece",
    backgroundImage: `${G}/8fde0c78a5b162e7dda7df543db868ad.jpg`,
    ko: {
      title: "수니온 곶",
      period: "그리스 · 바다 위 포세이돈 신전",
      description:
        "에게해를 내려다보는 곶 위에 세워진 포세이돈 신전입니다. 뱃사람들의 이정표이자 아테네를 지키는 수호 성소였습니다.",
    },
    en: {
      title: "Cape Sounion",
      period: "Greece · Temple of Poseidon",
      description:
        "The Temple of Poseidon perched on a cape above the Aegean. A landmark for sailors and a guardian sanctuary of Athens.",
    },
  },
  rome: {
    slug: "rome",
    region: "italy",
    backgroundImage: `${G}/2d49cc7006f466456312e59a5c66d561.jpg`,
    ko: {
      title: "고대 로마",
      period: "이탈리아 · 제국의 수도",
      description:
        "지중해 세계를 호령한 로마 제국의 수도입니다. 포룸과 신전, 개선문이 늘어선 거리에서 제국의 영광이 펼쳐졌습니다.",
    },
    en: {
      title: "Ancient Rome",
      period: "Italy · Imperial Rome",
      description:
        "Capital of the empire that ruled the Mediterranean world. Along streets lined with forums, temples, and triumphal arches, the glory of Rome unfolded.",
    },
  },
  ostia: {
    slug: "ostia",
    region: "italy",
    backgroundImage: `${G}/e78979a7cdc88a292b914a025236ba68.jpg`,
    ko: {
      title: "고대 오스티아",
      period: "이탈리아 · 로마의 항구",
      description:
        "로마의 관문이었던 항구 도시입니다. 창고와 공동주택, 목욕탕이 잘 보존되어 제국 물류의 심장을 보여줍니다.",
    },
    en: {
      title: "Ancient Ostia",
      period: "Italy · Rome's harbor",
      description:
        "The harbor city that served as Rome's gateway. Its warehouses, apartment blocks, and baths reveal the logistical heart of the empire.",
    },
  },
  pompeii: {
    slug: "pompeii",
    region: "italy",
    backgroundImage: `${G}/88cf58653f953dc6130d88fa9ecb259e.jpg`,
    ko: {
      title: "폼페이",
      period: "이탈리아 · 화산에 묻힌 도시",
      description:
        "서기 79년 베수비오 화산의 폭발로 화산재 아래 묻힌 로마 도시입니다. 거리와 주택, 벽화가 그대로 보존되어 고대인의 일상을 가장 생생하게 전합니다.",
    },
    en: {
      title: "Pompeii",
      period: "Italy · the buried city",
      description:
        "A Roman city buried under volcanic ash by the eruption of Vesuvius in 79 AD. Its streets, houses, and frescoes survive intact, vividly preserving the daily life of antiquity.",
    },
  },
  barcelona: {
    slug: "barcelona",
    region: "iberia",
    backgroundImage: `${G}/027add87878acaf1242c86e2be2e8d79.jpg`,
    ko: {
      title: "고대 바르셀로나",
      period: "스페인 · 로마 도시 바르키노",
      description:
        "로마 식민도시 '바르키노'에서 출발한 바르셀로나입니다. 성벽과 신전의 흔적이 오늘날 도시 곳곳에 남아 있습니다.",
    },
    en: {
      title: "Ancient Barcelona",
      period: "Spain · Roman Barcino",
      description:
        "Barcelona began as the Roman colony of Barcino. Traces of its walls and temple still survive throughout the modern city.",
    },
  },
  valencia: {
    slug: "valencia",
    region: "iberia",
    backgroundImage: `${G}/a9dd513b86e9da412763d282fb651079.jpg`,
    ko: {
      title: "고대 발렌시아",
      period: "스페인 · 로마 도시 발렌티아",
      description:
        "로마인이 건설한 도시 '발렌티아'입니다. 광장과 목욕탕 유적이 지중해 속주의 일상을 보여줍니다.",
    },
    en: {
      title: "Ancient Valencia",
      period: "Spain · Roman Valentia",
      description:
        "The city of Valentia, founded by the Romans. Remains of its forum and baths reveal life in a Mediterranean province.",
    },
  },
  "renaissance-madrid": {
    slug: "renaissance-madrid",
    region: "iberia",
    backgroundImage: `${G}/69b3ed35358f628f6adabb149530079a.jpg`,
    ko: {
      title: "르네상스 마드리드",
      period: "스페인 마드리드 · 르네상스",
      description:
        "르네상스 시대 마드리드의 거리와 건축을 되살린 콘텐츠입니다. 합스부르크 왕가가 다스린 도시를 따라 걷습니다.",
    },
    en: {
      title: "Renaissance Madrid",
      period: "Madrid, Spain · Renaissance",
      description:
        "A journey reviving the streets and architecture of Renaissance-era Madrid, the city of the Habsburg court.",
    },
  },
  lisbon: {
    slug: "lisbon",
    region: "iberia",
    backgroundImage: `${G}/b7a81cdbdc6c733ef577272004259be5.jpg`,
    ko: {
      title: "고대 리스본",
      period: "포르투갈 · 로마 도시 올리시포",
      description:
        "로마 시대 '올리시포'로 번성한 항구 도시입니다. 극장과 신전 유적이 고대 루시타니아의 모습을 전합니다.",
    },
    en: {
      title: "Ancient Lisbon",
      period: "Portugal · Roman Olisipo",
      description:
        "A port city that flourished as the Roman Olisipo. Remains of its theatre and temple recall ancient Lusitania.",
    },
  },
  lyon: {
    slug: "lyon",
    region: "france",
    backgroundImage: `${G}/3f1cda6a99064a4ef437530c89e36f84.jpg`,
    ko: {
      title: "고대 리옹",
      period: "프랑스 · 갈리아의 수도 루그두눔",
      description:
        "로마령 갈리아의 수도였던 '루그두눔'입니다. 언덕 위 극장과 원형경기장이 제국 속주의 위상을 보여줍니다.",
    },
    en: {
      title: "Ancient Lyon",
      period: "France · Roman Lugdunum",
      description:
        "Lugdunum, capital of Roman Gaul. Its hillside theatres and amphitheatre reflect the city's standing as a provincial capital.",
    },
  },
  "maison-carree": {
    slug: "maison-carree",
    region: "france",
    backgroundImage: `${G}/6b4cb4c904ba1648046df97ca99ed3cd.jpg`,
    ko: {
      title: "메종 카레",
      period: "프랑스 님 · 로마 신전",
      description:
        "프랑스 님에 자리한, 가장 잘 보존된 로마 신전입니다. 우아한 코린트식 기둥이 고전 건축의 본보기로 꼽힙니다.",
    },
    en: {
      title: "Maison Carrée",
      period: "Nîmes, France · Roman temple",
      description:
        "In Nîmes, one of the best-preserved of all Roman temples. Its elegant Corinthian columns stand as a model of classical architecture.",
    },
  },
  pula: {
    slug: "pula",
    region: "croatia",
    backgroundImage: `${G}/c60590db7aaa1ff7b018914ea31c1f0e.jpg`,
    ko: {
      title: "고대 풀라",
      period: "크로아티아 · 원형경기장의 도시",
      description:
        "잘 보존된 로마 원형경기장으로 유명한 아드리아해의 항구 도시입니다. 신전과 개선문도 함께 남아 있습니다.",
    },
    en: {
      title: "Ancient Pula",
      period: "Croatia · the amphitheatre city",
      description:
        "An Adriatic port famed for its remarkably preserved Roman amphitheatre, alongside a surviving temple and triumphal arch.",
    },
  },
  split: {
    slug: "split",
    region: "croatia",
    backgroundImage: `${G}/d792a4bd0ee0583f31fffb60932fead8.jpg`,
    ko: {
      title: "고대 스플리트",
      period: "크로아티아 · 디오클레티아누스 궁전",
      description:
        "로마 황제 디오클레티아누스가 은퇴 후 머문 거대한 궁전입니다. 궁전 그 자체가 오늘날 도시의 중심이 되었습니다.",
    },
    en: {
      title: "Ancient Split",
      period: "Croatia · Diocletian's Palace",
      description:
        "The vast retirement palace of the emperor Diocletian. The palace itself became the living core of the modern city.",
    },
  },
  jerusalem: {
    slug: "jerusalem",
    region: "middle-east",
    backgroundImage: `${G}/7b9a80427cfb8db7ac55b6cf496ced14.jpg`,
    ko: {
      title: "고대 예루살렘",
      period: "이스라엘 · 성스러운 고대 도시",
      description:
        "유대교·기독교·이슬람교가 만나는 성스러운 고대 도시입니다. 헤로데 대왕의 성전과 성벽이 도시의 종교적 위상을 보여줍니다.",
    },
    en: {
      title: "Ancient Jerusalem",
      period: "Israel · the holy city",
      description:
        "A sacred ancient city where Judaism, Christianity, and Islam converge. Herod's Temple and the city walls reveal its profound religious significance.",
    },
  },
  masada: {
    slug: "masada",
    region: "middle-east",
    backgroundImage: `${G}/1bef652869cdbb312d5bcda4b0a9898f.jpg`,
    ko: {
      title: "마사다",
      period: "이스라엘 · 사해의 요새",
      description:
        "사해를 내려다보는 절벽 위의 요새입니다. 로마군에 맞선 항전으로 잘 알려진 헤로데 시대의 궁전 단지입니다.",
    },
    en: {
      title: "Masada",
      period: "Israel · the desert fortress",
      description:
        "A clifftop fortress overlooking the Dead Sea. A Herodian palace complex famed for the last stand against the Roman legions.",
    },
  },
  "jack-the-ripper": {
    slug: "jack-the-ripper",
    region: "britain",
    backgroundImage: `${G}/28f0ec6b56118635fedd5b95006d6a14.jpg`,
    ko: {
      title: "잭 더 리퍼의 런던",
      period: "영국 런던 · 빅토리아 시대",
      description:
        "1888년 런던 이스트엔드를 무대로 한 빅토리아 시대 도보 콘텐츠입니다. 안개 낀 골목과 당대의 거리를 따라갑니다.",
    },
    en: {
      title: "Jack the Ripper's London",
      period: "London, UK · Victorian era",
      description:
        "A Victorian-era walking experience set in London's East End of 1888, following the fog-shrouded alleys and streets of the period.",
    },
  },
  stonehenge: {
    slug: "stonehenge",
    region: "britain",
    backgroundImage: `${G}/8c06ab6d1b00fee01d440ff5bb66132b.jpg`,
    ko: {
      title: "스톤헨지",
      period: "영국 · 선사시대 거석 유적",
      description:
        "약 5천 년 전 세워진 선사시대의 거석 기념물입니다. 거대한 돌들이 이루는 원형 배열의 의미는 여전히 수수께끼로 남아 있습니다.",
    },
    en: {
      title: "Stonehenge",
      period: "United Kingdom · prehistoric monument",
      description:
        "A prehistoric monument of standing stones raised some 5,000 years ago. The meaning of its great stone circle remains a mystery.",
    },
  },
  pisidia: {
    slug: "pisidia",
    region: "turkey",
    backgroundImage: `${G}/0f2461a9f92010942b0f1344463a64f3.jpg`,
    ko: {
      title: "피시디아 트레일",
      period: "튀르키예 · 피시디아 고대 도시",
      description:
        "튀르키예 산악지대에 자리한 고대 피시디아의 도시들을 잇는 트레일입니다. 극장과 신전 유적을 따라 걷습니다.",
    },
    en: {
      title: "Pisidia Walking Trail",
      period: "Türkiye · ancient Pisidia",
      description:
        "A trail linking the ancient cities of mountainous Pisidia in Türkiye, following the remains of theatres and temples.",
    },
  },
  "old-hobart-town": {
    slug: "old-hobart-town",
    region: "australia",
    backgroundImage: `${G}/aa1c54b4b3f61178b244bdb8ad4233cb.jpg`,
    ko: {
      title: "올드 호바트 타운",
      period: "호주 태즈메이니아 · 식민지 시대",
      description:
        "19세기 식민지 시대 호바트의 거리를 재현한 도보 콘텐츠입니다. 초기 정착지의 모습을 따라 걷습니다.",
    },
    en: {
      title: "Old Hobart Town",
      period: "Tasmania, Australia · colonial era",
      description:
        "A walking experience recreating the streets of colonial-era Hobart in the 19th century, tracing the early settlement.",
    },
  },
};

// 콘텐츠 가격 (1회 결제 · 평생 소장). 데모용 단일 가격.
export const PRICE_KRW = 4900;

// 투어 소요 시간(분) — 레퍼런스(JSON-LD duration) 실측값
const DURATION_MIN: Record<string, number> = {
  athens: 42,
  corinth: 18,
  delphi: 23,
  epidauros: 15,
  olympia: 18,
  sounion: 12,
  rome: 58,
  ostia: 30,
  pompeii: 34,
  barcelona: 16,
  valencia: 25,
  "renaissance-madrid": 30,
  lisbon: 25,
  lyon: 11,
  "maison-carree": 3,
  pula: 20,
  split: 9,
  jerusalem: 59,
  masada: 16,
  "jack-the-ripper": 20,
  stonehenge: 30,
  pisidia: 61,
  "old-hobart-town": 33,
};

export function getDurationMin(slug: string): number {
  return DURATION_MIN[slug] ?? 0;
}

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
