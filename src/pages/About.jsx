import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.jpg'
import { profile, experience, achievements, education, certifications, services } from '../data/resume'

export default function About() {
  return (
    <>
      <section className="page-head reveal">
        <p className="eyebrow">About</p>
        <h1>
          Who I <span className="grad-text">Am</span>
        </h1>
        <p className="page-lead">{profile.summary}</p>
      </section>

      <section className="section" style={{ marginTop: 40 }}>
        <div className="about-hero reveal">
          <div className="photo-frame">
            <span className="photo-badge">{profile.role.split('|')[1].trim()}</span>
            <img src={profileImg} alt={profile.name} width="576" height="1024" loading="lazy" />
            <span className="photo-caption">{profile.name}</span>
          </div>
          <div>
            <p className="eyebrow">Quick Facts</p>
            <h2>{profile.name}</h2>
            <p>
              A Mumbai-based developer who enjoys turning business workflows into reliable software —
              whether that’s a CRM module, a SaaS feature or a full online store.
            </p>
            <div className="facts">
              <div className="fact">
                <span>Role</span>
                <strong>Full-Stack Web Developer</strong>
              </div>
              <div className="fact">
                <span>Focus</span>
                <strong>PHP & Laravel</strong>
              </div>
              <div className="fact">
                <span>Experience</span>
                <strong>1+ year · Team of 5 led</strong>
              </div>
              <div className="fact">
                <span>Education</span>
                <strong>B.Sc. IT — Univ. of Mumbai</strong>
              </div>
              <div className="fact">
                <span>Email</span>
                <strong>{profile.email}</strong>
              </div>
              <div className="fact">
                <span>Languages</span>
                <strong>English · Hindi · Marathi</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="reveal">Experience</h2>
        <div className="timeline">
          {experience.map((job, i) => (
            <article className="timeline-item reveal" key={job.role + job.period} style={{ '--d': `${i * 0.1}s` }}>
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-body">
                <h3>{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="reveal">Achievements</h2>
        <ul className="check-list reveal">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="reveal">What I Can Build For You</h2>
        <div className="service-grid">
          {services.map((service, i) => (
            <article className="service-card reveal" key={service.title} style={{ '--d': `${i * 0.08}s` }}>
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 17l6-6-6-6" />
                  <path d="M12 19h8" />
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-col">
        <div className="reveal">
          <h2>Education</h2>
          <div className="card-list">
            {education.map((item) => (
              <article className="card" key={item.degree}>
                <h3>{item.degree}</h3>
                <p>
                  {item.school} · {item.year}
                </p>
                <span className="badge">{item.result}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="reveal" style={{ '--d': '0.12s' }}>
          <h2>Certifications</h2>
          <ul className="check-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="mt">Languages</h2>
          <div className="chips">
            {profile.languages.map((lang) => (
              <span className="chip" key={lang}>
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner reveal">
        <div>
          <h2>Want the full details?</h2>
          <p>Download my resume or reach out directly — happy to talk about your project.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/Roshan_Khan_Resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <Link className="btn btn-ghost" to="/contact" viewTransition>
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
