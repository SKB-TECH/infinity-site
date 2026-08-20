import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import NotFound from "@/components/otherPages/NotFound";
export const metadata = {
  title: "Page Not Found | Infinity Innovation",
  description: "Infinity Innovation error page.",
};
export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHero pageKey="notFound" />
        <NotFound />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
