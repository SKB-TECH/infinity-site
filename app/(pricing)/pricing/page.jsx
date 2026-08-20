import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Pricing from "@/components/homes/home-3/Pricing";
export const metadata = {
  title: "Pricing | Infinity Innovation",
  description: "Infinity Innovation pricing packages.",
};
export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHero pageKey="pricing" />
        <Pricing />
        <div className="pb-300"></div>
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
