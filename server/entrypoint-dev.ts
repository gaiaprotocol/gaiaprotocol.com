import { exists } from "https://deno.land/std@0.223.0/fs/mod.ts";
import { serveFile } from "https://deno.land/std@0.223.0/http/file_server.ts";
import { corsHeaders } from "https://raw.githubusercontent.com/yjgaia/deno-module/main/api.ts";
import { pages } from "./pages.ts";

Deno.serve(async (req) => {
  const basePath = Deno.cwd() + "/public";
  const path = new URL(req.url).pathname;
  const page = pages(path, true);
  if (page) return page;

  const filePath = basePath + path;

  const response = path !== "/" && await exists(filePath)
    ? await serveFile(req, filePath)
    : await serveFile(req, basePath + "/index.html");

  for (const [key, value] of Object.entries(corsHeaders)) {
    response.headers.set(key, value);
  }

  return response;
});