import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Achievements = lazy(() => import('./pages/Achievements'));

const routes = [
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/projects', Component: Projects },
  { path: '/achievements', Component: Achievements },
];

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.25, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

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
  const PageTransition = ({ children }) => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="flex flex-col flex-grow"
    >
      {children}
    </motion.div>
  );

  return (
    <div className="w-full flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow flex flex-col">
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