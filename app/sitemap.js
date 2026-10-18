// Served at /sitemap.xml. One page today: extend this array if more routes are added.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sasurieengg.com";

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
