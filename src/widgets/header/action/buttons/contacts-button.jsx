import { NavLink } from "react-router-dom";

import ContactIcon from "@icons/contact/contact-icon.jsx";
import { useLanguage } from "@i18n/use-language.js";
import { navigation } from "@config/navigation.js";

export default function ContactsButton() {
  const { t } = useLanguage();
  return (
    <NavLink
      to={navigation.contacts.to}
      aria-label={t.header.contacts}
      className={({ isActive }) =>
        `action-button ${isActive ? "button-selected" : ""}`
      }
    >
      <ContactIcon className="action-button__icon" />
    </NavLink>
  );
}
