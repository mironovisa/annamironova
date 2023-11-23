import React, { useState } from "react";
import "./App.css";
import { bart, russia, uk, sketch1 } from "./assets";
import Images from "./Images";
import ContactForm from "./ContactForm";
import i18n from "i18next";
import {
  useTranslation,
  initReactI18next,
  I18nextProvider,
} from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import ruTranslation from "./locales/ru/translation.json";
const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});
const App = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("ru");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };
  return (
    <I18nextProvider i18n={i18n}>
      <div className="page">
        <div className="container">
          <div className="navbar">
            <div className="navbar-left">
              <div className="name">AN.SM</div>
            </div>
            <div className="navbar-right">
              <ul>
                <li>
                  <a href="#paintings">{t("navbar.paintings")}</a>
                </li>
                <li>
                  <a href="#exhibitions">{t("navbar.exhibitions")}</a>
                </li>
                <li>
                  <a href="#sketches">{t("navbar.sketches")}</a>
                </li>
                <li>
                  <a href="#contacts">{t("navbar.contacts")}</a>
                </li>
                <button
                  onClick={() =>
                    changeLanguage(language === "ru" ? "en" : "ru")
                  }
                >
                  {language === "ru" ? (
                    <div className="button-set">
                      <img src={uk} alt="English" className="button-icon" />
                      <p className="mobile-button-text">English</p>
                    </div>
                  ) : (
                    <div className="button-set">
                      <img src={russia} alt="Russian" className="button-icon" />
                      <p className="mobile-button-text">Русский</p>
                    </div>
                  )}
                </button>
              </ul>
            </div>
          </div>
          {/* <img className="logo-pixel" src={logo} alt="Logo Anna Mironova" /> */}
          <div className="section-image-overlay"></div>
          <div id="paintings" className="section-my-works">
            <div className="section-title">
              <fieldset>
                <legend>{t("navbar.paintings")}</legend>
              </fieldset>
            </div>
            <Images />
          </div>
          <div id="exhibitions" className="section-my-works-two">
            <div className="section-title">
              <fieldset>
                <legend>{t("navbar.exhibitions")}</legend>
              </fieldset>
            </div>
            <div className="story">
              <div className="image-float-right">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("texts.gallery_description"),
                  }}
                />
                <img src={bart} alt="Галерея Бартеньева" />
              </div>
              <div className="image-float-left">
                <p>{t("texts.exhibition_description")}</p>
                <iframe
                  width="500"
                  height="305"
                  src="https://www.youtube.com/embed/ZiiVdXsYTCo?si=RarK5805SvvC1Tnf"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="iframe-player"
                  allowfullscreen
                ></iframe>
              </div>

              <iframe
                width="300"
                height="305"
                src="https://www.youtube.com/embed/ZiiVdXsYTCo?si=RarK5805SvvC1Tnf"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="iframe-player-mobile"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div id="sketches" className="section-my-works">
            <fieldset>
              <legend>{t("navbar.sketches")}</legend>
            </fieldset>
            <div className="scetches-mobile">
              <img src={sketch1} alt="Anna Mironova" />
            </div>
          </div>
          <div className="section-my-works">
            <div className="section-title">
              <fieldset>
                <legend>{t("navbar.contacts")}</legend>
              </fieldset>
            </div>
            <div id="contacts" className="section-my-works">
              <ContactForm />
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default App;
