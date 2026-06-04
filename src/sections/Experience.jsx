import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const experiences = [
  {
    company: 'Point Star Indonesia',
    role: 'Application Engineering',
    period: 'Apr 2025 - Now',
    points: [
      'Spearheaded development of AI-first SaaS products, engineering real-time bilingual voice translators and an interactive AI Receptionist with facial recognition using WebSockets, Python, and Gemini-native-audio.',
      'Architected scalable, event-driven GCP infrastructures (Cloud Run, Cloud Functions, Pub/Sub) and implemented highly secure CI/CD pipelines using Workload Identity Federation (WIF).',
      'Designed automated enterprise workflows and ticketing systems by deploying on-premise n8n agents and utilizing Google Workspace integrations with Pub/Sub triggers.',
      'Established enterprise-grade engineering standards with comprehensive boilerplates (React, Zustand, Prisma, Zod) and integrated Stripe and Xendit for global payments.'
    ]
  },
  {
    company: 'PT. Indokarya Mandiri Optima',
    role: 'Software Developer',
    period: 'Feb 2023 - Apr 2025',
    points: [
      'Architected an Asset Management System (Laravel, Angular JS) supporting over 670 users, integrating with SAP to track 7,000+ corporate assets with dynamic approvals.',
      'Developed an offline-first mobile Inventory Management System using Flutter, engineering features like secure photo evidence and offline stock synchronization.',
      'Engineered a full-scale POS system and advanced MVPs for B2B E-commerce featuring complex Payment Gateway and PayLater API integrations.',
      'Managed end-to-end infrastructure by provisioning Linux Debian servers, configuring Nginx, and implementing SSL certificates.'
    ]
  },
  {
    company: 'PT. Virtus Facility Service',
    role: 'Junior IT Programmer',
    period: 'Jun 2022 - Feb 2023',
    points: [
      'Engineered two operational management applications using Laravel, digitizing daily workflows for over 600 active field personnel.',
      'Built automated reporting modules, replacing manual Excel processes and reducing administrative reporting time by roughly 70%.',
      'Managed deployment and server infrastructure by provisioning Windows-based VMs on GCP and internal servers.',
      'Directed user training programs and facilitated system onboarding across 35+ operational areas.'
    ]
  }
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.exp-item', {
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
    <section id="experience" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-neutral-50 text-neutral-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="exp-header text-sm font-medium tracking-widest uppercase mb-16 text-neutral-500">
          Working Experience
        </h2>

        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-item relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                <div className="md:col-span-1 mb-4 md:mb-0 text-neutral-500 font-mono text-sm">
                  {exp.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-serif font-semibold mb-1">{exp.role}</h3>
                  <div className="text-lg text-neutral-600 mb-6 font-medium">{exp.company}</div>
                  <ul className="space-y-4">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-neutral-600 font-light leading-relaxed flex items-start gap-3">
                        <span className="mt-2.5 w-1.5 h-1.5 bg-neutral-300 rounded-full shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40">
          <h2 className="exp-header text-sm font-medium tracking-widest uppercase mb-16 text-neutral-500">
            Education
          </h2>
          <div className="exp-item relative pl-8 md:pl-0">
            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
              <div className="md:col-span-1 mb-4 md:mb-0 text-neutral-500 font-mono text-sm">
                2020 - 2024
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-serif font-semibold mb-1">Bachelor of Information Systems</h3>
                <div className="text-lg text-neutral-600 mb-6 font-medium">Mercu Buana University (GPA 3.85 / 4.00)</div>
                <ul className="space-y-4">
                  <li className="text-neutral-600 font-light leading-relaxed flex items-start gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 bg-neutral-300 rounded-full shrink-0"></span>
                    <span>"Prediction Analysis of Sleep Disorders Using Machine Learning-Based Techniques" (Jurnal Sistem Informasi Bisnis, 2025)</span>
                  </li>
                  <li className="text-neutral-600 font-light leading-relaxed flex items-start gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 bg-neutral-300 rounded-full shrink-0"></span>
                    <span>Developed and evaluated machine learning models (Naive Bayes, Support Vector Machine, K-Nearest Neighbor, Logistic Regression, CNN, LSTM) to predict health data with high accuracy.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}