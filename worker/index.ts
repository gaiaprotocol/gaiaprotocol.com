import { intro } from "./pages/intro";
import { Notice } from "./types/notice";

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      const notices: Notice[] = await (env.API_WORKER as any).fetchNotices();
      return new Response(intro(notices), { headers: { 'Content-Type': 'text/html' } });
    }

    return new Response('Not Found', { status: 404 });
  },
} satisfies ExportedHandler<Env>;
