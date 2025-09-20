import type { MetadataRoute } from "next"

const siteUrl = "https://guineapigcare.web.app"

const routes = [
  "/",
  "/diet",
  "/habitat",
  "/health",
  "/enrichment",
  "/adoption",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route, index) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.7,
  }))
}
