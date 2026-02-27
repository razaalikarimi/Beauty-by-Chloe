'use client';

import React, { memo } from 'react';
import { SalonRoom } from '@/types';
import { cn } from '@/lib/utils';

interface ServiceModalProps {
  room: SalonRoom;
  isVisible: boolean;
}

const ServiceModal: React.FC<ServiceModalProps> = memo(({ room, isVisible }) => {
  return (
    <div
      className={cn('service-modal', isVisible && 'service-modal--visible')}
    >
      <div className="service-modal__glass">
        <div className="service-modal__header">
          <span className="service-modal__icon">{room.icon}</span>
          <h3 className="service-modal__title">{room.name}</h3>
          <p className="service-modal__tagline">{room.tagline}</p>
        </div>

        <div className="service-modal__services">
          {room.services.map((service, i) => (
            <div
              key={service.name}
              className={cn(
                'service-card',
                service.featured && 'service-card--featured',
                isVisible && 'service-card--visible'
              )}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {service.featured && (
                <span className="service-card__badge">Most Popular</span>
              )}
              <h4 className="service-card__name">{service.name}</h4>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__meta">
                <span className="service-card__duration">{service.duration}</span>
                <span className="service-card__price">{service.price}</span>
              </div>
              <button
                className="service-card__cta"
                onClick={() => {
                  const booking = document.querySelector('#booking');
                  if (booking) booking.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

ServiceModal.displayName = 'ServiceModal';
export default ServiceModal;
