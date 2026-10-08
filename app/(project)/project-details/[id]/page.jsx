import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import BreadcrumbHeroDynamic from "@/components/common/BreadcrumbHeroDynamic";
import ProjectDetails from "@/components/otherPages/project/ProjectDetails";
import { allProjects } from "@/data/projects";
export const metadata = {
  title: "Project Details | Infinity Innovation",
  description: "Infinity Innovation project details.",
};
export default function Page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHeroDynamic title={projectItem.title} pageKey="projectDetails" />
        <ProjectDetails projectItem={projectItem} />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
