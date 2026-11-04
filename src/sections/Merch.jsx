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
      <ul className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
        {merch.map((m) => {
          const Icon = m.icon && icons[m.icon]
          return (
            <li key={m.name}>
              <div className="relative mx-auto grid aspect-square max-w-64 place-items-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(111,230,244,0.22),rgba(5,20,38,0.6)_70%)] ring-1 ring-glow/20">
                {m.image ? (
                  <img src={m.image} alt="" loading="lazy" className="h-full w-full scale-150 object-cover object-[62%_46%]" />
                ) : (
                  <Icon className="size-1/3 text-glow" strokeWidth={1} aria-hidden="true" />
                )}
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-display text-xl">{m.name}</h3>
                <p className="text-sm text-foam/70">{m.detail}</p>
                <p className="mt-1 font-bold text-coral">{m.price}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
