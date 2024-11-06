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
    el("section.apps", el("h2", "Apps")),
    el("section.games", el("h2", "Games")),
    //el("section.metaverses", el("h2", "Metaverses")),
    el("section.assets", el("h2", "Assets")),
    el("section.solutions", el("h2", "Solutions")),
  );
}
