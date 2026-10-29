import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Fish, Jellyfish, MantaSilhouette } from './Creatures.jsx'

// Posiciones deterministas: el fondo es idéntico en cada render y no depende de Math.random.
const bubbles = Array.from({ length: 24 }, (_, i) => ({
  left: (i * 41) % 100,
  size: 4 + ((i * 7) % 12),
  dur: 9 + ((i * 5) % 13),
  delay: -((i * 1.9) % 20),
  drift: ((i % 5) - 2) * 18,
}))

const sparks = Array.from({ length: 40 }, (_, i) => ({
  left: (i * 23 + 7) % 100,
  top: (i * 37 + 11) % 100,
  size: 2 + (i % 4),
  dur: 3 + (i % 5),
  delay: -((i * 0.7) % 5),
  color: i % 3 === 0 ? '#ff9f8a' : '#6fe6f4',
}))

const shallowFish = [
  { top: '18%', dur: 32, delay: -4, scale: 1, back: false },
  { top: '24%', dur: 28, delay: -12, scale: 0.7, back: false },
  { top: '21%', dur: 30, delay: -20, scale: 0.8, back: false },
  { top: '62%', dur: 40, delay: -8, scale: 1.3, back: true },
  { top: '70%', dur: 36, delay: -25, scale: 0.9, back: true },
]

export default function OceanBackground() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // De la superficie iluminada a la oscuridad abisal.
  const background = useTransform(
    scrollYProgress,
    [0, 0.1, 0.35, 0.65, 1],
    ['#1a86bd', '#105c94', '#0a3260', '#05162b', '#01050b'],
  )
  const lightOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const shallowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0])
  const midOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.6, 0.75], [0, 1, 1, 0])
  const deepOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1])
  const near = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -260])
  const far = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -90])

  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ background }}>
      {/* Luz que entra desde la superficie */}
      <motion.div className="absolute inset-0" style={{ opacity: lightOpacity }}>
        <div className="absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_50%_-10%,rgba(200,250,255,0.55),transparent_65%)]" />
        <div className="animate-rays absolute -top-20 left-[8%] h-[120vh] w-[55vw] origin-top bg-[repeating-linear-gradient(100deg,transparent_0_6%,rgba(220,250,255,0.10)_8%,transparent_12%)] blur-md" />
      </motion.div>

      {/* Zona de luz: bancos de peces */}
      <motion.div className="absolute inset-0 text-sky-950/45" style={{ opacity: shallowOpacity, y: far }}>
        {shallowFish.map((f, i) => (
          <div
            key={i}
            className={`${f.back ? 'animate-swim-back' : 'animate-swim'} absolute left-0`}
            style={{ top: f.top, '--dur': `${f.dur}s`, '--delay': `${f.delay}s`, '--sway': '-40px' }}
          >
            <div className="flex gap-3" style={{ transform: `scale(${f.scale})` }}>
              <Fish className="w-10" />
              <Fish className="mt-4 w-7" />
              <Fish className="-mt-2 w-8" />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Zona crepuscular: mobulas planeando */}
      <motion.div className="absolute inset-0 text-[#021226]/70" style={{ opacity: midOpacity, y: near }}>
        <div className="animate-swim absolute left-0 top-[40%]" style={{ '--dur': '55s', '--delay': '-10s', '--sway': '-80px' }}>
          <MantaSilhouette className="w-56 md:w-80" />
        </div>
        <div className="animate-swim absolute left-0 top-[75%]" style={{ '--dur': '70s', '--delay': '-40s', '--sway': '60px' }}>
          <MantaSilhouette className="w-32 opacity-70" />
        </div>
      </motion.div>

      {/* Zona de medianoche y abisal: bioluminiscencia */}
      <motion.div className="absolute inset-0" style={{ opacity: deepOpacity }}>
        {sparks.map((s, i) => (
          <span
            key={i}
            className="animate-pulse-glow absolute rounded-full"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              background: s.color,
              boxShadow: `0 0 ${s.size * 4}px ${s.color}`,
              '--dur': `${s.dur}s`,
              '--delay': `${s.delay}s`,
            }}
          />
        ))}
        <Jellyfish className="animate-jelly absolute left-[6%] top-[30%] w-16 md:w-24" style={{ '--dur': '6s' }} />
        <Jellyfish className="animate-jelly absolute right-[10%] top-[62%] w-12 md:w-16" style={{ '--dur': '7s', '--delay': '-2s' }} />
        <Jellyfish className="animate-jelly absolute left-[48%] top-[85%] w-10" style={{ '--dur': '5s', '--delay': '-1s' }} />
      </motion.div>

      {/* Burbujas en todas las profundidades */}
      {!reduce &&
        bubbles.map((b, i) => (
          <span
            key={i}
            className="animate-rise absolute -bottom-6 rounded-full border border-white/40 bg-white/10"
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              '--dur': `${b.dur}s`,
              '--delay': `${b.delay}s`,
              '--drift': `${b.drift}px`,
            }}
          />
        ))}

      {/* Viñeta para dar sensación de profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.45))]" />
    </motion.div>
  )
}
