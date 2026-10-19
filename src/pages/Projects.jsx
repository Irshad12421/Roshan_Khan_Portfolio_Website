import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/resume'

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'professional', label: 'Professional' },
  { key: 'client', label: 'Client Work' },
  { key: 'personal', label: 'Personal' },
]

const matches = (project, key) =>
  key === 'all' ||
  (key === 'professional' && project.type.includes('Professional')) ||
  (key === 'client' && project.type.includes('Client')) ||
  (key === 'personal' && project.type.includes('Personal'))

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = projects.filter((project) => matches(project, filter))
  const featured = filter === 'all' ? projects[0] : null
  const rest = featured ? visible.slice(1) : visible

  return (
    <>
      <section className="page-head reveal">
        <p className="eyebrow">Portfolio</p>
        <h1>
          Things I’ve <span className="grad-text">Built</span>
        </h1>
        <p className="page-lead">
          SaaS platforms, CRMs, e-commerce stores and personal experiments — here’s a closer look at
          the work behind the stack.
        </p>
      </section>

      <div className="filter-bar reveal">
        {filters.map((item) => (
          <button
            key={item.key}
            type="button"
            className={filter === item.key ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter(item.key)}
          >
            {item.label}
            {item.key === 'all' ? ` (${projects.length})` : ''}
          </button>
        ))}
      </div>

      {featured && (
        <section className="featured reveal">
          <div>
            <span className="badge">{featured.type} · Flagship</span>
            <h2 style={{ marginTop: 14 }}>{featured.title}</h2>
            <ul className="card-points">
              {featured.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="chips" style={{ marginTop: 18 }}>
              {featured.tech.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="featured-panel">
            <div className="featured-metric">
              <strong>POS · Fuel · Lottery</strong>
              <span>Business modules on a US-focused Laravel SaaS</span>
            </div>
            <div className="featured-metric">
              <strong>34-field export</strong>
              <span>Weekly tobacco scan file over SFTP via Laravel Scheduler</span>
            </div>
            <div className="featured-metric">
              <strong>Shift control</strong>
              <span>One open employee shift per station terminal</span>
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ marginTop: 0 }}>
        <div className="card-grid">
          {rest.map((project, i) => (
            <article
              className="card project-card reveal"
              key={project.title}
              style={{ '--d': `${(i % 3) * 0.1}s` }}
            >
              <div className="project-top">
                <span className={project.type.includes('Personal') ? 'badge badge-warm' : 'badge'}>
                  {project.type}
                </span>
                <span className="project-index">
                  {String(projects.indexOf(project) + 1).padStart(2, '0')}
                </span>
              </div>
              <h3>{project.title}</h3>
              <ul className="card-points">
                {project.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="chips chips-sm project-tech">
                {project.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        {rest.length === 0 && <p className="projects-empty">No projects in this category yet.</p>}
      </section>

      <section className="cta-banner reveal">
        <div>
          <h2>Need something like these?</h2>
          <p>From CRMs to WooCommerce stores — tell me what you’re planning and we can talk specifics.</p>
        </div>
        <Link className="btn btn-primary" to="/contact" viewTransition>
          Start a Project
        </Link>
      </section>
    </>
  )
}
