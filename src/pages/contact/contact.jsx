import "./contact.css";

import GithubLogo from "@logos/github/github-logo.jsx";
import MailIcon from "@icons/mail/mail-icon.jsx";
import TelegramLogo from "@logos/telegram/telegram-logo.jsx";

import { useLanguage } from "@i18n/use-language.js";
import Button from "@ui/button/index.js";
import { site } from '@i18n/site.js';

const MESSAGE_MAX_HEIGHT = 180;

function handleMessageInput(event) {
  const textarea = event.currentTarget;

  textarea.style.height = "auto";

  const nextHeight = Math.min(textarea.scrollHeight, MESSAGE_MAX_HEIGHT);

  textarea.style.height = `${nextHeight}px`;
  textarea.style.overflowY =
    textarea.scrollHeight > MESSAGE_MAX_HEIGHT ? "auto" : "hidden";
}

export default function Contact() {
  const { t } = useLanguage();

  const contactTexts = t.contact;
  const siteTexts = site;

  const contacts = [
    {
      title: "Email",
      value: siteTexts.contacts.email,
      href: `mailto:${siteTexts.contacts.email}`,
      icon: MailIcon,
    },
    {
      title: siteTexts.contacts.telegram.label,
      value: siteTexts.contacts.telegram.username,
      href: siteTexts.contacts.telegram.link,
      icon: TelegramLogo,
    },
    {
      title: siteTexts.contacts.github.label,
      value: siteTexts.contacts.github.link.replace("https://", ""),
      href: siteTexts.contacts.github.link,
      icon: GithubLogo,
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-page__header section-layout__header">
        <h1 className="contact-page__header-label section-layout__header-label">
          {contactTexts.header.label}
        </h1>

        <h2 className="contact-page__header-title section-layout__header-title">
          {contactTexts.header.title}
        </h2>
      </div>

      <div className="contact-page__content">
        <ul className="contact-page__links">
          {contacts.map((contact) => {
            const isExternalLink = !contact.href.startsWith("mailto:");
            const ContactIcon = contact.icon;

            return (
              <li className="contact-page__links-item" key={contact.title}>
                <a
                  className="contact-page__link"
                  href={contact.href}
                  target={isExternalLink ? "_blank" : undefined}
                  rel={isExternalLink ? "noreferrer noopener" : undefined}
                >
                  <span
                    className="contact-page__link-icon"
                    aria-hidden="true"
                  >
                    <ContactIcon />
                  </span>

                  <span className="contact-page__link-text">
                    <span className="contact-page__link-title">
                      {contact.title}
                    </span>

                    <span className="contact-page__link-value">
                      {contact.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <form className="contact-page__form">
          <div className="contact-page__field">
            <input
              className="contact-page__input"
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />

            <label
              htmlFor="email"
              className="contact-page__label"
              onMouseDown={(event) => event.preventDefault()}
            >
              {contactTexts.form.email}
            </label>

            <div className="contact-page__underline"></div>
          </div>

          <div className="contact-page__field contact-page__field--textarea">
            <textarea
              className="contact-page__textarea"
              id="message"
              name="message"
              placeholder=" "
              rows={1}
              required
              onInput={handleMessageInput}
            />

            <label
              htmlFor="message"
              className="contact-page__label"
              onMouseDown={(event) => event.preventDefault()}
            >
              {contactTexts.form.message}
            </label>

            <div className="contact-page__underline"></div>
          </div>

          <Button className="contact-page__button" type="submit">
            {contactTexts.form.send}
          </Button>
        </form>

        <aside className="contact-page__status">
          <p className="contact-page__status-line contact-page__status-line--main">
            {contactTexts.status.main}
          </p>

          <p className="contact-page__status-line">
            {contactTexts.status.firstLine}
          </p>

          <p className="contact-page__status-line">
            {contactTexts.status.secondLine}
          </p>
        </aside>
      </div>
    </div>
  );
}