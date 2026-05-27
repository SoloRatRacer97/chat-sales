import { HashLink } from './HashLink';

export function FloatingDemoPill() {
  return (
    <HashLink href="/#book-demo" className="demo-pill">
      <span className="demo-pill-dot" />
      Book a Demo
    </HashLink>
  );
}
