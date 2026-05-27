'use client';

import type { AnchorHTMLAttributes } from 'react';

type HashLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || !href.startsWith('/#') || window.location.pathname !== '/') return;
        event.preventDefault();
        const id = href.slice(2);
        window.history.pushState(null, '', href);
        window.dispatchEvent(new HashChangeEvent('hashchange'));
        const scroll = () => {
          const el = document.getElementById(id);
          if (!el) return;
          const top = el.getBoundingClientRect().top + window.scrollY - 142;
          window.scrollTo({ top, behavior: 'auto' });
        };
        window.setTimeout(scroll, 0);
        window.setTimeout(scroll, 150);
      }}
      {...props}
    />
  );
}
