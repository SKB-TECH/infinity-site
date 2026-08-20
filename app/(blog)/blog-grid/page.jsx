import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import Blogs1 from "@/components/otherPages/blog/Blogs1";
export const metadata = {
  title: "Blog | Infinity Innovation",
  description: "Infinity Innovation insights and articles.",
};
export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHero pageKey="blogGrid" />
        <Blogs1 />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
