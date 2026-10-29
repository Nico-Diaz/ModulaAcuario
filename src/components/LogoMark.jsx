// logo-mobula.png es el logo original con el fondo navy eliminado.
export default function LogoMark({ className = '' }) {
  return (
    <img
      src="/logo-mobula.png"
      alt="MOBULA, experiencia inmersiva"
      width="869"
      height="449"
      className={`h-12 w-auto ${className}`}
    />
  )
}
