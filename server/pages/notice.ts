import { el } from "https://raw.githubusercontent.com/yjgaia/deno-module/refs/heads/main/page.ts";
import { marked } from "https://deno.land/x/marked@1.0.2/mod.ts";
import { createSupabaseClient } from "./supabase.ts";
import Notice from "../entities/Notice.ts";

export async function notice(slug: string) {
  slug = slug.replace(/\/$/, "");

  const supabase = createSupabaseClient();
  const { data, error } = await supabase.from("notices").select("*").eq(
    "slug",
    slug,
  );
  if (error) throw error;

  const notice = data?.[0] as Notice | undefined;
  return notice
    ? el(".notice-view", notice.title, marked(notice.content))
    : el(".notice-view", "Not Found");
}
