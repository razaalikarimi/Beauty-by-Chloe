'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { lerp, clamp } from '@/lib/utils';

/**
 * Hook that provides smooth scroll progress (0-1) using lerp interpolation.
 * Uses passive scroll listeners and RAF for 60fps performance.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const updateTarget = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    };

    const animate = () => {
      currentRef.current = lerp(currentRef.current, targetRef.current, 0.08);

      // Only update state when there's meaningful change
      if (Math.abs(currentRef.current - targetRef.current) > 0.0001) {
        setProgress(clamp(currentRef.current, 0, 1));
      } else {
        currentRef.current = targetRef.current;
        setProgress(clamp(currentRef.current, 0, 1));
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', updateTarget, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', updateTarget);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return progress;
}

/**
 * Hook that detects element intersection with viewport
 */
export function useIntersection(
  threshold = 0.1,
  rootMargin = '0px'
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasIntersected(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isIntersecting, hasIntersected };
}

/**
 * Hook for smooth parallax values based on scroll
 */
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;

      setOffset(distanceFromCenter * speed * -1);
    };

    const animate = () => {
      onScroll();
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return { ref, offset };
}

/**
 * Hook for detecting when preloader should be dismissed
 */
export function usePreloader(duration = 3000) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let rafId: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const p = clamp(elapsed / duration, 0, 1);
      setProgress(p);

      if (p < 1) {
        rafId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    rafId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(rafId);
  }, [duration]);

  return { isLoading, progress };
}

/**
 * Hook for window dimensions
 */
export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  return size;
}

/**
 * Media query hook
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/**
 * Mouse position hook for interactive effects
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return position;
}
