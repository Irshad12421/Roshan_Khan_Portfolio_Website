import { escapeHtml } from '../utils/validate.js'

function formatDate() {
  return new Date().toISOString()
}

export function buildHtml({ name, email, subject, message, phone }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')
  const safePhone = phone ? escapeHtml(phone) : '—'
  const sentAt = formatDate()

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New contact from ${safeName}</title>
</head>
<body style="margin:0;padding:24px;background:#0a1113;color:#eef7f6;font-family:Segoe UI,system-ui,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table role="presentation" width="600" style="max-width:600px;background:#111b1d;border:1px solid #20302f;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:28px;background:linear-gradient(120deg,#0f766e,#0e7490);">
              <h1 style="margin:0;font-size:20px;">New Portfolio Contact</h1>
              <p style="margin:6px 0 0;opacity:.9;">From roshankhan.dev portfolio</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;display:grid;gap:18px;">
              <div>
                <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.6px;color:#9fb0b3;">Name</div>
                <div style="margin-top:4px;font-size:16px;">${safeName}</div>
              </div>
              <div>
                <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.6px;color:#9fb0b3;">Email</div>
                <a href="mailto:${safeEmail}" style="margin-top:4px;display:inline-block;color:#2dd4bf;">${safeEmail}</a>
              </div>
              <div>
                <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.6px;color:#9fb0b3;">Phone</div>
                <div style="margin-top:4px;">${safePhone}</div>
              </div>
              <div>
                <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.6px;color:#9fb0b3;">Subject</div>
                <div style="margin-top:4px;">${safeSubject}</div>
              </div>
              <div>
                <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.6px;color:#9fb0b3;">Message</div>
                <div style="margin-top:10px;line-height:1.8;">${safeMessage}</div>
              </div>
              <div style="padding-top:12px;border-top:1px dashed #20302f;font-size:13px;color:#7f9295;">
                Sent at: ${escapeHtml(sentAt)}
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

export function buildText({ name, email, subject, message, phone }) {
  const lines = [
    'New Portfolio Contact',
    '---------------------',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
    '',
    `Sent at: ${new Date().toISOString()}`,
  ]
  return lines.join('\n')
}
