import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '7,000+', label: 'Corporate Assets Managed' },
  { value: '70%', label: 'Operational Efficiency Boost' },
  { value: '100%', label: 'Zero-Downtime Deploys' }
];

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-neutral-900 text-neutral-50 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-neutral-800/0 md:divide-neutral-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item text-center md:px-8 first:pl-0 last:pr-0">
              <div className="text-4xl md:text-6xl font-serif mb-2 tracking-tight">{stat.value}</div>
              <div className="text-sm md:text-base text-neutral-500 font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}