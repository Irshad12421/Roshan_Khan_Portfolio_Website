import { useState } from 'react'
import { Mail, GitBranch, Link2, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile, faqs } from '../data/resume'

const initial = { name: '', email: '', subject: '', phone: '', message: '', website: '' }
const API_BASE = import.meta.env.VITE_CONTACT_API_URL || ''

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }))

  const submit = async (event) => {
    event.preventDefault()
    if (form.website) return
    setErrors({})
    setStatus({ type: 'pending', text: 'Sending your message…' })

    try {
      const endpoint = API_BASE ? API_BASE.replace(/\/$/, '') + '/api/contact' : '/api/contact'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors)
        setStatus({
          type: 'error',
          text: data.error || 'Could not send right now. Please email me directly at ' + profile.email,
        })
        return
      }
      setStatus({ type: 'success', text: "Thanks! I'll get back to you shortly." })
      setForm(initial)
    } catch {
      setStatus({
        type: 'error',
        text: 'Could not connect to the mail server. Please email me directly at ' + profile.email,
      })
    }
  }

  return (
    <>
      <section className="page-head">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">
          Contact
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} >
          Let’s <span className="grad-text">Talk</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.14 }} className="page-lead">
          Have a role, a project or just a question? Fill in the form or reach me directly — I usually reply within 24 hours.
        </motion.p>
        <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }} className="pill">
          <span className="pill-dot"></span> Open to full-time & freelance opportunities
        </motion.span>
      </section>

      <section className="section contact" style={{ marginTop: 36 }}>
        <motion.form className="card form" onSubmit={submit} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <input type="text" name="website" value={form.website} onChange={update('website')} className="hp" tabIndex="-1" autoComplete="off" />
          <motion.label variants={fadeUp}>
            Full name
            <input type="text" name="name" value={form.name} onChange={update('name')} required placeholder="Your name" />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </motion.label>
          <motion.label variants={fadeUp}>
            Email address
            <input type="email" name="email" value={form.email} onChange={update('email')} required placeholder="you@example.com" />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </motion.label>
          <motion.label variants={fadeUp}>
            Phone number <span className="optional">(optional)</span>
            <input type="tel" name="phone" value={form.phone} onChange={update('phone')} placeholder="+91 ..." />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </motion.label>
          <motion.label variants={fadeUp}>
            Subject
            <input type="text" name="subject" value={form.subject} onChange={update('subject')} required placeholder="What’s this about?" />
            {errors.subject && <span className="field-error">{errors.subject}</span>}
          </motion.label>
          <motion.label variants={fadeUp}>
            Message
            <textarea name="message" rows="6" value={form.message} onChange={update('message')} required placeholder="Write your message…" />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </motion.label>
          <motion.button variants={fadeUp} className="btn btn-primary" type="submit" disabled={status?.type === 'pending'}>
            {status?.type === 'pending' ? 'Sending…' : 'Send Message'}
          </motion.button>
          {status && <p className={'form-status ' + status.type}>{status.text}</p>}
        </motion.form>

        <motion.aside className="card contact-aside" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h2>Direct Contact</h2>
          <ul className="contact-list">
            <li>
              <span><Mail size={16} /> Email</span>
              <a href={'mailto:' + profile.email}>{profile.email}</a>
            </li>
            <li>
              <span><Phone size={16} /> Phone</span>
              <a href={'tel:' + profile.phone.replace(/\s/g, '')}>{profile.phone}</a>
            </li>
            <li>
              <span><MapPin size={16} /> Location</span>
              <strong>{profile.location}</strong>
            </li>
            <li>
              <span><Link2 size={16} /> LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">roshan-khan</a>
            </li>
            <li>
              <span><GitBranch size={16} /> GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">Irshad12421</a>
            </li>
          </ul>
        </motion.aside>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Frequently Asked</h2>
        </div>
        <div className="faq">
          {faqs.map((item, i) => (
            <motion.details key={item.q} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: i * 0.08 }}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Prefer email?</h2>
          <p>Skip the form and write to me directly — same inbox, same response time.</p>
        </div>
        <a className="btn btn-primary" href={'mailto:' + profile.email}>
          <Mail size={16} /> {profile.email}
        </a>
      </section>
    </>
  )
}
