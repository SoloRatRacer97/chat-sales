import type { Metadata } from 'next';
import { LegacyRouteSection } from '../components/LegacyMarkup';
import { LegacyInteractions } from '../components/LegacyInteractions';

export const metadata: Metadata = {
  title: 'ChatSales™ | More Booked Jobs. More Closed Cases.',
  description: 'Discover ChatSales™, see how it works, check whether it pays for itself, and book a demo from one page.',
};

export default function HomePage() {
  return (
    <main>
      <LegacyRouteSection id="discover" section="home" />
      <LegacyRouteSection id="see-how-it-works" section="how" />
      <LegacyRouteSection id="check-fit" section="pricing" />
      <LegacyRouteSection id="book-demo" section="demo" />
      <LegacyInteractions />
    </main>
  );
}
