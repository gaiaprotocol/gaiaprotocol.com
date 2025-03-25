import { el } from "https://raw.githubusercontent.com/yjgaia/deno-module/refs/heads/main/page.ts";
import { notices } from "../server/notices.ts";

const dot =
  '<svg class="dot" width="0.15625rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"></path></svg>';

const comingSoon = el(
  ".coming-soon",
  '<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/></svg>',
  el("span", "Coming soon"),
);

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
          src: "https://common-resources.gaia.cc/hero/hero.mp4",
          type: "video/mp4",
        }),
      ),
      el(
        ".content",
        el("h1", "Gaia Protocol"),
        el("p", "The Web3 protocol for social and gaming."),
        el("a.button.contained", "Learn more", {
          href: "/index/introducing-gaia-protocol",
          //target: "_blank",
          //onclick: "alert('Coming soon!')",
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
                  "url('https://common-resources.gaia.cc/covers/material-factory.jpg')",
              },
              href:
                "https://github.com/gaiaprotocol/gaiaprotocol/blob/main/contracts/gaming/MaterialFactory.sol",
              target: "_blank",
            },
            el(
              ".content",
              el("header", el("h3", "Material Factory")),
              el(
                "main",
                el(
                  "p",
                  "An ERC-20 based system for tokenizing game resources with automated pricing based on supply and demand.",
                ),
              ),
            ),
          ),
        ),
        el(
          "li",
          el(
            "a",
            {
              style: {
                backgroundImage:
                  "url('https://common-resources.gaia.cc/covers/topic-shares.jpg')",
              },
              href:
                "https://github.com/gaiaprotocol/gaiaprotocol/blob/main/contracts/social/TopicShares.sol",
              target: "_blank",
            },
            el(
              ".content",
              el("header", el("h3", "Topic Shares")),
              el(
                "main",
                el(
                  "p",
                  "A tokenized system for subject-based participation where share holders receive transaction fees and influence community decisions.",
                ),
              ),
            ),
          ),
        ),
        el(
          "li",
          el(
            "a",
            {
              style: {
                backgroundImage:
                  "url('https://common-resources.gaia.cc/covers/clan-emblems.jpg')",
              },
              href:
                "https://github.com/gaiaprotocol/gaiaprotocol/blob/main/contracts/social/ClanEmblems.sol",
              target: "_blank",
            },
            el(
              ".content",
              el("header", el("h3", "Clan Emblems")),
              el(
                "main",
                el(
                  "p",
                  "A digital insignia system representing community membership, where transaction fees contribute to clan operations.",
                ),
              ),
            ),
          ),
        ),
        el(
          "li",
          el(
            "a",
            {
              style: {
                backgroundImage:
                  "url('https://common-resources.gaia.cc/covers/persona-fragments.jpg')",
              },
              href:
                "https://github.com/gaiaprotocol/gaiaprotocol/blob/main/contracts/social/PersonaFragments.sol",
              target: "_blank",
            },
            el(
              ".content",
              el("header", el("h3", "Persona Fragments")),
              el(
                "main",
                el(
                  "p",
                  "A system that tokenizes digital identity and relationships, where users can establish connections through fragment ownership.",
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    el(
      "section.apps",
      el("h2", "Apps"),
      el(
        "ul",
        el(
          "li",
          el(
            "a",
            {
              style: {
                backgroundImage:
                  "url('https://common-resources.gaia.cc/covers/gaia-materials.jpg')",
              },
            },
            el(
              ".content",
              el("header", el("h3", "Gaia Materials"), comingSoon),
              el(
                "main",
                el(
                  "p",
                  "A platform for trading Web3 gaming resources as ERC-20 tokens.",
                ),
              ),
            ),
            {
              //href: "https://materials.gaia.cc",
              //target: "_blank",
              onclick: "alert('Coming soon!')",
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
                  "url('https://common-resources.gaia.cc/covers/topictrade.jpg')",
              },
            },
            el(
              ".content",
              el("header", el("h3", "topic.trade"), comingSoon),
              el(
                "main",
                el(
                  "p",
                  "A social-fi platform for trading topics where holders share transaction fees and govern posting channels through governance.",
                ),
              ),
            ),
            {
              //href: "https://topic.trade",
              //target: "_blank",
              onclick: "alert('Coming soon!')",
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
                  "url('https://common-resources.gaia.cc/covers/gaia-clans.jpg')",
              },
            },
            el(
              ".content",
              el("header", el("h3", "Gaia Clans"), comingSoon),
              el(
                "main",
                el(
                  "p",
                  "Create clans, join through membership passes, and secure operational funds through pass trading fees.",
                ),
              ),
            ),
            {
              //href: "https://clans.gaia.cc",
              //target: "_blank",
              onclick: "alert('Coming soon!')",
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
                  "url('https://common-resources.gaia.cc/covers/gaia-personas.jpg')",
              },
            },
            el(
              ".content",
              el("header", el("h3", "Gaia Personas"), comingSoon),
              el(
                "main",
                el(
                  "p",
                  "A social-fi platform where users express their Web3 identity through personas, trade them, and earn fees from transactions.",
                ),
              ),
            ),
            {
              //href: "https://personas.gaia.cc",
              //target: "_blank",
              onclick: "alert('Coming soon!')",
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
                  "url('https://common-resources.gaia.cc/covers/gaia-names.png')",
              },
            },
            el(
              ".content",
              el("header", el("h3", "Gaia Names")),
              el(
                "main",
                el(
                  "p",
                  "A naming system for the Gaia ecosystem.",
                ),
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
    el(
      "section.games",
      el("h2", "Games"),
      el(
        "ul",
        el(
          "li",
          el(
            "a",
            {
              style: {
                backgroundImage:
                  "url('https://common-resources.gaia.cc/covers/gaiawar.jpg')",
              },
            },
            el(
              ".content",
              el("header", el("h3", "Gaia War"), comingSoon),
              el(
                "main",
                el(
                  "p",
                  "A fully-onchain strategy game.",
                ),
              ),
            ),
            {
              //href: "https://war.gaia.cc",
              //target: "_blank",
              onclick: "alert('Coming soon!')",
            },
          ),
        ),
      ),
    ),
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
              el("header", el("h3", "$GAIA")),
              el(
                "main",
                el(
                  "p",
                  "A membership token providing various benefits across the Gaia ecosystem.",
                ),
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
              el("header", el("h3", "The Gods")),
              el(
                "main",
                el(
                  "p",
                  "A membership NFT collection of Gaia Protocol consisting of 3,333 NFTs.",
                ),
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
      el("h2", "News"),
      el(
        "ul",
        ...notices.map((notice) =>
          el(
            "li",
            el(
              "a",
              {
                style: {
                  backgroundImage: `url(${notice.coverImageURL})`,
                },
              },
              notice.coverVideoURL
                ? el(
                  "video",
                  {
                    autoplay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                  },
                  el("source", {
                    src: notice.coverVideoURL,
                    type: "video/mp4",
                  }),
                )
                : undefined,
              el(
                ".content",
                el(
                  "header",
                  el(
                    "h3",
                    notice.category,
                    dot,
                    format(new Date(notice.created_at)),
                  ),
                ),
                el("main", el("p", notice.title)),
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
