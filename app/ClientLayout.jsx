"use client";
import MobileNav from "@/components/headers/MobileNav";
import "../public/assets/scss/styles.scss";
import { useEffect } from "react";
import SiteMenu from "@/components/headers/SiteMenu";
import ScrollTop from "@/components/common/ScrollTop";
import CursorFollor from "@/components/common/CursorFollor";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import PopupSearch from "@/components/headers/PopupSearch";
import { LocaleProvider } from "@/context/LocaleContext";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  const path = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var topPos = window.scrollY || document.documentElement.scrollTop;
      var stickyWrapper = document.querySelector(".sticky-wrapper");

      if (topPos > 500) {
        stickyWrapper.classList.add("sticky");
      } else {
        stickyWrapper.classList.remove("sticky");
      }
    });
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    const { WOW } = require("wowjs");
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en" className="bg-white" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <LocaleProvider>
            <SiteMenu />
            <MobileNav />
            <PopupSearch />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {children}
            <CursorFollor />
            <ScrollTop />
          </LocaleProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
