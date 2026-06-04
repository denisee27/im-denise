import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skillCategories = [
  {
    title: 'Frontend & Mobile',
    skills: ['React.js', 'Angular.js', 'Flutter', 'Zustand', 'TanStack Query', 'Tailwind CSS']
  },
  {
    title: 'Backend & API',
    skills: ['Express.js', 'Laravel', 'PostgreSQL', 'MySQL', 'Prisma', 'RESTful APIs', 'WebSockets']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['GCP', 'Docker', 'CI/CD', 'Nginx', 'Linux', 'Vercel', 'Supabase']
  },
  {
    title: 'AI & Integrations',
    skills: ['Python', 'Google Gemini', 'Machine Learning', 'n8n', 'Payment Gateways']
  }
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-category', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-neutral-100 text-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="skill-category text-sm font-medium tracking-widest uppercase mb-16 text-neutral-500">
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="text-xl font-serif font-semibold mb-6 border-b border-neutral-200 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-neutral-600 font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}