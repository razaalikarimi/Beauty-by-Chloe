'use client';

import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import { useIntersection } from '@/hooks';

interface BookingCTAProps {
  variant?: 'floating' | 'section';
}

const BookingCTA: React.FC<BookingCTAProps> = memo(({ variant = 'section' }) => {
  const { ref, hasIntersected } = useIntersection(0.2);

  if (variant === 'floating') {
    return (
      <a
        href="#booking"
        className="booking-cta-float"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Book an appointment"
        id="floating-cta"
      >
        <span className="booking-cta-float__glow" />
        <span className="booking-cta-float__text">Book</span>
      </a>
    );
  }

  return (
    <div ref={ref} className="booking-cta-section" id="booking">
      <div className={cn('booking-cta-section__inner', hasIntersected && 'booking-cta-section__inner--visible')}>
        <div className="booking-cta-section__bg" />

        <div className="booking-cta-section__content">
          <span className="booking-cta-section__eyebrow">Begin Your Journey</span>
          <h2 className="booking-cta-section__title">
            Your Transformation<br />Awaits
          </h2>
          <p className="booking-cta-section__text">
            Step into a world where every detail is curated for your pleasure.
            Book your experience at Beauty by Chloe today.
          </p>

          <form className="booking-form" id="booking-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your booking request has been received. We will contact you shortly.'); }}>
            <div className="booking-form__row">
              <div className="booking-form__field">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="booking-form__input"
                  id="booking-name"
                />
              </div>
              <div className="booking-form__field">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="booking-form__input"
                  id="booking-email"
                />
              </div>
            </div>
            <div className="booking-form__row">
              <div className="booking-form__field">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="booking-form__input"
                  id="booking-phone"
                />
              </div>
              <div className="booking-form__field">
                <select className="booking-form__input" id="booking-service" required>
                  <option value="">Select Service</option>
                  <option value="spa">The Spa</option>
                  <option value="tanning">Tanning Suite</option>
                  <option value="hair">Hair Studio</option>
                  <option value="nails">Nail Bar</option>
                  <option value="facial">Facial Room</option>
                </select>
              </div>
            </div>
            <div className="booking-form__row">
              <div className="booking-form__field">
                <input
                  type="date"
                  className="booking-form__input"
                  id="booking-date"
                  required
                />
              </div>
              <div className="booking-form__field">
                <select className="booking-form__input" id="booking-time" required>
                  <option value="">Preferred Time</option>
                  <option value="morning">Morning (9:00 - 12:00)</option>
                  <option value="afternoon">Afternoon (12:00 - 17:00)</option>
                  <option value="evening">Evening (17:00 - 21:00)</option>
                </select>
              </div>
            </div>
            <div className="booking-form__field booking-form__field--full">
              <textarea
                placeholder="Special Requests (Optional)"
                className="booking-form__input booking-form__textarea"
                id="booking-notes"
                rows={3}
              />
            </div>
            <button type="submit" className="booking-form__submit" id="booking-submit">
              <span>Reserve Your Experience</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

BookingCTA.displayName = 'BookingCTA';
export default BookingCTA;
