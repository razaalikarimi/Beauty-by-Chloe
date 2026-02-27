'use client';

import React, { useEffect, useRef, memo } from 'react';

/**
 * Animated grain texture overlay for luxury aesthetic.
 * Uses pure CSS animation — zero JS overhead after mount.
 */
const GrainOverlay: React.FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 256;
    canvas.height = 256;

    // Generate a static grain texture once
    const imageData = ctx.createImageData(256, 256);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 12; // Very subtle opacity
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="grain-overlay"
      aria-hidden="true"
    />
  );
});

GrainOverlay.displayName = 'GrainOverlay';
export default GrainOverlay;
