import { Link } from 'react-router-dom'
import { skillGroups, proficiency } from '../data/resume'

export default function Skills() {
  return (
    <>
      <section className="page-head reveal">
        <p className="eyebrow">Toolkit</p>
        <h1>
          My <span className="grad-text">Skills</span>
        </h1>
        <p className="page-lead">
          Languages, frameworks, platforms and integrations I use to ship full-stack PHP & Laravel
          products — plus the tools around them.
        </p>
      </section>

      <section className="section" style={{ marginTop: 40 }}>
        <div className="skills-layout">
          <div className="card reveal">
            <h2>Proficiency</h2>
            <div className="bars">
              {proficiency.map((skill) => (
                <div className="bar-row" key={skill.name}>
                  <div className="bar-label">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ '--w': `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group, i) => (
              <article
                className="card reveal"
                key={group.title}
                style={{ '--d': `${i * 0.08}s`, padding: '20px 22px' }}
              >
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head reveal">
          <h2>How I Use Them</h2>
        </div>
        <div className="card-grid">
          <article className="card reveal">
            <span className="badge">Backend</span>
            <h3>Applications & APIs</h3>
            <p>
              Laravel MVC apps with clean database design, service layers, REST endpoints, queued or
              scheduled jobs and SMTP/SFTP automation.
            </p>
          </article>
          <article className="card reveal" style={{ '--d': '0.1s' }}>
            <span className="badge">Frontend</span>
            <h3>Blade & Bootstrap UIs</h3>
            <p>
              Responsive, admin-friendly interfaces built with Blade templates, Bootstrap and
              JavaScript — polished enough for daily business use.
            </p>
          </article>
          <article className="card reveal" style={{ '--d': '0.2s' }}>
            <span className="badge badge-warm">Integrations</span>
            <h3>Payments, Shipping & OTP</h3>
            <p>
              Razorpay, PayU, Shiprocket and MSG91 wired into production flows — including WooCommerce
              stores and custom CRMs.
            </p>
          </article>
        </div>
      </section>

      <section className="cta-banner reveal">
        <div>
          <h2>Think we’re a match?</h2>
          <p>See how these skills translate into shipped projects — then let’s talk about yours.</p>
        </div>
        <Link className="btn btn-primary" to="/projects" viewTransition>
          See the Work
        </Link>
      </section>
    </>
  )
}
