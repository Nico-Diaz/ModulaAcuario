import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import Section from '../components/Section.jsx'
import { Fish, Jellyfish } from '../components/Creatures.jsx'
import { gallery } from '../data/content.js'

const kelp = [12, 30, 52, 70, 86]

// Ilustraciones provisionales hasta tener fotografías reales de las salas.
function Art({ kind }) {
  switch (kind) {
    case 'kelp':
      return (
        <div className="absolute inset-0 bg-gradient-to-b from-teal-400/60 to-emerald-950">
          {kelp.map((x, i) => (
            <span
              key={x}
              className="absolute bottom-0 w-3 rounded-t-full bg-emerald-800/80"
              style={{ left: `${x}%`, height: `${60 + (i % 3) * 14}%`, rotate: i % 2 ? '4deg' : '-5deg' }}
            />
          ))}
        </div>
      )
    case 'dome':
      return (
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/70 to-blue-950">
          <div className="absolute -bottom-1/2 left-1/2 aspect-square w-[130%] -translate-x-1/2 rounded-full border-[10px] border-glow/30 bg-[radial-gradient(circle,rgba(111,230,244,0.35),transparent_60%)]" />
        </div>
      )
    case 'jelly':
      return (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-[#0a1a3a] to-black">
          <Jellyfish className="w-1/3" />
        </div>
      )
    case 'school':
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/70 to-blue-800 text-slate-200/70">
          {Array.from({ length: 14 }, (_, i) => (
            <Fish key={i} className="absolute w-8" style={{ left: `${(i * 29) % 85}%`, top: `${(i * 41) % 80}%` }} />
          ))}
        </div>
      )
    case 'museum':
      return (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-slate-900">
          <svg
            viewBox="0 0 400 100"
            className="absolute inset-x-6 top-1/2 -translate-y-1/2 text-foam/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M20 55 Q120 30 300 50 L370 35 L380 65 L300 50" />
            {Array.from({ length: 16 }, (_, i) => (
              <path key={i} d={`M${60 + i * 14} ${46 - i * 0.6} q4 18 0 26`} />
            ))}
          </svg>
        </div>
      )
    default:
      return null
  }
}

export default function Galeria() {
  const [current, setCurrent] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (current !== null && !dialog.open) dialog.showModal()
    if (current === null && dialog.open) dialog.close()
  }, [current])

  const item = current !== null ? gallery[current] : null

  return (
    <Section id="galeria" title="Galería" intro="Así se ve el acuario por dentro. Pulsa una imagen para ampliarla.">
      <ul className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {gallery.map((g, i) => (
          <li key={g.caption} className={g.span ?? ''}>
            <button
              type="button"
              onClick={() => setCurrent(i)}
              className="group relative h-full w-full overflow-hidden rounded-3xl text-left ring-1 ring-glow/15"
            >
              {g.image ? (
                <img
                  src={g.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <Art kind={g.art} />
              )}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-10 text-sm">
                {g.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setCurrent(null)}
        onClick={(e) => e.target === dialogRef.current && setCurrent(null)}
        className="m-auto w-[min(1000px,92vw)] overflow-hidden rounded-3xl bg-deep p-0 text-foam backdrop:bg-black/80"
      >
        {item && (
          <figure>
            <div className="relative aspect-[3/2]">
              {item.image ? <img src={item.image} alt={item.caption} className="h-full w-full object-cover" /> : <Art kind={item.art} />}
            </div>
            <figcaption className="flex items-center justify-between gap-4 p-4">
              {item.caption}
              <button type="button" onClick={() => setCurrent(null)} aria-label="Cerrar imagen" className="rounded-full p-2 hover:bg-white/10">
                <X aria-hidden="true" />
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </Section>
  )
}
