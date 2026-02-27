'use client';

import React, { memo } from 'react';
import { useScrollProgress } from '@/hooks';

/**
 * Scroll progress indicator at the top of the page
 */
const ScrollProgressBar: React.FC = memo(() => {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        className="scroll-progress__bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
});

ScrollProgressBar.displayName = 'ScrollProgressBar';
export default ScrollProgressBar;
