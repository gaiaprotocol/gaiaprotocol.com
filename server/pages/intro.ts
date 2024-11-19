import { el } from "https://raw.githubusercontent.com/yjgaia/deno-module/refs/heads/main/page.ts";
import { createSupabaseClient } from "./supabase.ts";
import Notice from "../entities/Notice.ts";

export async function intro() {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.from("notices").select("*").limit(12)
    .order("id", { ascending: false });
  if (error) throw error;

  const notices = data as Notice[];

  return el(
    ".intro-view",
    el(
      "section.hero",
      {
        style: {
          backgroundImage: "url('/images/hero.jpg')",
        },
      },
      el(
        "video",
        { autoplay: true, loop: true, muted: true, playsInline: true },
        el("source", {
          src: "/videos/hero.mp4",
          type: "video/mp4",
        }),
      ),
      el(
        ".content",
        el("h1", "Gaia Protocol"),
        el("p", "The Web3 protocol for social and gaming."),
        el("a.button.contained", "Learn more", {
          href: "https://docs.gaia.cc",
          target: "_blank",
        }),
      ),
    ),
    el(
      "section.protocol",
      el("h2", "Protocol"),
      el(
        "ul",
        el(
          "li",
          el(
            "a",
            {
              style: {
                backgroundImage: "url('/images/gaia-names.png')",
              },
            },
            el(
              ".content",
              el("h3", "Gaia Names"),
              el(
                "p",
                "A naming system for the Gaia ecosystem.",
              ),
            ),
            {
              href: "https://names.gaia.cc",
              target: "_blank",
            },
          ),
        ),
      ),
    ),
    el("section.platform", el("h2", "Platform")),
    el("section.games", el("h2", "Games")),
    el("section.metaverse", el("h2", "Metaverse")),
    el(
      "section.tokens",
      el("h2", "Tokens"),
      el(
        "ul",
        el(
          "li",
          el(
            "a",
            {
              style: {
                backgroundImage: "url('/images/token.jpg')",
              },
            },
            el(
              ".content",
              el("h3", "$GAIA"),
              el(
                "p",
                "A membership token providing various benefits across the Gaia ecosystem.",
              ),
            ),
            {
              href: "https://token.gaia.cc",
              target: "_blank",
            },
          ),
        ),
        el(
          "li",
          el(
            "a",
            {
              style: {
                backgroundImage: "url('/images/thegods.jpg')",
              },
            },
            el(
              "video",
              { autoplay: true, loop: true, muted: true, playsInline: true },
              el("source", {
                src: "/videos/thegods.mp4",
                type: "video/mp4",
              }),
            ),
            el(
              ".content",
              el("h3", "The Gods"),
              el(
                "p",
                "A membership NFT collection of Gaia Protocol consisting of 3,333 NFTs.",
              ),
            ),
            {
              href: "https://thegods.gaia.cc",
              target: "_blank",
            },
          ),
        ),
      ),
    ),
    el("section.technologies", el("h2", "Technologies")),
    el(
      "section.notices",
      el("h2", "Notices"),
      el(
        "ul",
        ...notices.map((notice) =>
          el(
            "li",
            el(
              "a",
              {
                style: {
                  backgroundImage: `url(${notice.cover_image_url})`,
                },
              },
              el(
                ".content",
                el("h3", notice.category),
                el("p", notice.title),
              ),
              {
                href: `/index/${notice.slug}`,
              },
            ),
          )
        ),
      ),
    ),
  );
}
