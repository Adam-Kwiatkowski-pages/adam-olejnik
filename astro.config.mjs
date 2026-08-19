// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// TODO: Set SITE to the real domain (origin only) and BASE to undefined
// TODO: Create public/CNAME file with domain name (without https://)
const SITE = "https://adam-kwiatkowski-pages.github.io"
const BASE = "/adam-olejnik"

export default defineConfig({
  site: SITE,
  base: BASE,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
