// Served at /robots.txt. Set NEXT_PUBLIC_SITE_URL when the site moves to its own domain.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sasurieengg.com";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
