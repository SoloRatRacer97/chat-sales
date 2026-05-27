import type { Metadata } from 'next';
import { LegacyMarkup } from '../../../components/LegacyMarkup';

export const metadata: Metadata = {
  title: 'Home Services',
  description: 'ChatSales™ helps home services teams answer faster, qualify better, and book more jobs.',
};

export default function HomeServicesPage() {
  return (
    <main>
      <LegacyMarkup section="home-services" />
    </main>
  );
}
