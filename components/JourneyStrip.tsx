'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HashLink } from './HashLink';

const steps = [
  { key: 'discover', href: '/#discover', label: 'Discover' },
  { key: 'see', href: '/#see-how-it-works', label: 'See It Work' },
  { key: 'fit', href: '/#check-fit', label: 'Check Fit' },
  { key: 'book', href: '/#book-demo', label: 'Book Demo' },
];

function pathStep(pathname: string) {
  if (pathname === '/faq') return 'fit';
  if (pathname.startsWith('/industries')) return 'see';
  return 'discover';
}

export function JourneyStrip() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathStep(pathname));

  useEffect(() => {
    if (pathname !== '/') {
      setActive(pathStep(pathname));
      return;
    }

    const anchors = [
      { id: 'discover', key: 'discover' },
      { id: 'see-how-it-works', key: 'see' },
      { id: 'check-fit', key: 'fit' },
      { id: 'book-demo', key: 'book' },
    ];

    const update = () => {
      const offset = 180;
      let current = 'discover';
      for (const anchor of anchors) {
        const el = document.getElementById(anchor.id);
        if (el && el.getBoundingClientRect().top <= offset) current = anchor.key;
      }
      setActive(current);
    };

    const scrollToId = (id: string) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 142;
      window.scrollTo({ top, behavior: 'auto' });
    };
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '');
      [0, 150, 500, 1000].forEach((delay) => window.setTimeout(() => scrollToId(id), delay));
    };
    const handleAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a[href^="/#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href);
      if (url.pathname !== '/') return;
      const id = url.hash.replace('#', '');
      window.setTimeout(() => scrollToId(id), 100);
      window.setTimeout(() => scrollToId(id), 400);
    };

    update();
    scrollToHash();
    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('hashchange', update);
    window.addEventListener('hashchange', scrollToHash);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('hashchange', update);
      window.removeEventListener('hashchange', scrollToHash);
      window.removeEventListener('scroll', update);
    };
  }, [pathname]);

  const activeIndex = steps.findIndex((step) => step.key === active);

  return (
    <div className="journey-strip">
      <div className="journey-inner">
        {steps.map((step, index) => (
          <div key={step.key} style={{ display: 'contents' }}>
            {index > 0 && <div className="journey-divider" />}
            <HashLink
              href={step.href}
              className={`journey-step${index === activeIndex ? ' active' : ''}${index < activeIndex ? ' completed' : ''}`}
              data-journey={step.key}
            >
              <span className="journey-num">{index + 1}</span>
              <span className="journey-label">{step.label}</span>
            </HashLink>
          </div>
        ))}
      </div>
    </div>
  );
}
