"use client";
import { useLocale } from "@/context/LocaleContext";

export default function CommentForm() {
  const { t } = useLocale();

  return (
    <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="form-clt">
            <input type="text" name="name" id="name" placeholder={t("blogSection.yourName")} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-clt">
            <input
              type="text"
              name="email"
              id="email2"
              placeholder={t("blogSection.yourEmail")}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-clt">
            <textarea
              name="message"
              id="message"
              placeholder={t("blogSection.yourMessage")}
              defaultValue={""}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <button type="submit" className="gt-btn">
            {t("blogSection.postComment")}
            <i className="fa-sharp fa-light fa-arrow-right-long ms-1" />
          </button>
        </div>
      </div>
    </form>
  );
}
