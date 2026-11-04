import { useState } from 'react';
import { experience, profile } from '../data.js';
import { ArrowUpRight } from './Icons.jsx';

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section className="exp section" id="experience">
      <div className="exp__head">
        <div>
          <span className="eyebrow">Experience</span>
          <h2 className="h2">Explore My<br />Engineering Journey</h2>
        </div>
        <div>
          <p className="tiny muted">
            Over the past 6+ years I've built backend platforms, AI tooling and cloud infrastructure
            for companies like PTC and GlobalLogic, working with cross-functional Agile teams.
          </p>
          <a href={profile.resume} download className="link-underline tiny">
            Download Resume <ArrowUpRight size={11} />
          </a>
        </div>
      </div>

      <ul className="exp__list">
        {experience.map((e, i) => {
          const open = active === i;
          return (
            <li key={e.title + e.period} className={`exp__row ${open ? 'is-open' : ''}`}>
              <button
                className="exp__summary"
                onClick={() => setActive(open ? -1 : i)}
                aria-expanded={open}
              >
                <div className="exp__who">
                  <h3>{e.company} — {e.title}</h3>
                  <span className="tiny muted">• {e.period}</span>
                </div>
                <p className="tiny muted exp__blurb">{e.summary}</p>
                <div className="exp__tags">
                  {e.tags.map((t) => (
                    <span key={t} className={`chip ${open ? 'chip--dark' : ''}`}>{t}</span>
                  ))}
                </div>
              </button>
              <div className="exp__detail">
                <div className="exp__detail-inner">
                  <ul className="exp__highlights">
                    {e.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                  <a href={profile.resume} download className="round-btn" aria-label="Download resume">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
