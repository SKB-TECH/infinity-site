"use client";

import React from "react";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";

export default function ProjectDetails({ projectItem }) {
  const { t, tr } = useLocale();

  return (
    <section className="Project-details-section fix space-top pb-425">
      <div className="container">
        <div className="project-details-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-items">
                <div
                  className="details-image wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Image
                    alt="img"
                    src={projectItem.imgSrc}
                    width="1170"
                    height="550"
                  />
                </div>
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-7">
                    <div className="details-content pt-5">
                      <h3 className="wow fadeInUp" data-wow-delay=".6s">
                        {tr(projectItem.title)}
                      </h3>
                      <p className="wow fadeInUp" data-wow-delay=".9s">
                        {t("projectDetailsPage.challengeText")}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="project-catagory wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <h3>{t("projectDetailsPage.info")}:</h3>
                      <ul>
                        <li>
                          {t("projectDetailsPage.client")}:
                          <span>{t("projectDetailsPage.clientValue")}</span>
                        </li>
                        <li>
                          {t("projectDetailsPage.category")}:
                          <span>{tr(projectItem.category) ?? t("projectDetailsPage.category")}</span>
                        </li>
                        <li>
                          {t("projectDetailsPage.location")}:
                          <span>{t("projectDetailsPage.locationValue")}</span>
                        </li>
                        <li>
                          {t("projectDetailsPage.share")}:
                          <span>
                            <i className="fa-brands fa-facebook-f me-3" />
                            <i className="fa-brands fa-instagram me-3" />
                            <i className="fa-brands fa-linkedin-in" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="details-content pt-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h3>{t("projectDetailsPage.challenge")}</h3>
                  <p>
                    {t("projectDetailsPage.challengeText")}
                  </p>
                </div>
                <div className="row g-4 pt-5">
                  <div className="col-lg-3 col-md-6">
                    <ul className="list wow fadeInUp" data-wow-delay="1.2s">
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        {t("serviceDetailsPage.benefit1")}
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        {t("serviceDetailsPage.benefit2")}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <ul className="list wow fadeInUp" data-wow-delay="1.4s">
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        {t("serviceDetailsPage.benefit1")}
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        {t("serviceDetailsPage.benefit2")}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <ul className="list wow fadeInUp" data-wow-delay="1.6s">
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        {t("serviceDetailsPage.benefit1")}
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        {t("serviceDetailsPage.benefit2")}
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="details-content pt-5 wow fadeInUp"
                  data-wow-delay="1.9s"
                >
                  <h3>{t("projectDetailsPage.result")}</h3>
                  <p>
                    {t("projectDetailsPage.resultText")}
                  </p>
                </div>
                <div className="row g-4 pt-5">
                  <div className="col-lg-6 col-md-6">
                    <div className="thumb wow fadeInUp" data-wow-delay="2s">
                      <Image
                        alt="img"
                        src="/assets/img/project/projectThumb3_2.png"
                        width="570"
                        height="360"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="thumb wow fadeInUp" data-wow-delay="2.4s">
                      <Image
                        alt="img"
                        src="/assets/img/project/projectThumb3_3.png"
                        width="570"
                        height="360"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="preview-area">
                <div className="preview-item wow fadeInUp" data-wow-delay=".9s">
                  <Image
                    alt="img"
                    src="/assets/img/project/projectThumb3_4.png"
                    width="62"
                    height="62"
                  />
                  <div className="content">
                    <h3>{t("projectDetailsPage.preview")}</h3>
                    <p>{t("serviceDetailsPage.benefit3")}</p>
                  </div>
                </div>
                <div className="preview-item wow fadeInUp" data-wow-delay="1s">
                  <div className="content text-right">
                    <h3>{t("projectDetailsPage.next")}</h3>
                    <p>{t("serviceDetailsPage.benefit2")}</p>
                  </div>
                  <Image
                    alt="img"
                    src="/assets/img/project/projectThumb3_5.png"
                    width="62"
                    height="62"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
