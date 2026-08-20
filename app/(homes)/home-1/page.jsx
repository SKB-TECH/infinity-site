import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import About from "@/components/homes/home-1/About";
import Cta from "@/components/common/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Offering from "@/components/homes/home-1/Offering";
import Process from "@/components/homes/home-1/Process";
import Services from "@/components/homes/home-1/Services";
import Services2 from "@/components/homes/home-1/Services2";
export const metadata = {
  title: "Infinity Innovation | Innovation-Driven Technology Company",
  description:
    "Trusted digital partner for software development, SaaS solutions, automation, and enterprise transformation.",
};
export default function Home1() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <Hero />
        <Services />
        <About />
        <Services2 />
        <Offering />
        <Process />
        <Facts />
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
