import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://anujsharma.com";
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1 },
    { url: `${base}/resume`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/insights`, lastModified: new Date(), priority: 0.5 },
  ];
}
