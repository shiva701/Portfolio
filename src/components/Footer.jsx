import { navLinks, profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid" aria-hidden="true" />
      <nav className="footer__nav" aria-label="Footer">
        <a href="#top" className="footer__pill is-active">
          Home
        </a>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="footer__pill">
            {l.label}
          </a>
        ))}
      </nav>
      <div className="footer__right">
        <a href={`mailto:${profile.email}`} className="footer__email">
          {profile.email}
        </a>
        <a href={profile.phoneHref} className="footer__phone">
          {profile.phone}
        </a>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
