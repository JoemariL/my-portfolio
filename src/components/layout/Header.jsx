import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About Me' },
];

const linkClass = ({ isActive }) =>
  `transition-colors duration-200 hover:text-accent ${
    isActive ? 'text-accent' : 'text-foreground'
  }`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on any navigation
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  // Close with Escape
  useEffect(() => {
    if (!showMenu) return;
    const onKey = (e) => e.key === 'Escape' && setShowMenu(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showMenu]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full shrink-0 bg-canvas/95 backdrop-blur-md
                 text-foreground border-b border-divider"
    >
      <nav className="site-container flex items-center justify-between gap-4 py-4">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-md text-lg font-semibold text-foreground transition-colors hover:text-accent sm:text-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <img
            src={process.env.PUBLIC_URL + '/page-icon.png'}
            width={32}
            height={32}
            alt=""
            className="rounded-lg"
          />
          <span>JL Website</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-4 text-base">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={(state) => `${linkClass(state)} px-3 py-1`}>
              {label}
            </NavLink>
          ))}
        </div>

        <a href="mailto:lopezjoemari1@gmail.com" className="button button-secondary hidden md:inline-flex">
          Let’s talk
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setShowMenu((s) => !s)}
          className="sm:hidden p-1 rounded-md focus:outline-none
                     focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Toggle menu"
          aria-expanded={showMenu}
        >
          {showMenu ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
        </button>
      </nav>

      {/* Mobile menu: overlays the page instead of pushing it, so nothing jumps */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="sm:hidden absolute top-full left-0 w-full bg-surface
                       border-t border-divider shadow-lg"
          >
            <div className="site-container flex flex-col gap-4 py-5">
              {links.map(({ to, label }) => (
                <NavLink key={to} to={to} end={to === '/'} className={(state) => `${linkClass(state)} text-base`}>
                  {label}
                </NavLink>
              ))}
              <a href="mailto:lopezjoemari1@gmail.com" className="button button-secondary self-start">
                Let’s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;