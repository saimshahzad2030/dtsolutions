import type { MetadataRoute } from "next";
import { site, navLinks } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: "2026-10-30",
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
