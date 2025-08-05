// Navbar.jsx
import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import RollingText from './animate-ui/text/RollingText';
import { useState } from "react";

export default function Navbar({ isOpen, toggleMenu }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { name: "Home", path: '/' },
    { name: "Shop", path: '/shop' },
    { name: "Weekly Blog", path: '/blog' },
    { name: "About", path: '/about' },
    { name: "Contact", path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleClick = (e) => {
    e.stopPropagation(); // Prevent menu from closing immediately
    setIsOpenHere(!isOpenHere);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar-container">
        <div>
          <RollingText className="logo" component="h1">
            MAGIC OF <br /> MUSHROOMS
          </RollingText>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.name} href={item.path} className="nav-link">
              {item.name}
            </a>
          ))}
          <button className="cta-button">Sign Up</button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <a key={item.name} href={item.path} className="nav-link">
                {item.name}
              </a>
            ))}
            <button className="cta-button mobile-cta">Sign Up</button>
          </div>
          <div className="menu-footer" onClick={(e) => e.stopPropagation()}>
            <RollingText component="h1" id="menu-footer">
              MAGIC OF MUSHROOMS
            </RollingText>
          </div>
        </>
      )}
    </nav>
  );
}
