const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "")

export function assetPath(path: string): string {
  return `${BASE}/${path.replace(/^\/+/, "")}`
}

export function assetUrl(path: string, site: URL | undefined): string {
  return new URL(assetPath(path), site).href
}

export function homeUrl(site: URL | undefined): string {
  return new URL(`${BASE}/`, site).href
}
