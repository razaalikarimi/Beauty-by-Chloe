'use client';

import React, { useState, useCallback } from 'react';
import { salonRooms } from '@/data/services';
import { Preloader, GrainOverlay, ScrollProgressBar, SmoothScrollProvider } from '@/components/animations';
import { Navbar, BookingCTA, Footer } from '@/components/ui';
import { HeroSection, RoomSection, AboutSection, TestimonialsSection } from '@/components/sections';

export default function HomePage() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <SmoothScrollProvider>
      {/* Preloader */}
      {!preloaderDone && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* Grain texture overlay */}
      <GrainOverlay />

      {/* Scroll progress indicator */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Floating CTA */}
      <BookingCTA variant="floating" />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <HeroSection />

        {/* Room Sections */}
        <div id="services">
          {salonRooms.map((room, index) => (
            <RoomSection key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* About */}
        <AboutSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Booking */}
        <BookingCTA variant="section" />
      </main>

      {/* Footer */}
      <Footer />
    </SmoothScrollProvider>
  );
}
