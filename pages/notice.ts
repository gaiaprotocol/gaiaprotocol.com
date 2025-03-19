import { marked, Tokens } from "https://deno.land/x/marked@1.0.2/mod.ts";
import { el } from "https://raw.githubusercontent.com/yjgaia/deno-module/refs/heads/main/page.ts";
import { notices } from "../server/notices.ts";

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

const renderer = new marked.Renderer();

// Override link renderer with TypeScript types
renderer.link = function ({ href, title, text }: Tokens.Link): string {
  // Check if href exists and is external
  if (href && (href.startsWith("http") || href.startsWith("https"))) {
    // Create link with target="_blank"
    const link = `<a href="${href}" target="_blank" rel="noopener noreferrer"`;

    // Add title if it exists
    if (title) {
      return `${link} title="${title}">${text}</a>`;
    }

    return `${link}>${text}</a>`;
  }

  // For internal links, use default behavior
  if (title) {
    return `<a href="${href}" title="${title}">${text}</a>`;
  }
  return `<a href="${href}">${text}</a>`;
};

marked.setOptions({
  renderer: renderer,
});

export function notice(slug: string) {
  slug = slug.replace(/\/$/, "");
  const notice = notices.find((notice) => notice.slug === slug);
  return {
    title: notice?.title || "Not Found",
    description: notice?.subtitle,
    coverImageURL: notice?.coverImageURL,
    coverVideoURL: notice?.coverVideoURL,
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
