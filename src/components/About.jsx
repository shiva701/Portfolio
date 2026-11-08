import { about, profile } from '../data.js';
import { ArrowUpRight, Plus } from './Icons.jsx';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__intro">
        <h2 className="h2">About Me</h2>
        <p className="muted">{about.intro}</p>
        <svg className="about__swoosh" viewBox="0 0 200 140" fill="none" aria-hidden="true">
          <path
            d="M10 130C20 70 70 30 180 20"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M150 8l32 12-20 28"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="about__card reveal">
        <div className="about__badge">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12a4 4 0 0 1 8 0M12 3v4M12 17v4" />
          </svg>
        </div>
        <div className="about__stat">{about.stat.value}</div>
        <p className="tiny muted">{about.stat.label}</p>
        <img src={profile.headshot} alt={profile.name} className="about__img" />
      </div>

      <div className="about__side">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="about__thumb"
          aria-label="LinkedIn profile"
        >
          <img src={profile.headshot} alt="" />
          <span className="about__thumb-btn">
            <ArrowUpRight size={14} />
          </span>
        </a>
        <ul className="about__points">
          {about.points.map((p) => (
            <li key={p}>
              <span className="dot-btn">
                <Plus />
              </span>
              <p className="tiny muted">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
