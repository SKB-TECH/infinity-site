export default function sitemap() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const routes = ["/", "/about", "/services", "/project", "/team", "/blog-grid", "/contact", "/faq"];
  return routes.map((route) => ({ url: `${site}${route}`, changeFrequency: route === "/" ? "weekly" : "monthly", priority: route === "/" ? 1 : 0.7 }));
}
