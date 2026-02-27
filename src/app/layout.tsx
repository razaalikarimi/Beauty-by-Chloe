import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beauty by Chloe | Luxury Salon & Spa — Mayfair, London',
  description:
    'Experience unparalleled luxury at Beauty by Chloe. Premium spa treatments, hair styling, tanning, nail artistry, and facial treatments in the heart of Mayfair, London.',
  keywords: [
    'luxury salon',
    'spa London',
    'beauty salon Mayfair',
    'hair styling',
    'nail bar',
    'facial treatments',
    'tanning suite',
    'Beauty by Chloe',
  ],
  openGraph: {
    title: 'Beauty by Chloe | Luxury Salon & Spa',
    description:
      'A sanctuary where luxury meets artistry. Premium beauty services in Mayfair, London.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Beauty by Chloe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty by Chloe | Luxury Salon & Spa',
    description:
      'Experience unparalleled luxury at Beauty by Chloe. Premium beauty services in Mayfair, London.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
