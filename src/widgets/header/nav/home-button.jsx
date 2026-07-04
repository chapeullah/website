import HomeIcon from '@icons/home/home-icon.jsx';
import { NavLink } from 'react-router-dom';
import { homeLink } from '@widgets/header/links.js';

export default function HomeButton({onNavClick}) {
  return (
    <NavLink
      to={homeLink.to}
      className={({ isActive }) =>
        `nav-container__button ${isActive ? 'button-selected' : ''}`
      }
      onClick={onNavClick}
    >
      <HomeIcon className="nav-container__button-icon" />
      <span className="nav-container__button-text">
          <span className="nav-container__button-label">Home</span>
        </span>
    </NavLink>
  );
}