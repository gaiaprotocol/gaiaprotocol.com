import { dashboard } from "./pages/dashboard";
import { intro } from "./pages/intro";
import { notice } from "./pages/notice";
import { Notice } from "./types/notice";

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      const notices: Notice[] = await (env.API_WORKER as any).fetchNotices();
      return new Response(intro(notices), { headers: { 'Content-Type': 'text/html' } });
    }

    if (url.pathname === '/dashboard') {
      return new Response(dashboard(), { headers: { 'Content-Type': 'text/html' } });
    }

    if (url.pathname.startsWith("/notice/")) {
      const id = url.pathname.split("/").pop();
      if (!id) {
        return new Response("Invalid Notice ID", { status: 400 });
      }

      try {
        const n: Notice = await (env.API_WORKER as any).fetchNotice(id);
        if (!n) {
          return new Response("Notice not found", { status: 404 });
        }

        return new Response(notice(n), {
          headers: { "Content-Type": "text/html" },
        });
      } catch (err) {
        return new Response("Failed to load notice", { status: 500 });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
} satisfies ExportedHandler<Env>;
