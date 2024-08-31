import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://movie-browser-jqsus5eoo-abdulrehman-s-projects-39e93e2d.vercel.app/sitemap.xml",
  };
}
