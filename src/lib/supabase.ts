import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// 서버 전용 Supabase 클라이언트 (파일럿 효과 측정용 로깅 등).
// 환경변수가 없으면 null을 반환 → 호출부에서 그냥 건너뛰면 된다.
let cached: SupabaseClient | null | undefined;

export function getServerSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;

  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    cached = null;
    return cached;
  }

  cached = createClient(url, key, {
    auth: { persistSession: false },
  });
  return cached;
}
