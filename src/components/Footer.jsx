import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-item', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-neutral-900 text-neutral-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div>
          <h2 className="footer-item text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Let's build something <br className="hidden md:block" />
            <span className="text-neutral-500">extraordinary.</span>
          </h2>
          <div className="footer-item flex flex-col gap-4 text-neutral-400 font-light">
            <a href="mailto:denisaldian11@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
              <Mail size={18} />
              denisaldian11@gmail.com
            </a>
            <a href="mailto:denisaldian11@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
              <Phone size={18} />
              +628812812426
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              East Jakarta, Indonesia
            </div>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-8">
          <div className="footer-item flex gap-6">
            <a href="https://github.com/denisee27" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors font-medium">
              GH
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors font-medium">
              LI
            </a>
          </div>
          <p className="footer-item text-neutral-500 text-sm">
            © {new Date().getFullYear()} Denise Aldianto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}