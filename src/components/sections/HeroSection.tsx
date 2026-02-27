'use client';

import React, { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // ── Entry timeline animation ──
  useEffect(() => {
    setLoaded(true);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Eyebrow slides in
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20, letterSpacing: '0.6em' },
        { opacity: 1, y: 0, letterSpacing: '0.35em', duration: 1, ease: 'power3.out' }
      );

      // Title line 1 — mask reveal
      tl.fromTo(
        titleLine1Ref.current,
        { opacity: 0, y: 80, rotateX: 15 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: 'power4.out' },
        '-=0.5'
      );

      // Title line 2 — mask reveal (stagger)
      tl.fromTo(
        titleLine2Ref.current,
        { opacity: 0, y: 80, rotateX: 15 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: 'power4.out' },
        '-=0.8'
      );

      // Subtitle fades up
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );

      // CTA buttons stagger
      tl.fromTo(
        actionsRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.15 },
        '-=0.3'
      );

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      );

      // Ambient light pulse
      gsap.to(ambientRef.current, {
        scale: 1.15,
        opacity: 0.8,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Scroll-driven parallax ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax + zoom
      gsap.to(bgRef.current, {
        yPercent: 30,
        scale: 1.2,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Content fades out and shifts up
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '20% top',
          end: '80% top',
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero" id="experience">
      {/* Multi-layer background */}
      <div ref={bgRef} className="hero__bg" style={{ willChange: 'transform' }}>
        <Image
          src="/images/hero.png"
          alt="Beauty by Chloe luxury salon interior"
          fill
          priority
          sizes="100vw"
          className="hero__bg-image"
        />
        <div className="hero__bg-overlay" />
        {/* Vignette layer */}
        <div className="hero__vignette" />
      </div>

      {/* Ambient Light Orb */}
      <div ref={ambientRef} className="hero__ambient" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {loaded && Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={contentRef} className="hero__content" style={{ willChange: 'transform, opacity' }}>
        <div className="hero__text">
          <span ref={eyebrowRef} className="hero__eyebrow" style={{ opacity: 0 }}>
            <span className="hero__eyebrow-line" />
            Mayfair, London
            <span className="hero__eyebrow-line" />
          </span>

          <h1 className="hero__title">
            <span className="hero__title-overflow">
              <span ref={titleLine1Ref} className="hero__title-line" style={{ opacity: 0 }}>Beauty</span>
            </span>
            <span className="hero__title-overflow">
              <span ref={titleLine2Ref} className="hero__title-line hero__title-line--accent" style={{ opacity: 0 }}>by Chloe</span>
            </span>
          </h1>

          <p ref={subtitleRef} className="hero__subtitle" style={{ opacity: 0 }}>
            A sanctuary where luxury meets artistry.<br />
            Your transformation begins here.
          </p>

          <div ref={actionsRef} className="hero__actions">
            <a
              href="#services"
              className="hero__cta hero__cta--primary"
              data-magnetic
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="hero__cta-shine" />
              Explore Services
            </a>
            <a
              href="#booking"
              className="hero__cta hero__cta--secondary"
              data-magnetic
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Experience
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="hero__scroll-indicator" style={{ opacity: 0 }}>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
          <span className="hero__scroll-text">Scroll to explore</span>
        </div>
      </div>

      {/* Horizontal decorative lines */}
      <div className="hero__deco-line hero__deco-line--left" />
      <div className="hero__deco-line hero__deco-line--right" />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
