import { motion, useReducedMotion } from 'framer-motion'
import { ChevronsDown } from 'lucide-react'
import ButtonLink from '../components/ButtonLink.jsx'
import { hero } from '../data/content.js'

// La superficie del agua vista desde abajo: una banda ondulada que se desplaza sin fin.
function Surface() {
  const wave = 'M0 40 Q 75 10 150 40 T 300 40 T 450 40 T 600 40 T 750 40 T 900 40 T 1050 40 T 1200 40 V0 H0 Z'
  return (
    <div className="absolute inset-x-0 top-0 h-24 overflow-hidden" aria-hidden="true">
      <svg className="animate-wave absolute top-0 h-full w-[200%]" viewBox="0 0 1200 80" preserveAspectRatio="none">
        <path d={wave} fill="rgba(220,250,255,0.35)" />
        <path d={wave} transform="translate(0 10)" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay) =>
    reduce ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] } }

  return (
    <section id="inicio" aria-labelledby="inicio-title" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-32 text-center">
      <Surface />

      <motion.img
        {...rise(0)}
        src="/logo-mobula.png"
        alt="MOBULA, experiencia inmersiva"
        width="869"
        height="449"
        className="w-[min(420px,80vw)] drop-shadow-[0_4px_30px_rgba(0,30,60,0.45)]"
      />

      <motion.h1
        {...rise(0.35)}
        id="inicio-title"
        className="mt-10 font-display text-5xl font-extralight leading-none tracking-tight text-balance drop-shadow-[0_2px_20px_rgba(0,30,60,0.5)] sm:text-6xl md:text-8xl"
      >
        {hero.title}
      </motion.h1>

      <motion.p {...rise(0.55)} className="mt-6 max-w-[56ch] text-lg leading-relaxed text-foam/90 drop-shadow md:text-xl">
        {hero.text}
      </motion.p>

      <motion.div {...rise(0.75)} className="mt-10 flex flex-wrap justify-center gap-3">
        <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
        <ButtonLink href={hero.secondary.href} variant="ghost">
          {hero.secondary.label}
        </ButtonLink>
      </motion.div>

      <a href="#sobre-nosotros" className="absolute bottom-8 flex flex-col items-center gap-1 text-sm text-foam/75 hover:text-glow">
        Desciende
        <ChevronsDown className="size-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
