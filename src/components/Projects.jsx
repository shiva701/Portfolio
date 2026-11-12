import { projects } from '../data.js';
import Art from './Art.jsx';
import { ArrowUpRight } from './Icons.jsx';

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="center-head">
        <span className="eyebrow">Side projects</span>
        <h2 className="h2">Projects</h2>
      </div>
      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.title} className="skill-card project-card">
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card__media"
              aria-label={`Open ${p.title}`}
              tabIndex={-1}
            >
              <Art variant={p.art} />
              <span className="skill-card__label">{p.title}</span>
            </a>
            <div className="project-card__body">
              <h3>{p.title}</h3>
              <p className="tiny muted">{p.desc}</p>
              <div className="skill-card__chips">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  aria-label={`Live demo of ${p.title}`}
                >
                  Live demo <ArrowUpRight size={12} />
                </a>
                <a
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  aria-label={`Source code of ${p.title}`}
                >
                  Source code <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
