export default function ButtonLink({ href, children, variant = 'primary', className = '', ...props }) {
  const styles =
    variant === 'primary'
      ? 'bg-glow text-deep shadow-[0_0_28px_rgba(111,230,244,0.35)] hover:bg-white'
      : 'border border-foam/40 text-foam hover:border-glow hover:text-glow'
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition-colors ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
