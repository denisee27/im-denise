import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AI-First SaaS Platform',
    category: 'Full-Stack • AI',
    description: 'Real-time bilingual voice translator and interactive AI receptionist with facial recognition.',
    link: '#'
  },
  {
    title: 'Asset Management System',
    category: 'Enterprise • Web',
    description: 'Comprehensive system supporting 670+ users, seamlessly integrated with SAP.',
    link: '#'
  },
  {
    title: 'Offline-First Inventory App',
    category: 'Mobile • Flutter',
    description: 'Mobile application engineered for field operations with low internet connectivity.',
    link: '#'
  },
  {
    title: 'B2B E-Commerce POS',
    category: 'Full-Stack • E-Commerce',
    description: 'Full-scale POS system featuring complex Payment Gateway and PayLater API integrations.',
    link: '#'
  }
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-neutral-900 text-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="project-header text-sm font-medium tracking-widest uppercase mb-16 text-neutral-400">
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="project-card group block p-8 border border-neutral-800 hover:bg-neutral-800 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-sm font-mono text-neutral-400">{project.category}</span>
                <ArrowUpRight className="text-neutral-500 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">{project.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}