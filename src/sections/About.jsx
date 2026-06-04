import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-neutral-900 text-neutral-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="about-text text-sm font-medium tracking-widest uppercase mb-4 text-neutral-400">
            About Me
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-2xl md:text-4xl leading-tight font-serif mb-8">
            <span className="overflow-hidden block"><span className="about-text block">I'm a proactive developer dedicated to crafting</span></span>
            <span className="overflow-hidden block"><span className="about-text block">secure, high-performance applications from the ground up.</span></span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-400 text-lg leading-relaxed font-light">
            <p className="about-text">
              With over 4 years of experience, I specialize in modern frameworks like React, Express, and Flutter, along with advanced GCP infrastructure. My focus is on building AI-first SaaS products and automating complex workflows.
            </p>
            <p className="about-text">
              I have a proven track record of engineering zero-downtime CI/CD pipelines and developing event-driven solutions that seamlessly integrate robust software engineering with cutting-edge AI technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}