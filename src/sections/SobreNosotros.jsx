import Section from '../components/Section.jsx'
import { about } from '../data/content.js'

export default function SobreNosotros() {
  return (
    <Section id="sobre-nosotros" title={about.title}>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <div className="space-y-5 text-lg leading-relaxed text-foam/85">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="max-w-[62ch]">{p}</p>
          ))}
        </div>
        <dl className="divide-y divide-glow/15 border-y border-glow/15">
          {about.stats.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-6 py-4">
              <dt className="text-foam/75">{s.label}</dt>
              <dd className="font-display text-3xl font-light text-glow">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
