import { useEffect, useState } from 'react'

const MIN_TIME = 1100
const MAX_TIME = 2800

export default function Preloader({ onDone }) {
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    let finished = false
    let holdTimer

    const finish = () => {
      if (finished) return
      finished = true
      setClosing(true)
      onDone()
    }

    const ready = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', resolve, { once: true })
    })

    Promise.all([ready, new Promise((r) => (holdTimer = setTimeout(r, MIN_TIME)))]).then(finish)
    const cap = setTimeout(finish, MAX_TIME)

    return () => {
      clearTimeout(holdTimer)
      clearTimeout(cap)
    }
  }, [onDone])

  return (
    <div className={closing ? 'preloader closing' : 'preloader'} role="status" aria-label="Loading">
      <div className="preloader-inner">
        <div className="preloader-spinner">
          <span className="preloader-mark">RK</span>
        </div>
        <p className="preloader-name">Roshan Khan</p>
        <p className="preloader-role">Full-Stack Web Developer</p>
        <div className="preloader-bar">
          <span></span>
        </div>
      </div>
    </div>
  )
}
