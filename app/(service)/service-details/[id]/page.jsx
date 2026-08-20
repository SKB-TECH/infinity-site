import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import BreadcrumbHeroDynamic from "@/components/common/BreadcrumbHeroDynamic";
import ServiceDetails from "@/components/otherPages/service/ServiceDetails";
import { allService } from "@/data/services";
export const metadata = {
  title: "Service Details | Infinity Innovation",
  description: "Infinity Innovation service details.",
};
export default function Page({ params }) {
  const serviceItem =
    allService.filter((elm) => elm.id == params.id)[0] || allService[0];
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHeroDynamic title={serviceItem.title} pageKey="serviceDetails" />
        <ServiceDetails serviceItem={serviceItem} />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
