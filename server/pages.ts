import { el as UniversalEl, html } from "@common-module/universal-page";
import {
  createPage,
  el,
} from "https://raw.githubusercontent.com/yjgaia/deno-module/refs/heads/main/page.ts";
import { layout } from "./pages/layout.ts";
import { notice } from "./pages/notice.ts";
import { intro } from "./pages/intro.ts";

UniversalEl.impl = el;
html.impl = (htmlContent) => htmlContent;

const GTAG_ID = "G-SD4BMR4ZKT";

export async function pages(
  path: string,
  isDevMode = false,
): Promise<Response | undefined> {
  if (path === "/") {
    return new Response(
      createPage(
        {
          title: (isDevMode ? "(Dev) " : "") + "Gaia Protocol",
          jsFiles: [isDevMode ? "/bundle-dev.js" : "/bundle.js"],
          cssFiles: [isDevMode ? "/bundle-dev.css" : "/bundle.css"],
          gtagId: GTAG_ID,
          viewTransition: true,
        },
        layout(await intro()),
      ),
      {
        status: 200,
        headers: { "Content-Type": "text/html" },
      },
    );
  }

  if (path.startsWith("/index/")) {
    const data = notice(path.slice(7));
    return new Response(
      createPage(
        {
          title: (isDevMode ? "(Dev) " : "") + data.title,
          suffix: "Gaia Protocol",
          description: data.description,
          coverImageURL: data.coverImageURL,
          jsFiles: [isDevMode ? "/bundle-dev.js" : "/bundle.js"],
          cssFiles: [isDevMode ? "/bundle-dev.css" : "/bundle.css"],
          gtagId: GTAG_ID,
          viewTransition: true,
          twitterHandle: "@Gaia_Protocol",
        },
        layout(data.html),
      ),
      {
        status: 200,
        headers: { "Content-Type": "text/html" },
      },
    );
  }
}
