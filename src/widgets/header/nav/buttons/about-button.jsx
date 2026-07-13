import { NavLink } from "react-router-dom";
import { useLanguage } from "@i18n/use-language.js";
import { navigation } from "@config/navigation.js";
import IdCardIcon from "@icons/id-card/id-card-icon.jsx";

export default function AboutButton() {
  const { t } = useLanguage();
  const i18n = t.header;

  return (
    <NavLink
      to={navigation.about.to}
      className={({ isActive }) =>
        `nav-container__button ${isActive ? "button-selected" : ""}`
      }
    >
      <IdCardIcon className="nav-container__button-icon" />
      <span className="nav-container__button-text">
          <span className="nav-container__button-label">{i18n.about}</span>
        </span>
    </NavLink>
  );
}
