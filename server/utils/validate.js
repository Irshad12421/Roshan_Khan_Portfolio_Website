import { isEmail } from 'validator'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function normalize(value = '') {
  return String(value).trim()
}

export function validate(payload) {
  const errors = {}
  const name = normalize(payload.name)
  const email = normalize(payload.email)
  const subject = normalize(payload.subject)
  const message = normalize(payload.message)
  const phone = normalize(payload.phone)
  const website = normalize(payload.website)

  if (!name || name.length < 2) errors.name = 'Please enter your full name.'
  else if (name.length > 80) errors.name = 'Name is too long.'

  if (!email || !EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  else if (email.length > 120) errors.email = 'Email is too long.'

  if (!subject || subject.length < 3) errors.subject = 'Please add a subject.'
  else if (subject.length > 150) errors.subject = 'Subject is too long.'

  if (!message || message.length < 10) errors.message = 'Please add a message (at least 10 characters).'
  else if (message.length > 5000) errors.message = 'Message is too long.'

  if (phone && phone.length > 30) errors.phone = 'Phone number is too long.'

  if (website) errors.website = 'Invalid request.'

  return { errors, values: { name, email, subject, message, phone } }
}

export function escapeHtml(text = '') {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
