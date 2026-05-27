import Image from 'next/image';
import Link from 'next/link';
import { HashLink } from './HashLink';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <HashLink href="/#discover" className="logo" aria-label="ChatSales home">
            <Image src="/img/cs-logo-color.png" alt="ChatSales™" width={451} height={146} />
          </HashLink>
          <p className="footer-tag">More booked jobs. More closed cases. Proven across home services, legal, dental and senior living.</p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <HashLink href="/#see-how-it-works">How It Works</HashLink>
          <HashLink href="/#check-fit">Pricing</HashLink>
        </div>
        <div className="footer-col">
          <h4>Industries</h4>
          <Link href="/industries/home-services">Home Services</Link>
          <Link href="/industries/legal-intake">Legal Intake</Link>
          <Link href="/industries/dental">Dental</Link>
          <Link href="/industries/senior-living">Senior Living</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/faq">FAQ</Link>
          <HashLink href="/#book-demo">Book a Demo</HashLink>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 ChatSales™. All rights reserved.</div>
        <div>Built for businesses where a missed lead is expensive.</div>
      </div>
    </footer>
  );
}
