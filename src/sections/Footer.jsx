import LogoMark from '../components/LogoMark.jsx'
import { nav, ticketsNav } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-glow/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1fr_2fr] md:px-8">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-[36ch] text-sm text-foam/65">
            Acuario de realidad virtual. Ningún animal ha salido del mar para que tú puedas conocerlo.
          </p>
        </div>
        <nav aria-label="Pie de página" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[...nav.filter((n) => n.children), ticketsNav].map((group) => (
            <div key={group.label}>
              <a href={group.href} className="font-display text-lg">{group.label}</a>
              <ul className="mt-2 space-y-1 text-sm text-foam/70">
                {group.children.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} className="hover:text-glow">{c.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 pb-8 text-xs text-foam/55 md:px-8">
        <p>© {new Date().getFullYear()} MOBULA Experiencia Inmersiva</p>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:text-glow">Aviso legal</a></li>
          <li><a href="#" className="hover:text-glow">Privacidad</a></li>
          <li><a href="#" className="hover:text-glow">Cookies</a></li>
        </ul>
      </div>
    </footer>
  )
}
