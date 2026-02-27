'use client';

import React, { useRef, useEffect, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  scale?: boolean;
  opacity?: boolean;
}

/**
 * GPU-accelerated parallax layer using GSAP ScrollTrigger.
 * Uses only transform + opacity for zero layout recalc.
 */
const ParallaxLayer: React.FC<ParallaxLayerProps> = memo(({
  children,
  speed = 0.3,
  className = '',
  direction = 'vertical',
  scale = false,
  opacity = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const yDistance = speed * 200;
    const xDistance = speed * 100;

    const props: gsap.TweenVars = {
      ease: 'none',
    };

    if (direction === 'vertical') {
      props.y = yDistance;
    } else {
      props.x = xDistance;
    }

    if (scale) {
      props.scale = 1 + speed * 0.1;
    }

    if (opacity) {
      props.opacity = 1 - Math.abs(speed) * 0.5;
    }

    const tween = gsap.to(el, {
      ...props,
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [speed, direction, scale, opacity]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
});

ParallaxLayer.displayName = 'ParallaxLayer';
export default ParallaxLayer;
