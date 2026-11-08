import { heroStats, profile } from '../data.js';
import { ArrowDown } from './Icons.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__rail">
        <span className="hero__vertical">{profile.role}</span>
        <span className="hero__line" />
        <span className="hero__vertical">2026</span>
      </div>

      <div className="hero__content">
        <div className="hero__stats">
          {heroStats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat__value">
                {!s.plain && <sup>+</sup>}
                {s.value}
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>

        <h1 className="hero__title">Hello</h1>
        <p className="hero__sub">
          — It's {profile.firstName}, a software engineer building secure, scalable systems & AI
          platforms
        </p>

        <a href="#about" className="hero__scroll">
          Scroll down <ArrowDown size={12} />
        </a>
      </div>

      <div className="hero__photo">
        <img src={profile.heroPhoto} alt={`Portrait of ${profile.name}`} />
      </div>
    </section>
  );
}
