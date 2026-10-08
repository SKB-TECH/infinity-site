import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Cta from "@/components/common/Cta";
import Contact from "@/components/otherPages/contact/Contact";
import Map from "@/components/otherPages/contact/Map";
export const metadata = {
  title: "Contact | Infinity Innovation",
  description:
    "Contact Infinity Innovation to discuss software, platform, and digital transformation initiatives.",
};
export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />

      <main className='main position-relative' id='mains'>
        <BreadcrumbHero pageKey='contact' />

        <Contact />

        <Map />

        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
