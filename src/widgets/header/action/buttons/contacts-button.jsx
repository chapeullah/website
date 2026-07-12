import { NavLink } from 'react-router-dom';

import ContactIcon from '@icons/contact/contact-icon.jsx';
import { contactsLink } from '@widgets/header/links.js';

export default function ContactsButton({onNavClick}) {
  return (
    <NavLink
      to={contactsLink.to}
      className={({ isActive }) =>
        `action-button ${isActive ? "button-selected" : ""}`
      }
      onClick={onNavClick}
    >
      <ContactIcon className="action-button__icon" />
    </NavLink>
  );
}