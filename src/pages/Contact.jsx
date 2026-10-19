import { useState } from 'react'
import { profile, faqs } from '../data/resume'

const initial = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState(null)

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    setStatus({ type: 'pending', text: 'Sending…' })
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        setStatus({ type: 'success', text: 'Thanks! Your message has been sent.' })
        setForm(initial)
      })
      .catch(() =>
        setStatus({
          type: 'error',
          text: 'Could not send right now. Please email me directly at ' + profile.email,
        }),
      )
  }

  return (
    <>
      <section className="page-head reveal">
        <p className="eyebrow">Contact</p>
        <h1>
          Let’s <span className="grad-text">Talk</span>
        </h1>
        <p className="page-lead">
          Have a role, a project or just a question? Fill in the form or reach me directly — I
          usually reply within 24 hours.
        </p>
        <span className="pill">
          <span className="pill-dot"></span> Open to full-time & freelance opportunities
        </span>
      </section>

      <section className="section contact" style={{ marginTop: 36 }}>
        <form className="card form reveal" onSubmit={submit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={update('name')} required placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={update('email')} required placeholder="you@example.com" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" value={form.subject} onChange={update('subject')} required placeholder="What’s this about?" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={update('message')} required placeholder="Write your message…" />
          </label>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
          {status && <p className={`form-status ${status.type}`}>{status.text}</p>}
        </form>

        <aside className="card contact-aside reveal" style={{ '--d': '0.12s' }}>
          <h2>Contact Details</h2>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                roshan-khan
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                Irshad12421
              </a>
            </li>
          </ul>
        </aside>
      </section>

      <section className="section">
        <div className="section-head reveal">
          <h2>Frequently Asked</h2>
        </div>
        <div className="faq">
          {faqs.map((item, i) => (
            <details className="reveal" key={item.q} style={{ '--d': `${i * 0.07}s` }}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-banner reveal">
        <div>
          <h2>Prefer email?</h2>
          <p>Skip the form and write to me directly — same inbox, same response time.</p>
        </div>
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </section>
    </>
  )
}
