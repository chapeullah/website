import InfoIcon from '@icons/info/info-icon.jsx';
import { aboutLink } from '@widgets/header/links.js';
import { NavLink } from 'react-router-dom';

export default function AboutButton({onNavClick}) {
  return (
    <NavLink
      to={aboutLink.to}
      className={({ isActive }) =>
        `nav-container__button ${isActive ? 'button-selected' : ''}`
      }
      onClick={onNavClick}
    >
      <InfoIcon className="nav-container__button-icon" />
      <span className="nav-container__button-text">
          <span className="nav-container__button-label">About</span>
        </span>
    </NavLink>
  );
}