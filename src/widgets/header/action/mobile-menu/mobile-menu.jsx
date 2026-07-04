import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './mobile-menu.css';
import Button from '@ui/button/index.js';
import GitHubButton from '@pages/home/sections/hero/github-button/github-button.jsx';
import ContactIcon from '@icons/contact/contact-icon.jsx';
import InfoIcon from '@icons/info/info-icon.jsx';
import HomeIcon from '@icons/home/home-icon.jsx';
import HomeButton from '@widgets/header/nav/home-button.jsx';
import GitHubLogo from '@logos/github/github-logo.jsx';
import Divider from '@ui/divider/divider.jsx';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const getLinkClassName = ({ isActive }) =>
    `mobile-menu__link ${isActive ? 'mobile-menu__link--selected' : ''}`;

  return (
    <div className="mobile-menu">
      <button
        className={`mobile-menu__button ${
          isOpen ? 'mobile-menu__button--open' : ''
        }`}
        type="button"
        onClick={handleMenuToggle}
        aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
        aria-expanded={isOpen}
      >
        <span className="mobile-menu__button-line" />
        <span className="mobile-menu__button-line" />
        <span className="mobile-menu__button-line" />
      </button>

      <div
        className={`mobile-menu__content ${
          isOpen ? 'mobile-menu__content--open' : ''
        }`}
      >
        <NavLink
          to="/"
          end
          className={getLinkClassName}
          onClick={handleMenuClose}
        >
          <HomeIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={getLinkClassName}
          onClick={handleMenuClose}
        >
          <InfoIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">About</span>
        </NavLink>

        <Divider />

        <NavLink
          to="/contact"
          className={getLinkClassName}
          onClick={handleMenuClose}
        >
          <ContactIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">Contact</span>
        </NavLink>

        <a
          href="https://github.com/chapeullah"
          className="mobile-menu__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogo className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">GitHub</span>
        </a>
      </div>
    </div>
  );
}