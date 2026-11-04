import Section from '../components/Section.jsx'
import { icons } from '../components/icons.js'
import { merch } from '../data/content.js'

export default function Merch() {
  return (
    <Section
      id="merch"
      title="Llévate un trocito de océano"
      intro="Compañeros para seguir explorando fuera del museo"
    >
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {merch.map((m) => {
          const Icon = m.icon && icons[m.icon]
          return (
            <li key={m.name} className="flex flex-col">
              <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-glow/10 to-deep ring-1 ring-glow/20 aspect-square mb-4">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                ) : Icon ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon className="size-1/3 text-glow" strokeWidth={1} aria-hidden="true" />
                  </div>
                ) : null}
              </div>
              <div className="flex-grow">
                <h3 className="font-display text-lg font-light leading-snug">{m.name}</h3>
                <p className="text-sm text-foam/70 mt-1">{m.detail}</p>
              </div>
              <p className="mt-3 font-bold text-coral text-lg">{m.price}</p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
