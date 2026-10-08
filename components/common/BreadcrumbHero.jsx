"use client";

import { useLocale } from "@/context/LocaleContext";
import Link from "next/link";

export default function BreadcrumbHero({ pageKey }) {
  const { t } = useLocale();

  return (
    <div className="breadcrumb-wrapper">
      <div
        className="breadcumb"
        data-bg-src=""
        style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {t(`pages.${pageKey}.title`)}
            </h1>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link scroll={false} href="/">
                  {t("common.home")}
                </Link>
              </li>
              <li>
                <i className="fas fa-chevrons-right" />
              </li>
              <li>{t(`pages.${pageKey}.breadcrumb`)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
