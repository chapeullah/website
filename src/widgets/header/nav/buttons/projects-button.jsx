import { NavLink } from "react-router-dom";

import { useLanguage } from "@i18n/use-language.js";
import { navigation } from "@config/navigation.js";
import FileIcon from "@icons/file/file-icon.jsx";

export default function ProjectsButton() {
  const { t } = useLanguage();
  const i18n = t.header;

  return (
    <NavLink
      to={navigation.projects.to}
      className={({ isActive }) =>
        `nav-container__button ${isActive ? "button-selected" : ""}`
      }
    >
      <FileIcon className="nav-container__button-icon" />
      <span className="nav-container__button-text">
          <span className="nav-container__button-label">{i18n.projects}</span>
        </span>
    </NavLink>
  );
}
