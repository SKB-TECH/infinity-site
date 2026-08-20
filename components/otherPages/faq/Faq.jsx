"use client";

import React from "react";
import Faq1 from "./Faq1";
import Image from "next/image";
import Faq2 from "./Faq2";
import { useLocale } from "@/context/LocaleContext";

export default function Faq() {
  const { t } = useLocale();

  return (
    <section className="faq-area space fix">
      <div className="container">
        <div className="title-area mx-auto">
          <h5 className="subtitle text-center">
            <span className="me-2">
              <Image
                alt="icon"
                src="/assets/img/icon/titleIcon.png"
                width="28"
                height="12"
              />
            </span>{' '}
            {t("pages.faq.title")}{' '}
            <span className="ms-2">
              <Image
                alt="icon"
                src="/assets/img/icon/titleIcon.png"
                width="28"
                height="12"
              />
            </span>
          </h5>
          <h2 className="title text-center mb-50">{t("pages.faq.sectionTitle")}</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-content style-3">
              <div className="faq-accordion">
                <Faq1 />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content style-3">
              <div className="faq-accordion">
                <Faq2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
