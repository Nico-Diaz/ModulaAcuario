import { Check } from 'lucide-react'
import ButtonLink from '../components/ButtonLink.jsx'
import Section from '../components/Section.jsx'
import { TICKETING_URL, tickets } from '../data/content.js'

export default function Entradas() {
  return (
    <Section
      id="entradas"
      title="Entradas"
      intro="Compra online y entra sin colas. Menores de 4 años gratis. Descuentos para familias numerosas, estudiantes y mayores de 65 en taquilla."
    >
      <ul className="space-y-4">
        {tickets.map((t) => (
          <li key={t.id}>
            <article
              id={t.id}
              aria-labelledby={`${t.id}-title`}
              className={`grid gap-6 rounded-[1.75rem] p-6 md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-10 md:p-8 ${
                t.featured
                  ? 'bg-gradient-to-r from-glow/25 to-lagoon/15 ring-2 ring-glow/70 shadow-[0_0_60px_rgba(111,230,244,0.18)]'
                  : 'glass'
              }`}
            >
              <div>
                {t.featured && <p className="mb-2 text-sm font-bold text-glow">La más elegida</p>}
                <h3 id={`${t.id}-title`} className="font-display text-3xl font-light">
                  {t.name}
                </h3>
                <p className="mt-2">
                  <span className="font-display text-4xl">{t.price}</span>{' '}
                  <span className="text-foam/70">{t.unit}</span>
                </p>
              </div>
              <div>
                <ul className="space-y-1.5">
                  {t.includes.map((inc) => (
                    <li key={inc} className="flex gap-2">
                      <Check className="mt-0.5 size-5 shrink-0 text-glow" aria-hidden="true" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-foam/65">{t.note}</p>
              </div>
              <ButtonLink href={t.href ?? TICKETING_URL} variant={t.featured ? 'primary' : 'ghost'} className="whitespace-nowrap">
                {t.cta}
              </ButtonLink>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
