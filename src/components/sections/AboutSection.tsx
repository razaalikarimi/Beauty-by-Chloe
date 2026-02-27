'use client';

import React, { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: '12+', label: 'Years of Excellence' },
    { value: '50K+', label: 'Happy Clients' },
    { value: '25', label: 'Expert Stylists' },
    { value: '5★', label: 'Average Rating' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );

      tl.fromTo(titleRef.current,
        { opacity: 0, y: 50, rotateX: 8 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, ease: 'power4.out' },
        '-=0.3'
      );

      tl.fromTo(text1Ref.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      );

      tl.fromTo(text2Ref.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.4'
      );

      // Stats stagger
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 40, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12 },
          '-=0.3'
        );
      }

      // Counter animation for stats
      if (statsRef.current) {
        const statElements = statsRef.current.querySelectorAll('.about__stat-value');
        statElements.forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0.3 },
            {
              opacity: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about" id="gallery">
      <div className="about__inner">
        <div className="about__content">
          <span ref={eyebrowRef} className="about__eyebrow" style={{ opacity: 0 }}>Our Story</span>
          <h2 ref={titleRef} className="about__title" style={{ opacity: 0 }}>
            Crafting Beauty<br />Since 2014
          </h2>
          <p ref={text1Ref} className="about__text" style={{ opacity: 0 }}>
            Founded by Chloe Anderson with a singular vision: to create a beauty
            sanctuary that transcends the ordinary. Every treatment, every detail,
            every moment at Beauty by Chloe is designed to make you feel extraordinary.
          </p>
          <p ref={text2Ref} className="about__text" style={{ opacity: 0 }}>
            Our team of world-class stylists, therapists, and beauty experts bring
            decades of combined experience and an unwavering commitment to perfection.
            We don&apos;t just offer services — we create experiences.
          </p>
        </div>

        <div ref={statsRef} className="about__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about__stat" style={{ opacity: 0 }}>
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
export default AboutSection;
