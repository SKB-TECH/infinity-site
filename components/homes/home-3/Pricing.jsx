"use client";

import { pricingCards } from "@/data/pricing";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";

export default function Pricing() {
  const { t, tr } = useLocale();

  return (
    <section className="pricing-area space fix">
      <div className="pricing-wrap style3">
        <div className="shape3_1 spin-slow d-none d-xl-block">
          <Image
            alt="shape"
            src="/assets/img/shape/pricingShape3_1.png"
            width="134"
            height="135"
          />
        </div>
        <div className="shape3_2">
          <Image
            alt="shape"
            src="/assets/img/shape/pricingShape3_2.png"
            width="323"
            height="646"
          />
        </div>
        <div className="container">
          <div className="title-area mx-auto">
            <h5 className="subtitle text-center">
              {" "}
              <span className="me-2">
                <Image
                  alt="icon"
                  src="/assets/img/icon/titleIcon.png"
                  width="28"
                  height="12"
                />
              </span>{" "}
              {t("pricingSection.subtitle")}{" "}
              <span className="ms-2">
                <Image
                  alt="icon"
                  src="/assets/img/icon/titleIcon.png"
                  width="28"
                  height="12"
                />
              </span>{" "}
            </h5>
            <h2 className="title text-center mb-50">{t("pricingSection.title")}</h2>
          </div>
          <div className="pricing-card-wrap  wow fadeInUp" data-wow-delay=".4s">
            {pricingCards.map((card, index) => (
              <div className="pricing-card style3" key={index}>
                <div className="pricing-card-header">
                  <div className="pricing-card-header_price">{card.price}</div>
                  <div className="pricing-card-header_text">{tr(card.period)}</div>
                </div>
                <div
                  className="pricing-card-header_badge"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                  data-bg-src
                >
                  <span>{tr(card.badgeText)}</span>
                </div>
                <p className="text">{t("pricingSection.description")}</p>
                <div className="checklist">
                  {card.features.map((feature, featureIndex) => (
                    <ul key={featureIndex}>
                      <li>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/signIcon.png"
                          width="16"
                          height="16"
                        />
                      </li>
                      <li>{tr(feature)}</li>
                    </ul>
                  ))}
                </div>
                <div className="btn-wrapper">
                  <Link
                    scroll={false}
                    className={`gt-btn ${card.buttonClass}`}
                    href={`/pricing`}
                  >
                    {t("pricingSection.button")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
