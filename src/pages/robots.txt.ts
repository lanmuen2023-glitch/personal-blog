import { SITE } from "../consts";

export function GET() {
  const body = [
    `User-agent: *`,
    `Allow: /`,
    ``,
    `Sitemap: ${SITE.url}/sitemap-index.xml`,
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
