'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'exit'>('loading');
  const containerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const startTime = Date.now();
    const duration = 2800;
    let rafId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);
      // Ease-out curve for smoother feel
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);

      if (p < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setPhase('reveal');
        setTimeout(() => {
          setPhase('exit');
          setTimeout(onComplete, 800);
        }, 600);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'preloader',
        phase === 'exit' && 'preloader--exit'
      )}
      style={{ opacity: phase === 'exit' ? 0 : 1 }}
    >
      {/* Ambient particles */}
      <div className="preloader__particles">
        {mounted && Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="preloader__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Brand Mark */}
      <div className="preloader__content">
        <div
          className={cn(
            'preloader__brand',
            phase === 'reveal' && 'preloader__brand--reveal'
          )}
        >
          <div className="preloader__icon">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
              <path
                d="M30 10 C35 20, 45 25, 45 30 C45 38, 38 45, 30 45 C22 45, 15 38, 15 30 C15 25, 25 20, 30 10Z"
                fill="currentColor"
                opacity="0.15"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle cx="30" cy="30" r="3" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          <h1 className="preloader__title">Beauty by Chloe</h1>
          <p className="preloader__tagline">Where Luxury Meets Artistry</p>
        </div>

        {/* Progress bar */}
        <div className="preloader__progress">
          <div
            className="preloader__progress-bar"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
        <span className="preloader__percentage">{Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
};

export default Preloader;
