import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.hero-title-line', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.5
      })
        .from('.hero-desc', {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.8')
        .from('.hero-scroll', {
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        }, '-=0.5');

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto relative pt-20">
      <div className="max-w-4xl">
        <h1 className="font-serif text-5xl md:text-8xl leading-[1.1] tracking-tight mb-8">
          <div className="overflow-hidden pb-4 -mb-4"><div className="hero-title-line">Full-Stack</div></div>
          <div className="overflow-hidden pb-4 -mb-4"><div className="hero-title-line text-neutral-400">Software Engineer.</div></div>
        </h1>
        <p className="hero-desc text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed font-light mb-10">
          Architecting scalable, event-driven enterprise solutions. Bridging the gap between robust engineering and AI innovation.
        </p>
        <div className="hero-desc flex flex-wrap gap-4">
          <a
            href="/CV_Denise_2026_english.pdf"
            download="CV_Denise_2026.pdf"
            className="inline-flex items-center gap-3 bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors font-medium text-sm tracking-wide"
          >
            <Download size={16} />
            Download Resume
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-neutral-100 text-neutral-900 border border-neutral-200 px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors font-medium text-sm tracking-wide"
          >
            <MessageCircle size={16} />
            Contact Me
          </button>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-12 left-6 md:left-12 flex items-center gap-3 text-sm font-medium tracking-widest uppercase">
        <div className="w-10 h-[1px] bg-neutral-900"></div>
        <span>Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}