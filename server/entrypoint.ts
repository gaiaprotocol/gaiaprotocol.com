import { exists } from "https://deno.land/std@0.223.0/fs/mod.ts";
import { serveFile } from "https://deno.land/std@0.223.0/http/file_server.ts";

Deno.serve(async (req) => {
  const path = new URL(req.url).pathname;
  console.log(path);

  const filePath = `${Deno.cwd()}/public${path}`;
  console.log(filePath);

  if (path !== "/" && await exists(filePath)) {
    return await serveFile(req, filePath);
  } else {
    return await serveFile(req, `${Deno.cwd()}/public/index.html`);
  }
});
