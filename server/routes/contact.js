import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { validate } from '../utils/validate.js'
import { buildHtml, buildText } from '../templates/email.js'

const router = Router()

const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MINUTES || 10) * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX || 5),
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many messages. Please try again later.' },
})

function getTransporter(req) {
  return req.app.locals.transporter
}

function getMailerConfig(req) {
  return req.app.locals.mailer
}

router.post('/', limiter, async (req, res) => {
  try {
    const { errors, values } = validate(req.body || {})
    if (Object.keys(errors).length) {
      return res.status(400).json({ ok: false, errors })
    }

    const transporter = getTransporter(req)
    const mailer = getMailerConfig(req)
    if (!transporter || !mailer) {
      return res.status(500).json({ ok: false, error: 'Mail service is not configured.' })
    }

    const { name, email, subject, message, phone } = values
    const replyTo = process.env.REPLY_TO_HEADER !== 'false' ? email : undefined
    const html = buildHtml({ name, email, subject, message, phone })
    const text = buildText({ name, email, subject, message, phone })

    await transporter.sendMail({
      from: mailer.from,
      to: mailer.to,
      subject: `[Portfolio] ${subject}`,
      html,
      text,
      replyTo,
    })

    return res.status(200).json({ ok: true, message: 'Message sent successfully.' })
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Contact form error:', err?.message)
    }
    return res.status(500).json({ ok: false, error: 'Failed to send message. Please try again.' })
  }
})

export default router
