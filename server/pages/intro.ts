import { el } from "https://raw.githubusercontent.com/yjgaia/deno-module/refs/heads/main/page.ts";
import { notices } from "../notices.ts";

const dot =
  '<svg class="dot" width="0.15625rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"></path></svg>';

function format(date: Date) {
  return new Intl.DateTimeFormat(
    "en",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  ).format(date);
}

export function intro() {
  return el(
    ".intro-view",
    el(
      "section.hero",
      {
        style: {
          backgroundImage:
            "url('https://common-resources.gaia.cc/hero/hero.jpg')",
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
                backgroundImage:
                  "url('https://common-resources.gaia.cc/covers/gaia-names.png')",
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
                backgroundImage:
                  "url('https://common-resources.gaia.cc/covers/token.jpg')",
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
                backgroundImage:
                  "url('https://common-resources.gaia.cc/covers/thegods.jpg')",
              },
            },
            el(
              "video",
              { autoplay: true, loop: true, muted: true, playsInline: true },
              el("source", {
                src: "https://common-resources.gaia.cc/covers/thegods.mp4",
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
                el(
                  "h3",
                  notice.category,
                  dot,
                  format(new Date(notice.created_at)),
                ),
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
