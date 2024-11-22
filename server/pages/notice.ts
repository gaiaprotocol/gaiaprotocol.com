import { marked } from "https://deno.land/x/marked@1.0.2/mod.ts";
import { el } from "https://raw.githubusercontent.com/yjgaia/deno-module/refs/heads/main/page.ts";
import { notices } from "../notices.ts";

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

export function notice(slug: string) {
  slug = slug.replace(/\/$/, "");
  const notice = notices.find((notice) => notice.slug === slug);
  return {
    title: notice?.title || "Not Found",
    description: notice?.subtitle,
    coverImageURL: notice?.cover_image_url,
    html: notice
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
      : el(".notice-view", "Not Found"),
  };
}
