import { exists } from "https://deno.land/std@0.223.0/fs/mod.ts";
import { serveFile } from "https://deno.land/std@0.223.0/http/file_server.ts";
import { footer } from "./layout/footer.ts";
import { header } from "./layout/header.ts";
import { home } from "./pages/home.ts";
import { generateWebPage } from "./static-site.ts";

Deno.serve(async (req) => {
  const path = new URL(req.url).pathname;
  const filePath = `${Deno.cwd()}/public${path}`;

  if (path !== "/" && await exists(filePath)) {
    return await serveFile(req, filePath);
  } else if (path === "/") {
    return new Response(
      generateWebPage({
        title: "Home",
        header: header(),
        body: home(),
        footer: footer(),
      }),
      { status: 200 },
    );
  } else {
    return new Response("Not Found", { status: 404 });
  }
});
