"use client";
import Image from "next/image";
import { hours, sericeCategories } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import Faq1 from "../faq/Faq1";
import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function ServiceDetails({ serviceItem }) {
  const { t, tr } = useLocale();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="service-details-section space-top pb-425 fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-4 order-2 order-md-1">
                <div className="main-sidebar">
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="wid-title">
                      <h3>{t("serviceDetailsPage.allServices")}</h3>
                    </div>
                    <div className="news-widget-categories">
                      <ul>
                        {sericeCategories.map((item, index) => (
                          <li
                            key={index}
                            className={item.active ? "active" : ""}
                          >
                            <a href={`#`}>
                              {tr(item.label)}
                              <span>
                                <i className="fa-light fa-arrow-right-long" />
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="wid-title">
                      <h3>{t("serviceDetailsPage.openingHours")}</h3>
                    </div>
                    <div className="opening-category">
                      <ul>
                        {hours.map((hour, index) => (
                          <li key={index}>
                            <i className={hour.iconClass} />
                            {tr(hour.text)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-image bg-cover wow fadeInUp"
                    data-wow-delay="1s"
                    data-bg-src=""
                    style={{
                      backgroundImage:
                        "url(/assets/img/service/serviceThumb3_5.png)",
                    }}
                  >
                    <div className="contact-text">
                      <div className="icon">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <h4>{t("serviceDetailsPage.needHelp")}</h4>
                      <h5>
                        <a href="tel:+2085550112">+208-555-0112</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  <div className="details-image">
                    <Image
                      alt="img"
                      src="/assets/img/service/serviceThumb3_1.png"
                      width="770"
                      height="470"
                    />
                  </div>
                  <div className="details-content">
                    <h3 className="wow fadeInUp" data-wow-delay=".6s">
                      {tr(serviceItem.title)}
                    </h3>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".9s">
                      {t("serviceDetailsPage.intro1")}
                    </p>
                    <p className="mt-3 wow fadeInUp" data-wow-delay="1.2s">
                      {t("serviceDetailsPage.intro2")}
                    </p>
                    <div
                      className="details-video-items wow fadeInUp"
                      data-wow-delay="1.3s"
                    >
                      <div className="video-thumb">
                        <Image
                          alt="img"
                          src="/assets/img/service/serviceThumb3_2.png"
                          width="405"
                          height="257"
                        />
                        <a
                          onClick={() => setOpen(true)}
                          className="play-btn popup-video"
                        >
                          <i className="fa-sharp fa-solid fa-play" />
                        </a>
                      </div>
                      <div className="content">
                        <h4>{t("serviceDetailsPage.benefitsTitle")}</h4>
                        <p>
                          {t("serviceDetailsPage.benefitsText")}
                        </p>
                        <ul className="list ps-0">
                          <li>
                            <i className="fa-regular fa-circle-check" />
                            {t("serviceDetailsPage.benefit1")}
                          </li>
                          <li>
                            <i className="fa-regular fa-circle-check" />
                            {t("serviceDetailsPage.benefit2")}
                          </li>
                          <li>
                            <i className="fa-regular fa-circle-check" />
                            {t("serviceDetailsPage.benefit3")}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="mb-40 wow fadeInUp" data-wow-delay="1.5s">
                      {t("serviceDetailsPage.outro")}
                    </p>
                    <div
                      className="image-area wow fadeInUp"
                      data-wow-delay="1.6s"
                    >
                      <div className="row g-4">
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb">
                            <Image
                              alt="img"
                              src="/assets/img/service/serviceThumb3_3.png"
                              width="370"
                              height="307"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb">
                            <Image
                              alt="img"
                              src="/assets/img/service/serviceThumb3_4.png"
                              width="370"
                              height="307"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="wow fadeInUp" data-wow-delay="1.8s">
                      {t("serviceDetailsPage.faqTitle")}
                    </h3>
                    <p className="mt-25 wow fadeInUp" data-wow-delay="1.9s">
                      {t("serviceDetailsPage.faqText")}
                    </p>
                  </div>
                  <div className="faq-content style-3">
                    <div className="faq-accordion">
                      <Faq1 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="f2Gzr8sAGB8"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
