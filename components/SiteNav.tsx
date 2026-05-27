import Image from 'next/image';
import Link from 'next/link';
import { HashLink } from './HashLink';

const industryLinks = [
  { href: '/industries/home-services', label: 'Home Services' },
  { href: '/industries/legal-intake', label: 'Legal Intake' },
  { href: '/industries/dental', label: 'Dental' },
  { href: '/industries/senior-living', label: 'Senior Living' },
];

export function SiteNav() {
  return (
    <nav className="site-nav">
      <HashLink href="/#discover" className="logo" aria-label="ChatSales home">
        <Image src="/img/cs-logo-color.png" alt="ChatSales™" width={451} height={146} priority />
      </HashLink>
      <div className="nav-links">
        <HashLink href="/#see-how-it-works">How It Works</HashLink>
        <span className="has-dropdown">
          <Link href="/industries">Industries</Link>
          <div className="dropdown">
            {industryLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
        </span>
        <HashLink href="/#check-fit">Pricing</HashLink>
        <Link href="/faq">FAQ</Link>
        <HashLink href="/#book-demo" className="btn-nav">Book a Demo</HashLink>
      </div>
    </nav>
  );
}
