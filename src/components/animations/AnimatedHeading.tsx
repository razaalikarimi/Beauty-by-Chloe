'use client';

import React, { useEffect, useRef, memo } from 'react';
import { useIntersection } from '@/hooks';

interface AnimatedHeadingProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  delay?: number;
  splitBy?: 'chars' | 'words';
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = memo(({
  children,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  splitBy = 'chars',
}) => {
  const { ref, hasIntersected } = useIntersection(0.3);
  const containerRef = useRef<HTMLDivElement>(null);

  const units = splitBy === 'chars' ? children.split('') : children.split(' ');

  return (
    <div ref={ref}>
      <Tag
        ref={containerRef}
        className={`animated-heading ${className}`}
        aria-label={children}
      >
        {units.map((unit, i) => (
          <span
            key={i}
            className="animated-heading__char"
            style={{
              transitionDelay: `${delay + i * (splitBy === 'chars' ? 30 : 80)}ms`,
              transform: hasIntersected ? 'translateY(0)' : 'translateY(100%)',
              opacity: hasIntersected ? 1 : 0,
            }}
            aria-hidden="true"
          >
            {unit === ' ' ? '\u00A0' : unit}
          </span>
        ))}
      </Tag>
    </div>
  );
});

AnimatedHeading.displayName = 'AnimatedHeading';
export default AnimatedHeading;
