import { useRef, useState } from 'react';
import { education } from '../data.js';
import Art from './Art.jsx';
import { Plus } from './Icons.jsx';

const block = (e) => e.preventDefault();

function AwardViewer({ award, dialogRef, onClose }) {
  return (
    <dialog
      ref={dialogRef}
      className="award-viewer"
      aria-label={award ? award.title : 'Award'}
      onClose={onClose}
      onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.close(); }}
      onContextMenu={block}
    >
      {award && (
        <figure className="award-viewer__frame">
          {/* Shown as a CSS background (no <img>) with a cover layer on top,
              so there is no "Save image as" / drag-to-desktop on the picture. */}
          <div
            className="award-viewer__img"
            role="img"
            aria-label={`${award.title} certificate`}
            style={{ backgroundImage: `url("${award.image}")`, aspectRatio: award.ratio }}
            onDragStart={block}
          >
            <div className="award-viewer__shield" aria-hidden="true" />
          </div>
          <figcaption className="award-viewer__caption">
            <span>{award.title}</span>
            <button
              type="button"
              className="award-viewer__close"
              aria-label="Close"
              onClick={() => dialogRef.current?.close()}
            >
              <Plus size={14} />
            </button>
          </figcaption>
        </figure>
      )}
    </dialog>
  );
}

export default function Education() {
  const dialogRef = useRef(null);
  const [award, setAward] = useState(null);

  const open = (a) => {
    setAward(a);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  };

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
              {(e.roles?.length > 0 || e.awards?.length > 0) && (
                <ul className="edu-card__awards">
                  {e.roles?.map((r) => (
                    <li key={r.title} className="edu-award edu-award--static">
                      <span className="edu-award__text">
                        <span className="edu-award__title">{r.title}</span>
                        <span className="tiny muted">{r.note}</span>
                      </span>
                    </li>
                  ))}
                  {e.awards?.map((a) => (
                    <li key={a.title}>
                      <button type="button" className="edu-award" onClick={() => open(a)}>
                        <span className="edu-award__text">
                          <span className="edu-award__title">{a.title}</span>
                          <span className="tiny muted">{a.note}</span>
                        </span>
                        <span className="edu-award__view">View</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
      <AwardViewer award={award} dialogRef={dialogRef} onClose={() => setAward(null)} />
    </section>
  );
}
