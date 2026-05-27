import type { Metadata } from 'next';
import { LegacyMarkup } from '../../components/LegacyMarkup';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'ChatSales™ is tuned for home services, legal intake, dental practices, and senior living teams.',
};

export default function IndustriesPage() {
  return (
    <main>
      <LegacyMarkup section="industries" />
    </main>
  );
}
