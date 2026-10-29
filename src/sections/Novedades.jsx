import Section from '../components/Section.jsx'
import { news } from '../data/content.js'

export default function Novedades() {
  return (
    <Section id="novedades" title="Novedades">
      <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
        {news.map((n) => (
          <li key={n.title} className="border-t border-glow/40 pt-5">
            <p className="text-sm text-glow">{n.date}</p>
            <h3 className="mt-2 font-display text-2xl font-normal leading-snug">{n.title}</h3>
            <p className="mt-3 leading-relaxed text-foam/80">{n.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
