// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// TODO: Replace placeholder with real domain name
// TODO: Create public/CNAME file with domain name (without https://)
const SITE = "https://PLACEHOLDER-DOMENA.pl"

export default defineConfig({
  site: SITE,
  trailingSlash: "never",
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
