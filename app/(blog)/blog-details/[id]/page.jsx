import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import BreadcrumbHeroDynamic from "@/components/common/BreadcrumbHeroDynamic";
import BlogDetails from "@/components/otherPages/blog/BlogDetails";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title: "Blog Details | Infinity Innovation",
  description: "Infinity Innovation blog detail page.",
};
export default function Page({ params }) {
  const blogItem =
    allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <BreadcrumbHeroDynamic title={blogItem.title} pageKey="blogDetails" />
        <BlogDetails blogItem={blogItem} />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
