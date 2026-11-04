import { featuredWork } from '../data.js';
import Art from './Art.jsx';
import { ArrowUpRight } from './Icons.jsx';

export default function Work() {
  return (
    <section className="work" id="work" aria-label="Featured work">
      <div className="work__track">
        {featuredWork.map((w) => (
          <article key={w.title} className="work__item">
            <div className="work__media">
              <Art variant={w.art} />
              <span className="round-btn work__btn"><ArrowUpRight size={16} /></span>
              <p className="work__desc">{w.desc}</p>
            </div>
            <div className="work__meta">
              <h3>{w.title}</h3>
              <span className="tiny muted">{w.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
