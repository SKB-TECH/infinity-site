import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Cta from "@/components/common/Cta";
import Process from "@/components/homes/home-1/Process";
import Services2 from "@/components/otherPages/service/Services2";
export const metadata = {
  title: "Services | Infinity Innovation",
  description:
    "Explore Infinity Innovation services: software engineering, SaaS platforms, AI tools, automation, and digital consulting.",
};
export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHero pageKey="services" />
        <Services2 />
        <Process />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
