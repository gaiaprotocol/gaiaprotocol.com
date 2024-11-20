import { marked } from "https://deno.land/x/marked@1.0.2/mod.ts";
import { el } from "https://raw.githubusercontent.com/yjgaia/deno-module/refs/heads/main/page.ts";
import Notice from "../entities/Notice.ts";
import { createSupabaseClient } from "./supabase.ts";

function format(date: Date) {
  return new Intl.DateTimeFormat(
    "en",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  ).format(date);
}

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
    ? el(
      ".notice-view",
      el(
        "header",
        el(".date", format(new Date(notice.created_at))),
        el("h1", notice.title),
        el("h2", notice.subtitle),
      ),
      el("main.markdown-body", marked(notice.content)),
    )
    : el(".notice-view", "Not Found");
}
