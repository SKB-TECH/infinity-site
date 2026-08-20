"use client";

import { offerBoxes } from "@/data/offers";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
export default function Offering() {
  const { tr, t } = useLocale();

  return (
    <section className="offering-area fix">
      <div
        className="offering-wrap style1"
        style={{ backgroundImage: "url(/assets/img/bg/offeringBg1_1.png)" }}
      >
        <div className="container">
          <div className="title-area mx-auto">
            <h6
              className="text-center text-uppercase wow fadeInUp"
              data-wow-delay=".3s"
            >
              {t("home.offering.subtitle")}
            </h6>
            <h2
              className="title text-center mb-85 wow fadeInUp"
              data-wow-delay=".6s"
            >
              {t("home.offering.title")}
            </h2>
          </div>
          <div className="offer-box-wrap">
            {offerBoxes.map((box, index) => (
              <div
                className="offer-box wow fadeInUp"
                data-wow-delay={box.delay}
                key={index}
              >
                <div className="content">
                  <h3 className="title">
                    <Link scroll={false} href={`/services`}>
                      {tr(box.title)}
                    </Link>
                  </h3>
                </div>
                <div className="icon">
                  {box.iconClass ? (
                    <i className={box.iconClass} aria-hidden="true" />
                  ) : (
                    <Image src={box.icon} width={36} height={36} alt="icon" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
