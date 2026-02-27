'use client';

import React, { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonials } from '@/data/services';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection: React.FC = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      if (headerRef.current) {
        headerTl.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
        );
      }

      // Cards stagger with 3D rotation
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 60, rotateY: 5, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Subtle hover parallax for cards
      if (gridRef.current) {
        Array.from(gridRef.current.children).forEach((card) => {
          gsap.to(card, {
            y: -8,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="testimonials" id="about">
      <div className="testimonials__inner">
        <div ref={headerRef} className="testimonials__header">
          <span className="testimonials__eyebrow" style={{ opacity: 0 }}>Client Stories</span>
          <h2 className="testimonials__title" style={{ opacity: 0 }}>Loved by Those<br />Who Expect the Finest</h2>
        </div>

        <div ref={gridRef} className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="testimonial-card"
              style={{ opacity: 0 }}
            >
              <div className="testimonial-card__stars">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <span key={j} className="testimonial-card__star">★</span>
                ))}
              </div>
              <blockquote className="testimonial-card__content">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {testimonial.name[0]}
                </div>
                <div>
                  <strong className="testimonial-card__name">{testimonial.name}</strong>
                  <span className="testimonial-card__role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';
export default TestimonialsSection;
