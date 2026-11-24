import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { contactHref } from '../../contact';

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About Me' },
  { to: '/certifications', label: 'Certifications' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function handleEscape(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-divider bg-canvas/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="site-container flex items-center justify-between gap-3 py-3"
        onKeyDown={handleEscape}
      >
        <Link to="/" className="brand-link" onClick={() => setMenuOpen(false)}>
          <img src={process.env.PUBLIC_URL + '/page-icon.png'} width={32} height={32} alt="" className="shrink-0 rounded-lg" />
          <span>JL Website</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <div id="site-navigation" className="site-navigation" data-open={menuOpen}>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end className="navigation-link" onClick={() => setMenuOpen(false)}>
              {label}
            </NavLink>
          ))}
          <a href={contactHref} className="button button-secondary" onClick={() => setMenuOpen(false)}>
            Let’s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
