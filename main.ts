import { serve } from "https://deno.land/std@0.204.0/http/server.ts";

const port = 8000;

const handler = (request: Request): Response => {
  const url = new URL(request.url);
  
  if (url.pathname === "/") {
    return new Response("Hello World from Deno!", {
      headers: { "content-type": "text/plain" },
    });
  }

  return new Response("404 Not Found", { status: 404 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
