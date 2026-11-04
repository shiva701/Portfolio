import { skills } from '../data.js';
import Art from './Art.jsx';

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="center-head">
        <span className="eyebrow">Toolkit</span>
        <h2 className="h2">Skills & Technologies</h2>
      </div>
      <div className="skills__grid">
        {skills.map((s) => (
          <article key={s.group} className="skill-card">
            <div className="skill-card__media">
              <Art variant={s.art} />
              <span className="skill-card__label">{s.group}</span>
            </div>
            <div className="skill-card__chips">
              {s.items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
