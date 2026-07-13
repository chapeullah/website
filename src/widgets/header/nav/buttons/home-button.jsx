import HomeIcon from "@icons/home/home-icon.jsx";
import { NavLink } from "react-router-dom";
import { useLanguage } from "@i18n/use-language.js";
import { navigation } from "@config/navigation.js";

export default function HomeButton() {
  const { t } = useLanguage();
  const i18n = t.header;

  return (
    <NavLink
      to={navigation.home.to}
      end={navigation.home.end}
      className={({ isActive }) =>
        `nav-container__button ${isActive ? "button-selected" : ""}`
      }
    >
      <HomeIcon className="nav-container__button-icon" />
      <span className="nav-container__button-text">
          <span className="nav-container__button-label">{i18n.home}</span>
        </span>
    </NavLink>
  );
}
