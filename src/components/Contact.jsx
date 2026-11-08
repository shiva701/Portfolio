import { profile } from '../data.js';
import { ArrowUpRight, Download, GitHub, LinkedIn, Mail, Phone, Pin } from './Icons.jsx';

export default function Contact() {
  const items = [
    { icon: <Mail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone />, label: 'Phone', value: profile.phone, href: profile.phoneHref },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      value: 'in/shivashuklagmu',
      href: profile.linkedin,
      external: true,
    },
    { icon: <GitHub />, label: 'GitHub', value: 'shiva701', href: profile.github, external: true },
    { icon: <Pin />, label: 'Location', value: profile.location },
  ];

  return (
    <section className="contact section" id="contact">
      <h2 className="contact__title">Got a Project? Let's Build It Together!</h2>
      <p className="tiny muted contact__text">
        I'm always open to new roles, collaborations and interesting engineering challenges. Whether
        it's a backend platform, front-end components, cloud infrastructure or an AI agent, I am
        open to discussing opportunities.
      </p>

      <ul className="contact__grid">
        {items.map((it) => {
          const inner = (
            <>
              <span className="contact__icon">{it.icon}</span>
              <span className="contact__label tiny muted">{it.label}</span>
              <span className="contact__value">{it.value}</span>
              {it.href && (
                <span className="contact__arrow">
                  <ArrowUpRight size={13} />
                </span>
              )}
            </>
          );
          return (
            <li key={it.label}>
              {it.href ? (
                <a
                  className="contact__card"
                  href={it.href}
                  {...(it.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {inner}
                </a>
              ) : (
                <div className="contact__card">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="contact__actions">
        <a href={`mailto:${profile.email}`} className="pill pill--dark">
          Say Hello <ArrowUpRight size={12} />
        </a>
        <a href={profile.resume} download className="pill pill--outline">
          <Download size={13} /> Download Resume
        </a>
      </div>
    </section>
  );
}
