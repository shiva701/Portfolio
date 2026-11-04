import { profile } from '../data.js';
import { ArrowUpRight, Download } from './Icons.jsx';

export default function Banner() {
  return (
    <section className="banner-wrap">
      <div className="banner">
        <div className="banner__grid" aria-hidden="true" />
        <span className="tiny banner__kicker">(Open to new opportunities)</span>
        <h2 className="banner__title">Looking for an engineer who ships<br />secure, scalable systems?</h2>
        <p className="tiny banner__text">
          Grab my resume or reach out directly. I'm happy to talk backend, cloud or AI agent platforms.
        </p>
        <div className="banner__actions">
          <a href={profile.resume} download className="pill pill--light">
            <Download size={13} /> Download Resume
          </a>
          <a href="#contact" className="link-underline banner__link">
            Let's talk <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
