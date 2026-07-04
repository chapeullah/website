import './nav-container.css'

import LogoContainer from './logo/logo-container.jsx';
import AboutButton from '@widgets/header/nav/about-button.jsx';
import HomeButton from '@widgets/header/nav/home-button.jsx';

export default function NavContainer({onNavClick}) {
  return (
    <nav className="nav-container">
      <LogoContainer />
      <div className="nav-divider"/>
      <HomeButton onNavClick={onNavClick} />
      <AboutButton onNavClick={onNavClick} />
    </nav>
  )
}