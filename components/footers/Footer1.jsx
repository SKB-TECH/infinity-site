"use client";
import Link from "next/link";
import Image from "next/image";
import { socialLinks2 } from "@/data/socials";
import { footerLinks } from "@/data/footer";
import React from "react";
import { useLocale } from "@/context/LocaleContext";

export default function Footer1() {
  const currentYear = new Date().getFullYear();
  const { tr, t } = useLocale();

  return (
    <footer
      className="footer-area"
      style={{ backgroundImage: "url(/assets/img/bg/footerBg1.png)" }}
    >
      <div className="widget-area style1 pt-100 pb-80">
        <div className="shape2_1">
          <Image
            src="/assets/img/shape/footerShape1_1.png"
            width={361}
            height={372}
            alt="shape"
          />
        </div>
        <div className="shape2_2">
          <Image
            src="/assets/img/shape/footerShape2_2.png"
            width={288}
            height={383}
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="footer-layout style1">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div
                  className="widget footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="gt-widget-about">
                    <div className="about-logo">
                      <Link scroll={false} href={`/`}>
                        <Image
                          src="/assets/img/logo-white.png"
                          width={199}
                          height={42}
                          alt="Infinity Innovation"
                        />
                      </Link>
                    </div>
                    <p className="about-text">
                      {t("footer.about")}
                    </p>
                    <div className="gt-social style2">
                      {socialLinks2.map((link, index) => (
                        <a href={link.href} key={index}>
                          <i className={link.iconClass} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-12">
                <div
                  className="widget widget_nav_menu footer-widget wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <h3 className="widget_title">{t("footer.company")}</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      {footerLinks.map((item, index) => (
                        <li key={index}>
                          <Link scroll={false} href={item.href}>
                            <i className="fa-solid fa-chevrons-right" />
                            {tr(item.text)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-12">
                <div
                  className="widget footer-widget wow fadeInUp"
                  data-wow-delay="1.3s"
                >
                  <h3 className="widget_title">{t("footer.focus")}</h3>
                  <div className="checklist">
                    <ul className="ps-0">
                      {t("footer.focusItems").map((item, index) => (
                        <li className="text-white" key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div
                  className="widget widget_nav_menu footer-widget wow fadeInUp"
                  data-wow-delay="1.6s"
                >
                  <h3 className="widget_title">{t("footer.contact")}</h3>
                  <div className="checklist">
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-thin fa-envelope" />
                      </li>
                      <li className="text-white">contact@infinityinnovation.tech</li>
                    </ul>
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-light fa-phone-volume" />
                      </li>
                      <li className="text-white">+243 813 678 926</li>
                    </ul>
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-light fa-location-dot" />
                      </li>
                      <li className="text-white">Kinshasa, DRC</li>
                    </ul>
                    <div className="btn-wrapper mt-20">
                      <Link scroll={false} href="/contact" className="gt-btn gt-btn-icon">
                        {t("footer.contactTeam")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap bg-theme">
        <div className="container">
          <div className="copyright-layout">
            <div className="layout-text wow fadeInUp" data-wow-delay=".3s">
              <p className="copyright">
                <i className="fal fa-copyright" /> {t("footer.allRights")} {currentYear} {t("footer.by")}
                {" "}
                <Link scroll={false} href={`/`}>
                  Infinity Innovation
                </Link>
              </p>
            </div>
            <div className="layout-link wow fadeInUp" data-wow-delay=".6s">
              <div className="link-wrapper">
                <Link scroll={false} href={`/faq`}>
                  {t("footer.terms")}{" "}
                </Link>
                <Link scroll={false} href={`/about`}>
                  {t("footer.privacy")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
