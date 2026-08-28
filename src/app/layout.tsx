import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingCTA } from '@/components/layout/floating-cta';

export const metadata: Metadata = {
  title: {
    default: 'NHA Sourcing Service | Your Trusted Asia Sourcing Partner in Shanghai',
    template: '%s | NHA Sourcing Service',
  },
  description:
    'NHA Sourcing Service (Shanghai) Co., Ltd. — Your trusted partner for product sourcing, quality control, factory audits, and logistics across Asia. Based in Shanghai with deep access to Yangtze River Delta manufacturing.',
  keywords: [
    'sourcing agent China',
    'Shanghai sourcing company',
    'Asia materials sourcing',
    'product sourcing services',
    'quality control China',
    'factory audit China',
    'China import agent',
    'Shanghai procurement',
    'NHA Sourcing',
    'NHA Sourcing Service',
  ],
  authors: [{ name: 'NHA Sourcing Service (Shanghai) Co., Ltd.' }],
  openGraph: {
    title: 'NHA Sourcing Service | Your Trusted Asia Sourcing Partner in Shanghai',
    description:
      'Professional sourcing services across Asia. Shanghai-based experts in product sourcing, quality control, factory audits, and logistics. Get your free quote today.',
    type: 'website',
    locale: 'en_US',
    siteName: 'NHA Sourcing Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NHA Sourcing Service | Your Trusted Asia Sourcing Partner',
    description:
      'Shanghai-based sourcing agency serving global buyers. Quality control, factory audits, and end-to-end supply chain solutions across Asia.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
