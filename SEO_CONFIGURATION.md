# SEO configuration (no visual modifications)

Set `NEXT_PUBLIC_SITE_URL=https://YOUR_REAL_DOMAIN` in your environment and deploy. Replace the placeholder before production.

Only `app/layout.jsx` was minimally changed to a server wrapper, preserving the original client layout **verbatim** in `app/ClientLayout.jsx`. Added `app/robots.js`, `app/sitemap.js`, and this guide. All page components, styles, images and visual assets remain untouched.

Check `/robots.txt`, `/sitemap.xml`, page titles, and social previews after deployment. Submit the sitemap in Google Search Console. Dynamic CMS pages require an additional sitemap implementation if they should be indexed.
