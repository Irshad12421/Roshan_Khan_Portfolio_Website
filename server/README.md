# Roshan Portfolio Contact Server

A secure Node.js + Express + Nodemailer backend for the portfolio contact form. Runs separately from the React/Vite frontend (deployed on GitHub Pages).

## 1) Install

```bash
cd server
npm install
```

## 2) Configure SMTP & environment

Copy `.env.example` to `.env` and fill in values:

```bash
cp .env.example .env  # or copy manually on Windows
```

Required variables:
- `SMTP_HOST` – your SMTP host (e.g. `smtp.gmail.com`, `smtp.zoho.com`, `smtp-relay.brevo.com`)
- `SMTP_PORT` – usually `587` (STARTTLS) or `465` (SSL)
- `SMTP_SECURE` – `false` for 587, `true` for 465
- `SMTP_USER` – SMTP username
- `SMTP_PASS` – SMTP password / app password
- `CONTACT_TO_EMAIL` – where emails go (your inbox)
- `CONTACT_FROM_EMAIL` – verified sender (often same as SMTP_USER)
- `FRONTEND_ORIGIN` – your GitHub Pages origin (e.g. `https://irshad12421.github.io`)
- `ALLOWED_ORIGINS` – comma list (include localhost for dev + production)
- `PORT` – server port

**Never commit `.env`.** Only `.env.example` goes to git.

### Notes on providers
- **Gmail/Google**: use an App Password if 2FA is enabled.
- **Zoho Mail**: use app password or correct SMTP credentials.
- **Brevo/SendGrid/Resend**: follow provider SMTP docs.

## 3) Run locally

Backend:
```bash
npm run dev  # or npm start
```

Health check: `http://localhost:3000/health`

Frontend (from repo root): add `VITE_CONTACT_API_URL=http://localhost:3000` to `/.env.local` (see root README), then `npm run dev`.

## 4) Deploy the backend

Deploy to any Node.js host (Render, Railway, Fly.io, Render, etc.). Set all env vars in the host's secret/settings panel. Point to `server/` as the root if needed, or run from `server/` with `npm start`.

## 5) Connect to GitHub Pages frontend

In the repo root, create `.env.production` (or set in CI):
```env
VITE_CONTACT_API_URL=https://your-deployed-backend.example.com
```

Build/deploy frontend as usual. The form posts to `${VITE_CONTACT_API_URL}/api/contact`.

## Security
- Credentials only on backend
- CORS restricted to allowed origins
- Rate limiting (configurable)
- Honeypot + validation + sanitization
- No sensitive errors leaked
- Reply-To set to sender
- Header injection prevented by validation/sanitization
