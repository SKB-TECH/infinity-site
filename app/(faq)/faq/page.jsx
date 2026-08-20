import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Cta from "@/components/common/Cta";

import Faq from "@/components/otherPages/faq/Faq";
export const metadata = {
  title: "Faq || Techbe-IT Solution & Technology Service Nextjs Template",
  description: "Techbe-IT Solution & Technology Service Nextjs Template",
};
export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHero pageKey="faq" />
        <Faq />
        <div className="pb-300"></div>
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
