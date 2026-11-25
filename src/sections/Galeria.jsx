import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import Section from '../components/Section.jsx'
import { gallery } from '../data/content.js'

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
              <img
                src={g.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
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
              <img src={item.image} alt={item.caption} className="h-full w-full object-contain" />
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
