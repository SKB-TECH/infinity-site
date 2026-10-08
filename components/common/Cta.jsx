"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";

export default function Cta() {
  const { t } = useLocale();

  return (
    <section
      className="cta-area mt-n150 mb-n116 wow fadeInUp"
      data-wow-delay=".6s"
    >
      <div className="container">
        <div className="cta-wrap style1">
          <div className="shape1_1 rotate360 d-none d-xl-block">
            <img
              alt="shape"
              width={80}
              height="80"
              src="/assets/img/shape/ctaShape1_1.png"
            />
          </div>
          <div className="shape1_2 d-none d-xl-block">
            <Image
              alt="shape"
              src="/assets/img/shape/ctaShape1_2.png"
              width="119"
              height="200"
            />
          </div>
          <div className="shape1_3 d-none d-xl-block">
            <Image
              alt="shape"
              src="/assets/img/shape/ctaShape1_3.png"
              width="85"
              height="144"
            />
          </div>
          <h3
            className="cta-title text-white wow fadeInUp"
            data-wow-delay=".3s"
          >
            {t("cta.title")}
          </h3>
          <div className="btn-wrapper">
            <Link
              scroll={false}
              className="gt-btn style5 gt-btn-icon"
              href={`/contact`}
            >
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
