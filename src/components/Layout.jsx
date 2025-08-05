// Layout.jsx
import Footer from './Footer';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="app-container">
      <header id="header">
        <NavBar
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
      </header>
      <main className="page-content" onClick={closeMenu}>
        <Outlet />
      </main>
    </div>
  );
}
