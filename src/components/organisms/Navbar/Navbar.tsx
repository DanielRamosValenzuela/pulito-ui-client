import React from 'react';
import Link from 'next/link';
import {
  navbarStyles,
  logoStyles,
  navLinksContainer,
  navLink,
  userContainer,
  menuButton,
  userDetails,
  userName,
  userLanguage
} from './styles';

const Navbar: React.FC = () => {
  return (
    <nav className={navbarStyles()}>
      <section className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className={logoStyles()}>
          <Link href="/">
            Pulito
          </Link>
        </div>

        {/* Links de Navegación */}
        <div className={navLinksContainer()}>
          <Link href="/about" className={navLink()}>
            Acerca de
          </Link>
          <Link href="/services" className={navLink()}>
            Servicios
          </Link>
          <Link href="/contact" className={navLink()}>
            Contacto
          </Link>
        </div>

        {/* Parte de Usuario  */}
        <section className={userContainer()}>
          <button className={menuButton()}>☰</button>
          <div className={userDetails()}>
            <span className={userLanguage()}>ES</span>
            <Link href="/help" className={navLink()}>
              Ayuda
            </Link>
            <span className={userName()}>
              Daniel
            </span>
          </div>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
