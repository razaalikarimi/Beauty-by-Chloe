import { SalonRoom } from '@/types';

export const salonRooms: SalonRoom[] = [
  {
    id: 'spa',
    name: 'The Spa',
    tagline: 'Transcend the Ordinary',
    description:
      'Immerse yourself in a sanctuary of calm. Our spa treatments blend ancient healing traditions with modern luxury, restoring balance to body and mind.',
    image: '/images/rooms/spa.png',
    icon: '✦',
    ambientColor: 'rgba(203, 170, 129, 0.15)',
    glowColor: '#CBAA81',
    services: [
      {
        name: 'Signature Relaxation',
        price: '£120',
        duration: '60 min',
        description: 'Full-body massage with aromatherapy oils tailored to your needs.',
      },
      {
        name: 'Royal Indulgence',
        price: '£195',
        duration: '90 min',
        description: 'Hot stone therapy with deep tissue work and scalp massage.',
        featured: true,
      },
      {
        name: 'Couples Retreat',
        price: '£350',
        duration: '120 min',
        description: 'Side-by-side treatments with champagne and private suite access.',
      },
    ],
  },
  {
    id: 'tanning',
    name: 'Tanning Suite',
    tagline: 'Golden Hour, Every Hour',
    description:
      'Achieve a flawless, sun-kissed glow year-round. Our premium tanning solutions deliver natural-looking radiance with luxurious precision.',
    image: '/images/rooms/tanning.png',
    icon: '☀',
    ambientColor: 'rgba(221, 161, 94, 0.12)',
    glowColor: '#DDA15E',
    services: [
      {
        name: 'Express Glow',
        price: '£45',
        duration: '20 min',
        description: 'Quick spray tan with premium organic solution for an instant glow.',
      },
      {
        name: 'Luxury Bronze',
        price: '£75',
        duration: '45 min',
        description: 'Custom-blend spray tan with skin prep and hydration treatment.',
        featured: true,
      },
      {
        name: 'Red Carpet Ready',
        price: '£110',
        duration: '60 min',
        description: 'Full body exfoliation, tan application, and setting mist for a flawless finish.',
      },
    ],
  },
  {
    id: 'hair-studio',
    name: 'Hair Studio',
    tagline: 'Where Art Meets Precision',
    description:
      'From classic elegance to avant-garde styling, our master stylists craft looks that define you. Every cut tells a story.',
    image: '/images/rooms/hair-studio.png',
    icon: '✂',
    ambientColor: 'rgba(162, 141, 129, 0.15)',
    glowColor: '#A28D81',
    services: [
      {
        name: 'Signature Cut & Style',
        price: '£85',
        duration: '60 min',
        description: 'Consultation, precision cut, and blowout by a senior stylist.',
      },
      {
        name: 'Colour Artistry',
        price: '£165',
        duration: '120 min',
        description: 'Bespoke colour work including balayage, highlights, or full transformation.',
        featured: true,
      },
      {
        name: 'Bridal Luxe',
        price: '£285',
        duration: '150 min',
        description: 'Full bridal styling with trial, day-of styling, and premium finishing products.',
      },
    ],
  },
  {
    id: 'nail-bar',
    name: 'Nail Bar',
    tagline: 'Artistry at Your Fingertips',
    description:
      'Meticulous detail meets creative expression. Our nail artists transform every hand into a masterpiece with luxurious care.',
    image: '/images/rooms/nail-bar.png',
    icon: '💎',
    ambientColor: 'rgba(144, 123, 122, 0.15)',
    glowColor: '#907B7A',
    services: [
      {
        name: 'Classic Manicure',
        price: '£45',
        duration: '45 min',
        description: 'Shape, cuticle care, hand massage, and polish application.',
      },
      {
        name: 'Gel Artistry',
        price: '£75',
        duration: '75 min',
        description: 'Long-lasting gel polish with custom nail art and premium care.',
        featured: true,
      },
      {
        name: 'Luxe Mani-Pedi',
        price: '£120',
        duration: '120 min',
        description: 'Complete hand and foot treatment with hot paraffin, exfoliation, and massage.',
      },
    ],
  },
  {
    id: 'facial',
    name: 'Facial Room',
    tagline: 'Reveal Your Radiance',
    description:
      'Advanced skincare meets luxurious pampering. Our facial treatments use cutting-edge technology and premium products for visible results.',
    image: '/images/rooms/facial.png',
    icon: '✧',
    ambientColor: 'rgba(132, 139, 130, 0.15)',
    glowColor: '#848B82',
    services: [
      {
        name: 'Signature Facial',
        price: '£95',
        duration: '60 min',
        description: 'Deep cleansing facial with extraction, mask, and LED therapy.',
      },
      {
        name: 'Anti-Aging Luxe',
        price: '£165',
        duration: '90 min',
        description: 'Microcurrent lifting, collagen infusion, and bespoke serum cocktail.',
        featured: true,
      },
      {
        name: 'Diamond Radiance',
        price: '£225',
        duration: '120 min',
        description: 'Diamond-tip microdermabrasion, oxygen therapy, and 24K gold mask.',
      },
    ],
  },
];

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Book Now', href: '#booking' },
];

export const testimonials = [
  {
    name: 'Victoria Sterling',
    role: 'Regular Client',
    content: 'Beauty by Chloe is not just a salon — it\'s an experience. The attention to detail, the ambiance, the results. Simply unmatched.',
    avatar: '',
    rating: 5,
  },
  {
    name: 'Amara Chen',
    role: 'Bridal Client',
    content: 'My bridal experience was beyond anything I imagined. The team made me feel like royalty. Every detail was perfect.',
    avatar: '',
    rating: 5,
  },
  {
    name: 'Sophie Lancaster',
    role: 'Loyal Member',
    content: 'Three years and counting. The spa treatments here have genuinely transformed my wellbeing. The quality never wavers.',
    avatar: '',
    rating: 5,
  },
];
