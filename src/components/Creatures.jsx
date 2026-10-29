import { useId } from 'react'

// Siluetas SVG ligeras para el fondo. Usan currentColor salvo la medusa, que brilla por sí misma.

export function Fish({ className = '', style }) {
  return (
    <svg viewBox="0 0 64 32" className={className} style={style} fill="currentColor">
      <path d="M4 16C16 3 38 3 50 16 38 29 16 29 4 16Z M48 16 62 5 59 16 62 27Z" />
    </svg>
  )
}

export function MantaSilhouette({ className = '' }) {
  return (
    <svg viewBox="0 0 160 80" className={className} fill="currentColor">
      <path d="M80 22c-8 0-30-14-78 8 34 4 50 14 70 26l6 22h4l6-22c20-12 36-22 70-26C110 8 88 22 80 22Z" />
      <path d="M72 23c-3-4-4-9-2-12 1 4 3 7 6 10Z M88 23c3-4 4-9 2-12-1 4-3 7-6 10Z" />
    </svg>
  )
}

export function Jellyfish({ className = '', style }) {
  const gradientId = `jelly${useId().replace(/[^\w-]/g, '')}`
  return (
    <svg viewBox="0 0 60 100" className={className} style={style}>
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#c9f7ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6fe6f4" stopOpacity="0.15" />
        </radialGradient>
      </defs>
      <g style={{ filter: 'drop-shadow(0 0 10px #6fe6f4)' }}>
        <path d="M6 34C6 10 54 10 54 34c-8-3-16-3-24 0-8-3-16-3-24 0Z" fill={`url(#${gradientId})`} />
        <g fill="none" stroke="#6fe6f4" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round">
          <path d="M16 34c-3 14 4 24-1 42" />
          <path d="M26 34c3 16-4 30 1 52" />
          <path d="M36 34c-3 14 4 26 0 46" />
          <path d="M45 34c3 12-3 20 1 34" />
        </g>
      </g>
    </svg>
  )
}
