import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full p-6 md:px-12 md:py-8 z-50 mix-blend-difference text-white">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" className="nav-item text-xl font-bold tracking-tighter uppercase">
          Denise Aldianto
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#about" className="nav-item hover:opacity-70 transition-opacity">About</a>
          <a href="#services" className="nav-item hover:opacity-70 transition-opacity">Services</a>
          <a href="#projects" className="nav-item hover:opacity-70 transition-opacity">Projects</a>
          <a href="#experience" className="nav-item hover:opacity-70 transition-opacity">Experience</a>
        </div>
      </nav>
    </header>
  );
}