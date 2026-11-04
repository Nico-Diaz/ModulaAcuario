import { Ticket } from 'lucide-react'
import Section from '../components/Section.jsx'
import { icons } from '../components/icons.js'
import { experiences } from '../data/content.js'

function Visual({ exp }) {
  const Icon = icons[exp.icon]
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br ${exp.hue} ring-1 ring-glow/20`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
      <Icon className="absolute bottom-6 right-6 size-28 text-foam/80 md:size-36" strokeWidth={0.8} />
      <span className="absolute left-6 top-5 font-display text-5xl font-extralight text-foam/90 md:text-6xl">{exp.name}</span>
    </div>
  )
}

export default function Experiencias() {
  return (
    <Section
      id="experiencias"
      title="Mucho más que mirar el mar."
      intro="Un recorrido para todas las edades: espacios inmersivos, historias, tecnología y encuentros sorprendentes con la vida acuática."
    >
      <div className="space-y-24 md:space-y-32">
        {experiences.map((exp, i) => (
          <article
            key={exp.id}
            id={exp.id}
            aria-labelledby={`${exp.id}-title`}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
          >
            <div className={i % 2 ? 'md:order-2' : ''}>
              <Visual exp={exp} />
            </div>
            <div>
              <h3 id={`${exp.id}-title`} className="font-display text-3xl font-light md:text-4xl">
                {exp.tagline}
              </h3>
              <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-foam/85">{exp.text}</p>
              <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-glow/20 pt-5">
                {exp.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-sm text-foam/65">{k}</dt>
                    <dd className="mt-1 font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
              <a href="#entradas" className="mt-6 inline-flex items-center gap-2 text-glow underline-offset-4 hover:underline">
                <Ticket className="size-4" aria-hidden="true" />
                Ver entradas para {exp.name}
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
