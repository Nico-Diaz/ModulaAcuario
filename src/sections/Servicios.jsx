import { UtensilsCrossed } from 'lucide-react'
import ButtonLink from '../components/ButtonLink.jsx'
import Section from '../components/Section.jsx'
import { restaurant } from '../data/content.js'

export default function Servicios() {
  return (
    <Section id="servicios" title="Servicios">
      <article id="restaurante" aria-labelledby="restaurante-title" className="glass rounded-[2rem] p-6 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <UtensilsCrossed className="size-8 text-coral" aria-hidden="true" />
            <h3 id="restaurante-title" className="mt-4 font-display text-4xl font-light">
              Restaurante {restaurant.name}
            </h3>
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-foam/85">{restaurant.text}</p>
            <dl className="mt-6 space-y-1">
              {restaurant.hours.map(([d, h]) => (
                <div key={d} className="flex flex-wrap gap-x-3">
                  <dt className="text-foam/70">{d}</dt>
                  <dd className="font-bold">{h}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href="#reservas" className="mt-8">Reservar mesa</ButtonLink>
          </div>
          <div>
            <h4 className="font-display text-xl text-glow">De la carta</h4>
            <ul className="mt-4 space-y-4">
              {restaurant.menu.map((m) => (
                <li key={m.dish} className="border-b border-glow/15 pb-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-bold leading-snug">{m.dish}</span>
                    <span className="font-display text-lg text-coral shrink-0">{m.price}</span>
                  </div>
                  {m.description && (
                    <p className="text-sm text-foam/70 mt-1">{m.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Section>
  )
}
