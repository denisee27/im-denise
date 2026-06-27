import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, X } from 'lucide-react';

const projects = [
  {
    title: 'AI Receptionist',
    category: 'Full-Stack • AI',
    description: 'Interactive AI receptionist with facial recognition for seamless visitor management.',
    video: '/ai_receptionist.webm',
    tools: ['React Vite', 'Express.js', 'Google ADK', 'TensorFlow.js', 'Three.js', 'Socket.io', 'Tailwind CSS']
  },
  {
    title: 'Real-time Voice Translator',
    category: 'Full-Stack • AI',
    description: 'Real-time bilingual voice translator designed to bridge communication gaps instantly.',
    video: '/translator.webm',
    tools: ['React Vite', 'Express.js', 'Speech To Text Google', 'Google Cloud Translation', 'Socket.io', 'FastAPI', 'Tailwind CSS']
  },
  {
    title: 'Asset Management System',
    category: 'Enterprise • Web',
    description: 'Comprehensive system supporting 670+ users, seamlessly integrated with SAP.',
    video: '/asset_management_system.webm',
    tools: ['React Vite', 'Express.js', 'SAP Integration', 'PostgreSQL']
  },
  {
    title: 'Offline-First Inventory App',
    category: 'Mobile • Flutter',
    description: 'Mobile application engineered for field operations with low internet connectivity.',
    video: '/inventory_mobile.webm',
    tools: ['Flutter', 'Dart', 'MySQL', 'Laravel Lumen']
  },
  {
    title: 'Customer Support Module',
    category: 'Enterprise • Web',
    description: 'An integrated support module for managing tickets and resolving customer issues efficiently.',
    video: '/support_module.webm',
    tools: ['React Vite', 'Express.js', 'MySQL', 'Redis']
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      // Disable Lenis smooth scrolling if it's active
      document.documentElement.setAttribute('data-lenis-prevent', 'true');
    } else {
      document.body.style.overflow = '';
      document.documentElement.removeAttribute('data-lenis-prevent');
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.removeAttribute('data-lenis-prevent');
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    <section id="projects" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-neutral-900 text-neutral-50 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="project-header text-sm font-medium tracking-widest uppercase mb-16 text-neutral-400">
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="project-card group cursor-pointer flex flex-col border border-neutral-800 hover:border-neutral-600 transition-colors duration-300 relative overflow-hidden bg-neutral-900"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b border-neutral-800">
                <video
                  src={project.video}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>

              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between gap-4">
                <div>
                  <span className="block text-xs font-mono text-neutral-400 mb-2">{project.category}</span>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-1 bg-neutral-800 text-neutral-300 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          data-lenis-prevent
        >
          <div
            className="bg-neutral-900 border border-neutral-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white backdrop-blur-sm transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full bg-black aspect-video relative border-b border-neutral-800">
              <video
                src={selectedProject.video}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-mono rounded-full">
                  {selectedProject.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-neutral-300 font-light leading-relaxed text-base md:text-lg">
                {selectedProject.description}
              </p>

              <div className="mt-2">
                <h4 className="text-sm font-medium text-neutral-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1.5 bg-neutral-800/50 border border-neutral-700 text-neutral-300 text-xs font-mono rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}