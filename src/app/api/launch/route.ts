import { NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabase";
import { getSite } from "@/lib/sites";

export const runtime = "nodejs";

// 학생이 "시작하기"를 눌러 AR 시스템으로 진입한 이벤트를 기록한다.
// 무료 파일럿의 "효과 데이터"(어떤 유적이 얼마나 쓰였는지) 확보용.
// Supabase 미설정 시에는 조용히 통과한다(로깅은 부가 기능).
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const slug = typeof body?.slug === "string" ? body.slug : null;
    const locale = body?.locale === "en" ? "en" : "ko";

    if (!slug || !getSite(slug)) {
      return new NextResponse(null, { status: 204 });
    }

    const supabase = getServerSupabase();
    if (supabase) {
      // 테이블 예시:
      //   create table launch_events (
      //     id bigint generated always as identity primary key,
      //     slug text not null,
      //     locale text not null default 'ko',
      //     created_at timestamptz not null default now()
      //   );
      await supabase.from("launch_events").insert({ slug, locale });
    }
  } catch {
    /* 로깅 실패는 학생 경험을 막지 않는다 */
  }

  return new NextResponse(null, { status: 204 });
}
