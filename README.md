# Ancient World Edu — QR Launcher

고대 유적을 AR로 복원하고 음성가이드를 제공하는 **Ancient World** 콘텐츠를,
한국 초·중·고 **세계사 수업**으로 연결하는 에듀테크 미들웨어(중간다리)입니다.

> AR 렌더링·음성가이드·유적 탐색은 **전부 원 회사의 AR 시스템**이 처리합니다.
> 우리는 학생이 QR을 스캔했을 때 뜨는 **진입 관문(launcher) 한 장**만 만들고,
> "시작하기"를 누르면 원 회사의 AR 시스템 URL로 연결합니다.

## 콘셉트

- **타깃**: 중학교 역사 / 고등학교 세계사 (고대 그리스·로마·이집트 단원)
- **포지셔닝**: "학생용 콘텐츠"가 아니라 **교사 주도 45분 수업 도구**
- **핵심 가치**: 기기 구매 0원(학생 폰), 앱 설치 불필요, QR 스캔 즉시 실행, 30명 동시 접속
- **QR 구조**: QR 1개 = 유적 1개. 교사가 수업 단위로 QR을 교체

## 기술 스택

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS — Apple HIG 기반 모노톤(흑/백) 디자인 토큰
- Pretendard 폰트 (한국어 우선, SF Pro / 시스템 폰트 폴백)
- Supabase (선택) — 파일럿 효과 측정용 진입 로그
- Vercel 배포 대상

## 라우트

| 경로 | 설명 |
|---|---|
| `/[slug]` | **학생용 런처** (예: `/colosseum`, `/parthenon`, `/pyramid`). 풀스크린 진입 화면 → "시작하기" → AR 시스템 리다이렉트 |
| `/[slug]?lang=en` | 영어 버전 |
| `/teacher` | **교사용 QR 인덱스** — 수업할 유적의 QR을 교실 화면에 띄워 학생이 스캔 |
| `/` | 교사·관리자용 소개 + `/teacher` 진입점 |
| `/api/launch` | 진입 이벤트 로깅 (Supabase 미설정 시 no-op) |

## 콘텐츠 데이터

`src/lib/sites.ts`에 `slug → { title, subtitle, backgroundImage, arSystemUrl, loadingText }`
형태로 매핑되어 있습니다. 실서비스에서는 원 회사가 제공하는 콘텐츠 목록/URL로
교체하거나 DB(Supabase)에서 불러오면 됩니다.

현재는 개발용 더미 데이터(picsum 배경 이미지 + `demo.ancient-world.eu` AR URL)입니다.

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
npm run lint     # 린트
npm run typecheck
```

모바일에서 확인하려면 `/colosseum` 등으로 접속하세요. 데스크톱 브라우저에서는
모바일 뷰(개발자도구 디바이스 모드)로 보는 것을 권장합니다.

## 환경변수

`.env.example` 참고. Supabase 로깅은 선택 사항이며, 미설정 시에도 서비스는 정상 동작합니다.
