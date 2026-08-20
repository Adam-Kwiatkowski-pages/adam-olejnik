// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

const SITE = "https://olejnik-robotyziemne.pl"
const BASE = undefined

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
