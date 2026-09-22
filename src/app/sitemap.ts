import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const clinicPaths = [
  "/clinic",
  "/clinic/crm",
  "/clinic/booking",
  "/clinic/workflows",
  "/clinic/analytics",
  "/clinic/integrations",
  "/clinic/pricing",
  "/clinic/fit",
] as const;

const propertyPaths = [
  "/property",
  "/property/crm",
  "/property/listings",
  "/property/workflows",
  "/property/integrations",
  "/property/pricing",
  "/property/fit",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const clinic: MetadataRoute.Sitemap = clinicPaths.map((path, i) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: i === 0 ? 0.95 : 0.8,
  }));

  const property: MetadataRoute.Sitemap = propertyPaths.map((path, i) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: i === 0 ? 0.95 : 0.8,
  }));

  return [...home, ...clinic, ...property];
}
