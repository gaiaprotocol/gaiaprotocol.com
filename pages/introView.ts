import { el } from "@common-module/universal-page";

export function introView<T>(): T {
  return el(
    ".intro-view",
    el(
      "section.hero",
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
    el("section.protocol", el("h2", "Protocol")),
    el("section.platform", el("h2", "Platform")),
    el("section.games", el("h2", "Games")),
    //el("section.metaverse", el("h2", "Metaverse")),
    el(
      "section.tokens",
      el("h2", "Tokens"),
      el(
        "ul",
        el(
          "li",
          el(
            "a",
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
  );
}
