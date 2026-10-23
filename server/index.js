import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import contactRouter from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT) || 3000

const allowedOrigins = (process.env.ALLOWED_ORIGINS || process.env.FRONTEND_ORIGIN || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)

app.set('trust proxy', process.env.TRUST_PROXY === 'true')

app.use(helmet())
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, false)
      if (allowedOrigins.length === 0) return callback(null, true)
      if (allowedOrigins.includes(origin)) return callback(null, true)
      return callback(new Error('Not allowed by CORS'))
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: false,
  }),
)
app.use(express.json({ limit: '64kb' }))
app.use(express.urlencoded({ extended: false, limit: '64kb' }))

const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL']
const missing = required.filter((key) => !process.env[key])
if (missing.length) {
  console.error('Missing required env vars:', missing.join(', '))
}

const smtpPort = Number(process.env.SMTP_PORT)
const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production',
  },
})

app.locals.transporter = missing.length ? null : transporter
app.locals.mailer = {
  to: process.env.CONTACT_TO_EMAIL,
  from: process.env.CONTACT_FROM_EMAIL,
}

app.get('/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() })
})

app.use('/api/contact', contactRouter)

app.use((_req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' })
})

app.use((err, _req, res, _next) => {
  if (err?.message === 'Not allowed by CORS') {
    return res.status(403).json({ ok: false, error: 'CORS origin not allowed' })
  }
  res.status(500).json({ ok: false, error: 'Server error' })
})

app.listen(PORT, () => {
  console.log(`Contact server listening on port ${PORT}`)
})
