import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { profile } from '../data/resume'

const year = new Date().getFullYear()

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children, ready }) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const progressRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    if (!ready) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12)
        const doc = document.documentElement
        const max = doc.scrollHeight - doc.clientHeight
        const value = max > 0 ? window.scrollY / max : 0
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${value})`
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const el = glowRef.current
    if (!el) return undefined
    if (window.matchMedia('(pointer: coarse)').matches) return undefined
    let raf = 0
    const move = (event) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
    }
  }, [])

  return (
    <div className="site">
      <div className="scroll-progress" ref={progressRef} aria-hidden="true"></div>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true"></div>
      <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container navbar-inner">
          <Link to="/" className="brand" viewTransition>
            <span className="brand-mark">RK</span>
            <span className="brand-text">
              <strong>Roshan Khan</strong>
              <small>Full-Stack Developer</small>
            </span>
          </Link>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                viewTransition
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            ))}
            <a className="btn btn-primary nav-cta nav-cta-mobile" href={`${import.meta.env.BASE_URL}Roshan_Khan_Resume.pdf`} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </nav>

          <div className="nav-end">
            <a
              className="btn btn-primary nav-cta nav-cta-desktop"
              href={`${import.meta.env.BASE_URL}Roshan_Khan_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>

            <button
              type="button"
              className={menuOpen ? 'menu-toggle open' : 'menu-toggle'}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main className={ready ? 'container page ready' : 'container page'} key={location.pathname}>
        {children}
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand" viewTransition>
              <span className="brand-mark">RK</span>
              <span className="brand-text">
                <strong>Roshan Khan</strong>
                <small>Full-Stack Developer</small>
              </span>
            </Link>
            <p>
              Building CRMs, SaaS products and e-commerce stores with PHP &amp; Laravel from Mumbai,
              India.
            </p>
            <span className="footer-status">
              <span className="pill-dot"></span> Available for work
            </span>
            <div className="footer-socials">
              <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
                </svg>
              </a>
              <a className="social-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} viewTransition>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <span className="footer-muted">{profile.location}</span>
              </li>
              <li>
                <a href={`${import.meta.env.BASE_URL}Roshan_Khan_Resume.pdf`} target="_blank" rel="noreferrer">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <button type="button" className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  )
}
