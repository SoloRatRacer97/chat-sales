import type { Metadata } from 'next';
import { LegacyMarkup } from '../../../components/LegacyMarkup';

export const metadata: Metadata = {
  title: 'Legal Intake',
  description: 'ChatSales™ helps law firms capture every intake fact, log consent, and book consults faster.',
};

export default function LegalIntakePage() {
  return (
    <main>
      <LegacyMarkup section="legal" />
    </main>
  );
}
