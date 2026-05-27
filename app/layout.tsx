import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FloatingDemoPill } from '../components/FloatingDemoPill';
import { Footer } from '../components/Footer';
import { JourneyStrip } from '../components/JourneyStrip';
import { SiteNav } from '../components/SiteNav';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'ChatSales™ | More Booked Jobs. More Closed Cases.',
    template: '%s | ChatSales™',
  },
  description: 'ChatSales™ helps home services, legal, dental and senior living teams respond instantly, qualify naturally and win more high-value inbound leads.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteNav />
        <JourneyStrip />
        {children}
        <Footer />
        <FloatingDemoPill />
      </body>
    </html>
  );
}
