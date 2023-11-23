import React, { useState, useRef, useEffect } from "react";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { logo } from "./assets";
const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  useEffect(() => {
    setIsCaptchaVerified(false);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i0niqya",
        "template_kzc2daj",
        form.current,
        "eVo_cbPvIHanLaD-h"
      )
      .then(
        (result) => {
          setMessageSent(true);
        },
        (error) => {
          alert(t("form.errormessage"));
        }
      );
  };

  return (
    <div className="contact">
      {messageSent ? (
        <div className="message-sent">
          {t("form.successmessage")}
          <img src={logo} alt="Message sent" />
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <label>{t("form.name")}</label>
          <input type="text" name="user_name" placeholder={t("form.phname")} />
          <label>{t("form.email")}</label>
          <input
            type="email"
            name="user_email"
            placeholder={t("form.phmessage")}
          />
          <label>{t("form.message")}</label>
          <textarea name="message" />
          <button type="submit">{t("form.sendbutton")}</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
