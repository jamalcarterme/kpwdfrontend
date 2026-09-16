import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = ["services", "packages", "projects", "reviews", "about", "contact"];
  return [
    {
      url: site.domain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sections.map((section) => ({
      url: `${site.domain}/${section}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
