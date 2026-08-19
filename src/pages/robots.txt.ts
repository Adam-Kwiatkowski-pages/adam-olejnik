import type { APIRoute } from "astro"
import { assetUrl } from "@/lib/urls"

export const GET: APIRoute = ({ site }) => {
  const body = `User-agent: *
Allow: /

Sitemap: ${assetUrl("/sitemap.xml", site)}
`
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
