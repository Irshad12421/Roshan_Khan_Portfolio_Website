import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.jpg'
import { profile, skillGroups, projects, services, journey } from '../data/resume'

const featured = projects.slice(0, 3)
const topSkills = [...skillGroups[0].skills, 'REST APIs', 'WordPress', 'Git', 'SFTP']

const tickerItems = [
  'PHP',
  'Laravel',
  'Blade',
  'MySQL',
  'JavaScript',
  'Bootstrap',
  'WordPress',
  'WooCommerce',
  'Razorpay',
  'PayU',
  'Shiprocket',
  'MSG91',
  'REST APIs',
  'Git',
  'SFTP',
  'Java',
  'Spring Boot',
]

function Ticker() {
  const group = (
    <div className="ticker-group">
      {tickerItems.map((item) => (
        <span className="ticker-item" key={item}>
          {item} <i>◆</i>
        </span>
      ))}
    </div>
  )
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {group}
        {group}
      </div>
    </div>
  )
}

const icons = {
  layers: (
    <>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </>
  ),
  plug: (
    <>
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </>
  ),
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="pill">
            <span className="pill-dot"></span> Available for work
          </span>
          <p className="eyebrow">Full-Stack Web Developer</p>
          <h1>
            Hi, I’m <span className="grad-text">Roshan Khan</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact" viewTransition>
              Hire Me
            </Link>
            <Link className="btn btn-ghost" to="/projects" viewTransition>
              View Projects
            </Link>
          </div>
          <div className="hero-socials">
            <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>
            <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
              </svg>
            </a>
            <a className="social-btn" href={`mailto:${profile.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-media">
          <div className="photo-frame">
            <span className="photo-badge">1+ yr experience</span>
            <img src={profileImg} alt={profile.name} width="576" height="1024" loading="eager" />
            <span className="photo-caption">{profile.location}</span>
          </div>
        </div>
      </section>

      <section className="stats reveal">
        {profile.stats.map((stat, i) => (
          <div className="stat" key={stat.label} style={{ '--d': `${i * 0.08}s` }}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <Ticker />

      <section className="section">
        <div className="section-head reveal">
          <h2>What I Do</h2>
          <Link className="link" to="/about" viewTransition>
            More about me →
          </Link>
        </div>
        <div className="service-grid">
          {services.map((service, i) => (
            <article className="service-card reveal" key={service.title} style={{ '--d': `${i * 0.1}s` }}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {icons[service.icon]}
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head reveal">
          <h2>Key Skills</h2>
          <Link className="link" to="/skills" viewTransition>
            All skills →
          </Link>
        </div>
        <div className="chips reveal">
          {topSkills.map((skill) => (
            <span className="chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head reveal">
          <h2>Featured Projects</h2>
          <Link className="link" to="/projects" viewTransition>
            All projects →
          </Link>
        </div>
        <div className="card-grid">
          {featured.map((project, i) => (
            <article className="card reveal" key={project.title} style={{ '--d': `${i * 0.1}s` }}>
              <span className="badge">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description[0]}</p>
              <div className="chips chips-sm">
                {project.tech.slice(0, 4).map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head reveal">
          <h2>My Journey</h2>
          <Link className="link" to="/about" viewTransition>
            Full experience →
          </Link>
        </div>
        <div className="timeline">
          {journey.map((step, i) => (
            <div className="timeline-item reveal" key={step.title} style={{ '--d': `${i * 0.08}s` }}>
              <span className="timeline-period">{step.period}</span>
              <div className="timeline-body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner reveal">
        <div>
          <h2>Looking for a developer?</h2>
          <p>Open to full-time roles and freelance work — let’s build something together.</p>
        </div>
        <Link className="btn btn-primary" to="/contact" viewTransition>
          Contact Me
        </Link>
      </section>
    </>
  )
}
