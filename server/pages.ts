import { el as UniversalEl, html } from "@common-module/universal-page";
import {
  createPage,
  el,
} from "https://raw.githubusercontent.com/yjgaia/deno-module/main/page.ts";
import { introView } from "../pages/introView.ts";
import { layout } from "./pages/layout.ts";

UniversalEl.impl = el;
html.impl = (htmlContent) => htmlContent;

const GTAG_ID = "G-SD4BMR4ZKT";

export function pages(
  path: string,
  isDevMode = false,
): Response | undefined {
  if (path === "/") {
    return new Response(
      createPage(
        {
          title: (isDevMode ? "(Dev) " : "") + "Gaia Protocol",
          jsFiles: [isDevMode ? "/bundle-dev.js" : "/bundle.js"],
          cssFiles: [isDevMode ? "/bundle-dev.css" : "/bundle.css"],
          gtagId: GTAG_ID,
        },
        layout(introView()),
      ),
      {
        status: 200,
        headers: { "Content-Type": "text/html" },
      },
    );
  }
}
