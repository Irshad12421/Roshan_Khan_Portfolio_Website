import { readFileSync, writeFileSync } from "fs";
const p = "src/pages/Contact.jsx";
let t = readFileSync(p, "utf8");
const old = `export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState(null)

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    setStatus({ type: "pending", text: "Sending…" })
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed")
        setStatus({ type: "success", text: "Thanks! Your message has been sent." })
        setForm(initial)
      })
      .catch(() =>
        setStatus({
          type: "error",
          text: "Could not send right now. Please email me directly at " + profile.email,
        }),
      )
  }`;
const neu = `export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }))

  const submit = async (event) => {
    event.preventDefault()
    if (form.website) return
    setErrors({})
    setStatus({ type: "pending", text: "Sending your message…" })

    try {
      const endpoint = API_BASE ? API_BASE.replace(/\\/$/, "") + "/api/contact" : "/api/contact"
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors)
        setStatus({
          type: "error",
          text: data.error || "Could not send right now. Please email me directly at " + profile.email,
        })
        return
      }
      setStatus({ type: "success", text: "Thanks! I\\u0027ll get back to you shortly." })
      setForm(initial)
    } catch {
      setStatus({
        type: "error",
        text: "Could not connect to the mail server. Please email me directly at " + profile.email,
      })
    }
  }`;
if (!t.includes(old)) { console.log("no"); process.exit(1); }
writeFileSync(p, t.replace(old, neu), "utf8");
console.log("done");
