import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import Cta from "@/components/common/Cta";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import About from "@/components/homes/home-1/About";
import Offering from "@/components/homes/home-1/Offering";
import Process from "@/components/homes/home-1/Process";
export const metadata = {
  title: "About | Infinity Innovation",
  description:
    "Learn how Infinity Innovation helps businesses and institutions execute digital transformation with reliable technology solutions.",
};
export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHero pageKey="about" />
        <About />
        <Offering />
        <Process />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
