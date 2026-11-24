import { useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation, useMatch } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/about/About';
import Certifications from './pages/certifications/Certifications';
import Experience from './pages/experience/Experience';

function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="page-title mb-4">404</h1>
      <p className="mb-6">Page not found.</p>
      <Link to="/" className="text-accent underline">Back to home</Link>
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const isExperience = useMatch('/experience');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`flex w-full flex-col ${isExperience ? 'experience-shell' : 'min-h-screen'}`}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex min-h-0 flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/achievements" element={<Navigate to="/certifications" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
