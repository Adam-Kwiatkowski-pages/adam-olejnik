import YAML from "yaml"
import { z } from "zod"

import raw from "../content/site.yml?raw"

const text = (label: string) =>
  z
    .string({ error: `Brakuje pola: ${label}` })
    .trim()
    .min(1, `Pole "${label}" nie może być puste`)

const url = (label: string) =>
  z.url({
    error: `Pole "${label}" musi być pełnym adresem URL (razem z https://)`,
  })

const imagePath = (label: string) =>
  text(label).regex(
    /^\/src\/assets\/images\/[^/]+\.(jpe?g|png|webp|avif)$/i,
    `Pole "${label}": zdjęcie musi być wgrane przez CMS do biblioteki mediów`
  )

const navItem = z.object({
  label: text("nav.label"),
  href: text("nav.href").regex(
    /^#[a-z0-9-]+$/,
    "nav.href musi być kotwicą, np. #kontakt"
  ),
})

const serviceItem = z.object({
  title: text("services.items.title"),
  description: text("services.items.description"),
  image: imagePath("services.items.image"),
  image_alt: text("services.items.image_alt"),
})

const bucketItem = z.object({
  icon: z.enum(["shovel", "cog", "wrench"], {
    error: "equipment.buckets.icon: dozwolone wartości to shovel, cog, wrench",
  }),
  title: text("equipment.buckets.title"),
  description: text("equipment.buckets.description"),
})

const mapItem = z.object({
  title: text("contact.maps.title"),
  embed_url: url("contact.maps.embed_url").startsWith(
    "https://www.google.com/maps/embed",
    "contact.maps.embed_url musi być adresem osadzenia Map Google"
  ),
})

const schema = z.object({
  meta: z.object({
    title: text("meta.title").max(
      70,
      "meta.title: maks. 70 znaków (limit Google)"
    ),
    description: text("meta.description")
      .min(50, "meta.description: min. 50 znaków")
      .max(160, "meta.description: maks. 160 znaków (limit Google)"),
  }),

  business: z.object({
    name: text("business.name"),
    phone: text("business.phone").regex(
      /^\d{3} \d{3} \d{3}$/,
      'business.phone: format "502 954 335" (9 cyfr, spacje co trzy)'
    ),
    area: text("business.area"),
    address: z.object({
      locality: text("business.address.locality"),
      region: text("business.address.region"),
    }),
    maps_url: url("business.maps_url"),
    olx_url: url("business.olx_url"),
  }),

  nav: z.array(navItem).min(1).max(8),

  hero: z.object({
    image: imagePath("hero.image"),
    image_alt: text("hero.image_alt"),
    heading: text("hero.heading"),
    body: text("hero.body"),
    cta_primary: text("hero.cta_primary"),
    cta_secondary: text("hero.cta_secondary"),
    note: text("hero.note"),
  }),

  services: z.object({
    eyebrow: text("services.eyebrow"),
    heading: text("services.heading"),
    items: z.array(serviceItem).min(1).max(6),
  }),

  scope: z.object({
    eyebrow: text("scope.eyebrow"),
    heading: text("scope.heading"),
    body: text("scope.body"),
    items: z.array(text("scope.items")).min(1).max(20),
  }),

  equipment: z.object({
    eyebrow: text("equipment.eyebrow"),
    heading: text("equipment.heading"),
    body: text("equipment.body"),
    buckets: z.array(bucketItem).min(1).max(6),
    callout: z.object({
      heading: text("equipment.callout.heading"),
      body: text("equipment.callout.body"),
    }),
  }),

  transport: z.object({
    image: imagePath("transport.image"),
    image_alt: text("transport.image_alt"),
    eyebrow: text("transport.eyebrow"),
    heading: text("transport.heading"),
    body: text("transport.body"),
    materials: z.array(text("transport.materials")).min(1).max(30),
  }),

  contact: z.object({
    heading: text("contact.heading"),
    body: text("contact.body"),
    area_heading: text("contact.area_heading"),
    availability_heading: text("contact.availability_heading"),
    availability: text("contact.availability"),
    maps: z.array(mapItem).min(1).max(4),
  }),

  footer: z.object({
    blurb: text("footer.blurb"),
    copyright: text("footer.copyright"),
  }),
})

const parsed = schema.safeParse(YAML.parse(raw))

if (!parsed.success) {
  const problems = parsed.error.issues
    .map((i) => `  • ${i.path.join(".") || "(korzeń)"} — ${i.message}`)
    .join("\n")
  throw new Error(
    `\ncontent/site.yml zawiera błędy — strona NIE została przebudowana:\n${problems}\n\n` +
      `Cofnij ostatnią zmianę w CMS-ie albo popraw powyższe pola.\n`
  )
}

export const site = parsed.data
export type Site = typeof site

export const telHref = `tel:+48${site.business.phone.replace(/\s/g, "")}`
