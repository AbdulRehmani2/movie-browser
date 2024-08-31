import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/search`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/movie/browse`,
      lastModified: new Date(),
    },
  ];
}
