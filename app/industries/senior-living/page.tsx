import type { Metadata } from 'next';
import { LegacyMarkup } from '../../../components/LegacyMarkup';

export const metadata: Metadata = {
  title: 'Senior Living',
  description: 'ChatSales™ helps senior living teams respond with speed, care, and a better tour-booking handoff.',
};

export default function SeniorLivingPage() {
  return (
    <main>
      <LegacyMarkup section="senior" />
    </main>
  );
}
