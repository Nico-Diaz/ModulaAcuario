export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32 ${className}`}>
      <header className="mb-12 max-w-2xl md:mb-16">
        <span className="mb-6 block h-px w-12 bg-glow/60" aria-hidden="true" />
        <h2 id={`${id}-title`} className="font-display text-4xl font-light leading-[1.05] tracking-tight text-balance md:text-6xl">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-foam/80">{intro}</p>}
      </header>
      {children}
    </section>
  )
}
