import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://movie-browser-jqsus5eoo-abdulrehman-s-projects-39e93e2d.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://movie-browser-jqsus5eoo-abdulrehman-s-projects-39e93e2d.vercel.app/search",
      lastModified: new Date(),
    },
    {
      url: "https://movie-browser-jqsus5eoo-abdulrehman-s-projects-39e93e2d.vercel.app/movie/browse",
      lastModified: new Date(),
    },
  ];
}
