"use client";

import { services2 } from "@/data/services";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";

export default function Services() {
  const { tr, t } = useLocale();

  return (
    <section className="service-area" id="service-area">
      <div className="service-wrap style1">
        <div className="container">
          <div className="title-area mx-auto">
            <h5 className="subtitle text-center">{t("home.services.subtitle")}</h5>
            <h2 className="title text-center mb-50">
              {t("home.services.title")}
            </h2>
          </div>
          <div className="service-card-wrapper style1">
            {services2.map((service, index) => (
              <div
                className="service-card style1 wow fadeInUp"
                data-wow-delay={service.delay}
                key={index}
              >
                <div className="card_icon">
                  <Image src={service.icon} width={40} height={40} alt="icon" />
                </div>
                <div className="card_content">
                  <h3>
                    <Link
                      scroll={false}
                      href={`/service-details/${service.id}`}
                      className="title"
                    >
                      {tr(service.title)}
                    </Link>
                  </h3>
                  <p className="text">{tr(service.description)}</p>
                </div>
                <div className="link-btn">
                  <Link scroll={false} href={`/service-details/${service.id}`}>
                    <i className="fa-sharp fa-regular fa-arrow-right-long" />
                  </Link>
                </div>
                <div className="bg">
                  <Image
                    src={service.bgImage}
                    width={280}
                    height={284}
                    alt="bg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
