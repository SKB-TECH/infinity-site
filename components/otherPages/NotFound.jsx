"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <section className="error-area space-top pb-425 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="error-items">
              <div className="error-image">
                <Image
                  src="/assets/img/bg/error.png"
                  width={896}
                  height={539}
                  alt="img"
                />
              </div>
              <h2>{t("notFoundPage.title")}</h2>
              <p>{t("notFoundPage.description")}</p>
              <Link
                scroll={false}
                href={`/`}
                className="gt-btn gt-btn-icon wow fadeInUp"
                data-wow-delay=".8s"
              >
                {t("notFoundPage.button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
