import { education } from '../data.js';
import Art from './Art.jsx';

export default function Education() {
  return (
    <section className="edu section" id="education">
      <div className="center-head">
        <span className="eyebrow">Education</span>
        <h2 className="h2">Academic Foundation</h2>
      </div>
      <div className="edu__grid">
        {education.map((e) => (
          <article key={e.school} className="edu-card">
            <div className="edu-card__media"><Art variant={e.art} /></div>
            <div className="edu-card__body">
              <div className="edu-card__meta">
                <span className="chip chip--dark chip--xs">{e.detail}</span>
                <span className="tiny muted">{e.period}</span>
              </div>
              <h3>{e.school}</h3>
              <p className="tiny muted">{e.degree} · {e.place}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
