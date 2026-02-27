// ─── Beauty by Chloe — Type Definitions ──────────────────────────────────────

export interface ServiceTier {
  name: string;
  price: string;
  duration: string;
  description: string;
  featured?: boolean;
}

export interface SalonRoom {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  services: ServiceTier[];
  ambientColor: string;
  glowColor: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

export interface ScrollProgress {
  progress: number;
  section: string;
  roomIndex: number;
}
