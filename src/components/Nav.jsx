import { useState } from 'react';
import { navLinks, profile } from '../data.js';
import { ArrowUpRight } from './Icons.jsx';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="nav__logo" aria-label="Home">
        <span>S</span><span>S</span>
      </a>
      <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href={profile.resume} download className="nav__mobile-cta" onClick={() => setOpen(false)}>
          Download Resume
        </a>
      </nav>
      <div className="nav__right">
        <a href={profile.resume} download className="link-underline nav__cta">
          Download Resume <ArrowUpRight size={12} />
        </a>
        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}
