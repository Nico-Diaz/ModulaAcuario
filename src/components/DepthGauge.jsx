import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { zones } from '../data/content.js'

const depthStops = [0, 0.1, 0.35, 0.65, 1]
const depthMeters = [0, 200, 1000, 3000, 4000]

function zoneFor(meters) {
  return zones.findLast((z) => meters >= z.from).name
}

const meterFormat = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0, useGrouping: 'always' })
const format = (m) => `${Math.round(m) === 0 ? '' : '−'}${meterFormat.format(m)} m`

// Los textos se derivan como MotionValues: el scroll no provoca re-renders de React.
export default function DepthGauge() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const meters = useTransform(smooth, depthStops, depthMeters)
  const label = useTransform(meters, format)
  const zone = useTransform(meters, zoneFor)
  const markerTop = useTransform(smooth, [0, 1], ['0%', '100%'])

  return (
    <>
      <div
        role="img"
        aria-label="Profundidad de la inmersión"
        className="fixed right-5 top-1/2 z-30 hidden h-[52vh] -translate-y-1/2 items-stretch gap-3 lg:flex"
      >
        <div className="flex flex-col items-end justify-center text-right">
          <motion.span className="font-display text-2xl font-light tabular-nums text-foam">{label}</motion.span>
          <motion.span className="text-xs text-glow/80">{zone}</motion.span>
        </div>
        <div className="relative w-px bg-gradient-to-b from-glow/70 via-glow/30 to-transparent">
          {depthMeters.map((m, i) => (
            <span
              key={m}
              className="absolute -left-1 h-px w-2 bg-glow/50"
              style={{ top: `${depthStops[i] * 100}%` }}
            />
          ))}
          <motion.span
            className="absolute -left-[5px] h-[11px] w-[11px] -translate-y-1/2 rounded-full bg-glow shadow-[0_0_14px_#6fe6f4]"
            style={{ top: markerTop }}
          />
        </div>
      </div>

      {/* Versión compacta en móvil */}
      <div className="glass fixed bottom-4 right-4 z-30 rounded-full px-3 py-1.5 text-sm lg:hidden" aria-hidden="true">
        <motion.span className="font-display tabular-nums">{label}</motion.span>
      </div>
    </>
  )
}
