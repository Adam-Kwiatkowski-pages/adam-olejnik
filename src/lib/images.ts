import type { ImageMetadata } from "astro"

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
)

export function resolveImage(path: string): ImageMetadata {
  const mod = images[path]
  if (!mod) {
    const available = Object.keys(images).sort().join("\n  ")
    throw new Error(
      `\nNie znaleziono zdjęcia: ${path}\n` +
        `Zdjęcie zostało usunięte z biblioteki mediów albo zmieniono mu nazwę.\n` +
        `Dostępne pliki:\n  ${available}\n`
    )
  }
  return mod.default
}
