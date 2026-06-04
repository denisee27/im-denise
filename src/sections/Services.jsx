import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Brain, Cloud, Code2 } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Integration & Automation',
    description: 'Building AI-first SaaS products and automating enterprise workflows using Gemini, Python, and n8n to significantly reduce operational overhead.'
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture & DevOps',
    description: 'Architecting scalable, event-driven GCP environments with zero-downtime CI/CD pipelines ensuring high availability and security.'
  },
  {
    icon: Code2,
    title: 'End-to-End Development',
    description: 'Crafting robust, high-performance web and mobile applications using React, Express, and Flutter from initial concept to final deployment.'
  }
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-neutral-100 text-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="service-header text-sm font-medium tracking-widest uppercase mb-6 text-neutral-500">
            What I Bring To The Table
          </h2>
          <p className="service-header text-2xl md:text-4xl font-serif max-w-3xl leading-tight">
            Translating complex technical requirements into <span className="text-neutral-500">scalable business solutions.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="service-card bg-white p-8 md:p-10 border border-neutral-200">
                <div className="w-14 h-14 bg-neutral-100 flex items-center justify-center rounded-full mb-8">
                  <Icon size={24} className="text-neutral-800" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">{service.title}</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}