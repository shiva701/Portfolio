import { useState } from 'react';
import { experience, profile } from '../data.js';
import { ArrowUpRight } from './Icons.jsx';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// "Jul 2018" -> months since year 0, so ranges can be compared and measured.
const toMonth = (s) => {
  const [m, y] = s.trim().split(/\s+/);
  return Number(y) * 12 + MONTHS.indexOf(m);
};
const fromMonth = (n) => `${MONTHS[n % 12]} ${Math.floor(n / 12)}`;
const parsePeriod = (p) => {
  const [start, end] = p.split(/\s+-\s+/);
  return { start: toMonth(start), end: toMonth(end) };
};
const duration = (start, end) => {
  const total = end - start + 1; // inclusive of both months
  const y = Math.floor(total / 12);
  const m = total % 12;
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo${m > 1 ? 's' : ''}`]
    .filter(Boolean)
    .join(' ');
};

// Group consecutive roles at the same company, keeping each role's index in
// the flat list so the accordion state stays a single number.
const companies = experience
  .reduce((acc, role, index) => {
    const last = acc[acc.length - 1];
    const entry = { ...role, index, ...parsePeriod(role.period) };
    if (last && last.name === role.company) last.roles.push(entry);
    else acc.push({ name: role.company, roles: [entry] });
    return acc;
  }, [])
  .map((c) => {
    const start = Math.min(...c.roles.map((r) => r.start));
    const end = Math.max(...c.roles.map((r) => r.end));
    return {
      ...c,
      period: `${fromMonth(start)} - ${fromMonth(end)}`,
      tenure: duration(start, end),
    };
  });

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section className="exp section" id="experience">
      <div className="exp__head">
        <div>
          <span className="eyebrow">Experience</span>
          <h2 className="h2">
            Explore My
            <br />
            Engineering Journey
          </h2>
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
        {companies.map((c) => (
          <li key={c.name} className="exp__company">
            <div className="exp__company-head">
              <h3>{c.name}</h3>
              <div className="exp__company-meta tiny muted">
                <span>{c.period}</span>
                <span aria-hidden="true">·</span>
                <span>{c.tenure}</span>
              </div>
            </div>

            <ol className="exp__roles">
              {c.roles.map((r, i) => {
                const open = active === r.index;
                const promoted = i < c.roles.length - 1;
                return (
                  <li key={r.title + r.period} className={`exp__row ${open ? 'is-open' : ''}`}>
                    <span className="exp__dot" aria-hidden="true" />
                    <button
                      className="exp__summary"
                      onClick={() => setActive(open ? -1 : r.index)}
                      aria-expanded={open}
                    >
                      <div className="exp__who">
                        <h4>{r.title}</h4>
                        <span className="tiny muted">
                          {r.period} · {duration(r.start, r.end)}
                          {promoted && <span className="exp__promoted">Promoted</span>}
                        </span>
                      </div>
                      <p className="tiny muted exp__blurb">{r.summary}</p>
                      <div className="exp__tags">
                        {r.tags.map((t) => (
                          <span key={t} className={`chip ${open ? 'chip--dark' : ''}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </button>
                    <div className="exp__detail">
                      <div className="exp__detail-inner">
                        <ul className="exp__highlights">
                          {r.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ul>
    </section>
  );
}
