import { useEffect, useRef, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './sections/Hero';

// Lazy load below-the-fold sections to reduce unused JS
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Stats = lazy(() => import('./sections/Stats'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Footer = lazy(() => import('./components/Footer'));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
    }, appRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={appRef} className="bg-neutral-50 text-neutral-900 min-h-screen font-sans selection:bg-neutral-900 selection:text-neutral-50">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-neutral-900" />}>
          <About />
          <Services />
          <Stats />
          <Skills />
          <Projects />
          <Experience />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;