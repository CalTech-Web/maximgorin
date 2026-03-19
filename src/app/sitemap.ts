import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maximgorin.com";
  const lastModified = "2026-03-19";

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/press`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${baseUrl}/blog/first-responders-critical-to-our-communities`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/how-to-be-a-great-leader-for-your-business`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
