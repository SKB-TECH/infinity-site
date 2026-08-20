"use client";

import React from "react";
import { useLocale } from "@/context/LocaleContext";

export default function HeaderTop() {
  const { t } = useLocale();

  return (
    <div className="header-top-section style1 fix">
      <div className="container">
        <div className="header-top-wrapper">
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope" />
              <a href="mailto:contact@infinityinnovation.tech" className="link">
                contact@infinityinnovation.tech
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone-volume" />
              <a href="tel:+243813678926">+243 813 678 926</a>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <span>{t("headerTop.followUs")}</span>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
