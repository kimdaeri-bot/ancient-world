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

  // 상세 페이지
  overviewTitle: string;
  durationLabel: string;
  minutesUnit: string;
  formatLabel: string;
  formatValue: string;
  narrationLabel: string;
  narrationValue: string;
  includedTitle: string;
  included: string[];

  // 구매 플로우
  oneTime: string;
  buyNow: string;
  checkoutTitle: string;
  orderSummary: string;
  total: string;
  continueToPayment: string;
  payInfoTitle: string;
  fieldName: string;
  fieldEmail: string;
  fieldCard: string;
  fieldExpiry: string;
  fieldCvc: string;
  pay: string;
  back2: string;
  demoNote: string;
  successTitle: string;
  successBody: string;
  done: string;
  required: string;
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

    overviewTitle: "소개",
    durationLabel: "소요 시간",
    minutesUnit: "분",
    formatLabel: "형식",
    formatValue: "AR 가이드 투어",
    narrationLabel: "음성 해설",
    narrationValue: "포함",
    includedTitle: "포함 사항",
    included: [
      "360° AR로 복원된 고대 유적",
      "전문 음성 해설",
      "현장·원격 어디서나 이용",
      "1회 결제로 평생 소장",
    ],

    oneTime: "1회 결제 · 평생 소장",
    buyNow: "구매하기",
    checkoutTitle: "구매",
    orderSummary: "주문 요약",
    total: "결제 금액",
    continueToPayment: "결제 정보 입력",
    payInfoTitle: "결제 정보",
    fieldName: "이름",
    fieldEmail: "이메일",
    fieldCard: "카드 번호",
    fieldExpiry: "만료 (MM/YY)",
    fieldCvc: "CVC",
    pay: "결제하기",
    back2: "이전",
    demoNote: "데모 결제입니다 — 실제로 청구되지 않습니다.",
    successTitle: "결제가 완료되었어요",
    successBody: "구매해 주셔서 감사합니다. 영수증을 이메일로 보내드렸어요.",
    done: "완료",
    required: "필수 항목을 입력해 주세요.",
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

    overviewTitle: "Overview",
    durationLabel: "Duration",
    minutesUnit: " min",
    formatLabel: "Format",
    formatValue: "AR guided tour",
    narrationLabel: "Narration",
    narrationValue: "Included",
    includedTitle: "What's included",
    included: [
      "Ancient site reconstructed in 360° AR",
      "Professional audio narration",
      "Use on-site or remotely, anywhere",
      "One-time purchase, lifetime access",
    ],

    oneTime: "One-time purchase · lifetime access",
    buyNow: "Buy now",
    checkoutTitle: "Checkout",
    orderSummary: "Order summary",
    total: "Total",
    continueToPayment: "Continue to payment",
    payInfoTitle: "Payment details",
    fieldName: "Name",
    fieldEmail: "Email",
    fieldCard: "Card number",
    fieldExpiry: "Expiry (MM/YY)",
    fieldCvc: "CVC",
    pay: "Pay",
    back2: "Back",
    demoNote: "Demo checkout — you will not be charged.",
    successTitle: "Payment complete",
    successBody: "Thank you for your purchase. A receipt has been sent to your email.",
    done: "Done",
    required: "Please fill in the required fields.",
  },
};

/** ₩ 가격 포맷 */
export function formatPriceKRW(amount: number, locale: Locale): string {
  const n = amount.toLocaleString(locale === "en" ? "en-US" : "ko-KR");
  return locale === "en" ? `₩${n}` : `${n}원`;
}
