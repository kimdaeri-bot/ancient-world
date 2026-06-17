# Ancient World — 고대 유적 콘텐츠 가이드

역사 속으로 사라진 **고대 유적**을 있는 그대로 다시 만나는 콘텐츠 가이드입니다.
이탈리아·그리스·이집트의 유적을 **지역별로 둘러보고** 상세 콘텐츠를 열람합니다.
(예약·날짜 개념 없음 — 순수 콘텐츠 탐색)

## 디자인

Apple **Human Interface Guidelines** 기반 디자인 토큰을 따릅니다.

- 이분법 캔버스: 라이트그레이 `#f5f5f7` ↔ 다크 `#000000`
- 단일 액센트: Apple Blue `#0071e3` (인터랙티브 요소 전용), 텍스트 링크 `#0066cc`
- 타이포: 라틴/숫자는 SF Pro, 한글은 Pretendard로 폴백 (음수 자간, 타이트한 헤드라인)
- 화이트 피처 카드(radius 28), 풀(pill) CTA(radius 980), 글래스 내비게이션

## 기술 스택

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS — Apple HIG 디자인 토큰
- `next/image` 이미지 최적화
- Vercel 배포 (`vercel.json`에서 framework: nextjs)

## 라우트

| 경로 | 설명 |
|---|---|
| `/` | 홈 — 히어로 + **지역별 카탈로그**(전체/이탈리아/그리스/이집트 필터) |
| `/[slug]` | 유적 상세 (예: `/colosseum`, `/parthenon`, `/pyramid`) — 풀블리드 히어로 + 본문 + 같은 지역 더보기 |
| `/?lang=en`, `/[slug]?lang=en` | 영어 버전 |

## 콘텐츠 데이터

`src/lib/sites.ts`에 `slug → { region, backgroundImage, ko/en: { title, period, description } }`
형태로 매핑되어 있습니다. 실서비스에서는 DB나 외부 콘텐츠 API로 교체하면 됩니다.
현재 배경 이미지는 개발용 더미(picsum)입니다.

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
npm run lint
npm run typecheck
```
