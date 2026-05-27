import type { Metadata } from 'next';
import { LegacyInteractions } from '../../components/LegacyInteractions';
import { LegacyMarkup } from '../../components/LegacyMarkup';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about ChatSales™ product fit, setup, integrations, pricing, security, and compliance.',
};

export default function FaqPage() {
  return (
    <main>
      <LegacyMarkup section="faq" />
      <LegacyInteractions />
    </main>
  );
}
