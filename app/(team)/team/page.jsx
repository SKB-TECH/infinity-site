import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Cta from "@/components/common/Cta";
import Team2 from "@/components/otherPages/team/Team2";

export const metadata = {
  title: "Leadership | Infinity Innovation",
  description:
    "Meet the leadership and experts driving Infinity Innovation's technology and delivery strategy.",
};

export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHero pageKey="leadership" />
        <Team2 />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
