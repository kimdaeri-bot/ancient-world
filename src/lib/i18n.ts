import type { Locale } from "./sites";

export const LOCALES: Locale[] = ["ko", "en"];
export const DEFAULT_LOCALE: Locale = "ko";

/** ?lang=en 같은 검색 파라미터에서 로케일을 안전하게 추출 */
export function resolveLocale(input?: string | string[]): Locale {
  const raw = Array.isArray(input) ? input[0] : input;
  return raw === "en" ? "en" : DEFAULT_LOCALE;
}

type UIStrings = {
  start: string;
  moving: string;
  notFoundTitle: string;
  notFoundBody: string;
  // 교사용 인덱스 페이지
  teacherTitle: string;
  teacherIntro: string;
  teacherHowto: string;
  openLauncher: string;
  copyLink: string;
  copied: string;
};

export const UI: Record<Locale, UIStrings> = {
  ko: {
    start: "시작하기",
    moving: "이동 중…",
    notFoundTitle: "콘텐츠를 찾을 수 없어요",
    notFoundBody: "QR 주소를 다시 확인하거나 선생님께 문의하세요.",
    teacherTitle: "수업용 QR",
    teacherIntro:
      "수업할 유적의 QR을 교실 화면에 띄우세요. 학생들이 폰으로 스캔하면 바로 시작됩니다. 앱 설치는 필요 없습니다.",
    teacherHowto: "QR을 화면에 띄움 → 학생이 스캔 → 시작하기 → AR 답사 시작",
    openLauncher: "런처 열기",
    copyLink: "링크 복사",
    copied: "복사됨",
  },
  en: {
    start: "Start",
    moving: "Loading…",
    notFoundTitle: "Content not found",
    notFoundBody: "Please check the QR address or ask your teacher.",
    teacherTitle: "Classroom QR",
    teacherIntro:
      "Project the QR for the site you're teaching. Students scan it with their phones and start instantly — no app install required.",
    teacherHowto: "Show QR on screen → students scan → Start → AR tour begins",
    openLauncher: "Open launcher",
    copyLink: "Copy link",
    copied: "Copied",
  },
};
