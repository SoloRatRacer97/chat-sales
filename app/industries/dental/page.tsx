import type { Metadata } from 'next';
import { LegacyMarkup } from '../../../components/LegacyMarkup';

export const metadata: Metadata = {
  title: 'Dental Practices',
  description: 'ChatSales™ helps dental practices respond to implant, cosmetic, and high-value patient leads faster.',
};

export default function DentalPage() {
  return (
    <main>
      <LegacyMarkup section="dental" />
    </main>
  );
}
