import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/layout/Header';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about/About'));
const Projects = lazy(() => import('./pages/projects/Projects'));
const Experience = lazy(() => import('./pages/experience/Experience'));
const Achievements = lazy(() => import('./pages/achievements/Achievements'));

const routes = [
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/projects', Component: Projects },
  { path: '/experience', Component: Experience },
  { path: '/achievements', Component: Achievements },
];

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const Loading = () => (
  <div className="text-center py-10 text-accent">Loading...</div>
);

const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="page-title mb-4">404</h1>
    <p className="mb-6">Page not found.</p>
    <Link to="/" className="underline text-accent">Back to home</Link>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const hasScrollPanels = /^\/(projects|experience)\/*$/i.test(location.pathname);
  const PageTransition = ({ children }) => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="flex min-h-0 flex-grow flex-col"
    >
      {children}
    </motion.div>
  );

  return (
    <div className={`w-full flex flex-col ${hasScrollPanels ? 'h-screen supports-[height:100dvh]:h-[100dvh]' : 'min-h-screen'}`}>
      <ScrollToTop />
      <Header />
      <main className="flex min-h-0 flex-grow flex-col">
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {routes.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <PageTransition>
                      <Component />
                    </PageTransition>
                  }
                />
              ))}
              <Route
                path="*"
                element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
}

export default App;