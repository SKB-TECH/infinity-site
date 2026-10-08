import ClientLayout from "./ClientLayout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Infinity Innovation | Digital Solutions & Business Transformation", template: "%s | Infinity Innovation" },
  description: "Infinity Innovation helps companies and institutions design, build, and scale digital products, platforms, and enterprise solutions.",
  applicationName: "Infinity Innovation",
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "Infinity Innovation", title: "Infinity Innovation", description: "Digital solutions, software engineering and business transformation.", images: ["/assets/img/logo-dark.png"] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/assets/img/favicon.png" },
};
export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
