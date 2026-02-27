'use client';

import React, { memo, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SalonRoom } from '@/types';
import { cn } from '@/lib/utils';
import ServiceModal from '@/components/ui/ServiceModal';

gsap.registerPlugin(ScrollTrigger);

interface RoomSectionProps {
  room: SalonRoom;
  index: number;
}

const RoomSection: React.FC<RoomSectionProps> = memo(({ room, index }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  const isEven = index % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Image reveal with clip-path ──
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          duration: 1.4,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // ── Image parallax (slow) ──
      gsap.to(imageInnerRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // ── Content stagger timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      // Decorative line
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power3.out' }
      );

      // Eyebrow
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, x: isEven ? -30 : 30 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );

      // Title (split chars manually via GSAP)
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, rotateX: 10 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, ease: 'power4.out' },
        '-=0.3'
      );

      // Description
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      );

      // Service modal
      tl.fromTo(
        modalRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      );

      // Room number
      tl.fromTo(
        numberRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 0.12, scale: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

      // ── Ambient glow ──
      gsap.fromTo(
        glowRef.current,
        { opacity: 0 },
        {
          opacity: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, [isEven, index]);

  return (
    <section
      ref={sectionRef}
      className="room-section"
      id={`room-${room.id}`}
      style={{
        '--room-glow': room.glowColor,
        '--room-ambient': room.ambientColor,
      } as React.CSSProperties}
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="room-section__glow"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? '30%' : '70%'} 50%, ${room.ambientColor}, transparent 70%)`,
          opacity: 0,
        }}
      />

      <div className={cn('room-section__inner', isEven ? 'room-section__inner--left' : 'room-section__inner--right')}>
        {/* Image Side */}
        <div className="room-section__image-wrapper">
          <div
            ref={imageRef}
            className="room-section__image-container"
            style={{ opacity: 0 }}
          >
            <div
              ref={imageInnerRef}
              className="room-section__image-parallax"
              style={{ willChange: 'transform' }}
            >
              <Image
                src={room.image}
                alt={`${room.name} at Beauty by Chloe`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="room-section__image"
                loading="lazy"
              />
            </div>
            <div className="room-section__image-overlay" />

            {/* Shimmer overlay on hover */}
            <div className="room-section__shimmer" />

            {/* Room number */}
            <div ref={numberRef} className="room-section__number" style={{ opacity: 0 }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div ref={contentRef} className="room-section__content">
          <div className="room-section__content-inner">
            {/* Decorative line */}
            <div
              ref={lineRef}
              className="room-section__deco-line"
              style={{ transformOrigin: isEven ? 'left' : 'right', transform: 'scaleX(0)' }}
            />

            <span ref={eyebrowRef} className="room-section__eyebrow" style={{ opacity: 0 }}>
              {room.icon} {room.tagline}
            </span>

            <h2 ref={titleRef} className="room-section__title" style={{ opacity: 0 }}>
              {room.name}
            </h2>

            <p ref={descRef} className="room-section__description" style={{ opacity: 0 }}>
              {room.description}
            </p>

            <div ref={modalRef} style={{ opacity: 0 }}>
              <ServiceModal room={room} isVisible={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

RoomSection.displayName = 'RoomSection';
export default RoomSection;
