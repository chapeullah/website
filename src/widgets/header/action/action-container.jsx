import MobileMenu from "@widgets/header/action/mobile-menu/mobile-menu.jsx";

import ContactButton from "./contact-button.jsx";
import GitHubButton from "./github-button.jsx";

import "./action-container.css";

export default function ActionContainer() {
  return (
    <div className="action-container">
      <GitHubButton />
      <ContactButton />
      <MobileMenu />
    </div>
  );
}