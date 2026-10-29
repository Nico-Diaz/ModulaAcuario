import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ChevronDown, Menu, Ticket, X } from 'lucide-react'
import { nav, ticketsNav } from '../data/content.js'
import LogoMark from './LogoMark.jsx'

const sectionIds = ['inicio', 'sobre-nosotros', 'novedades', 'experiencias', 'servicios', 'galeria', 'merch', 'entradas', 'contacto']

function useActiveSection() {
  const [active, setActive] = useState('inicio')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

const isActive = (item, active) =>
  item.href === `#${active}` || item.children?.some((c) => c.href === `#${active}`)

function DesktopItem({ item, open, setOpen, active, cta = false }) {
  const menuId = `menu-${item.label.toLowerCase()}`
  if (!item.children) {
    return (
      <li>
        <a
          href={item.href}
          aria-current={active ? 'location' : undefined}
          className={`rounded-full px-3 py-2 text-[0.95rem] transition-colors hover:text-glow ${active ? 'text-glow' : 'text-foam/90'}`}
        >
          {item.label}
        </a>
      </li>
    )
  }
  return (
    <li className="relative" onMouseEnter={() => setOpen(item.label)} onMouseLeave={() => setOpen(null)}>
      <div
        className={
          cta
            ? 'flex items-center rounded-full bg-glow text-deep shadow-[0_0_24px_rgba(111,230,244,0.45)] transition hover:bg-white'
            : 'flex items-center'
        }
      >
        <a
          href={item.href}
          aria-current={active ? 'location' : undefined}
          className={
            cta
              ? 'flex items-center gap-2 py-2 pl-4 pr-1 font-bold'
              : `py-2 pl-3 pr-1 text-[0.95rem] transition-colors hover:text-glow ${active ? 'text-glow' : 'text-foam/90'}`
          }
        >
          {cta && <Ticket className="size-4" aria-hidden="true" />}
          {item.label}
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`Mostrar opciones de ${item.label}`}
          onClick={() => setOpen(open ? null : item.label)}
          className={`rounded-full p-1.5 ${cta ? 'mr-1.5' : ''}`}
        >
          <ChevronDown className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={menuId}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className={`glass absolute top-full mt-2 min-w-56 rounded-2xl p-2 shadow-2xl shadow-black/40 ${cta ? 'right-0 w-72' : 'left-0'}`}
          >
            {item.children.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  onClick={() => setOpen(null)}
                  className="block rounded-xl px-3 py-2 transition-colors hover:bg-glow/10 hover:text-glow"
                >
                  {c.label}
                  {c.hint && <span className="block text-sm text-foam/60">{c.hint}</span>}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Navbar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setMobileOpen(false)
      }
    }
    const onPointer = (e) => {
      if (!navRef.current?.contains(e.target)) setOpen(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-40 transition-[padding,background-color] duration-300 ${
        scrolled || mobileOpen ? 'glass border-x-0 border-t-0 py-1' : 'bg-gradient-to-b from-deep/60 to-transparent py-4'
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#inicio" className="shrink-0" onClick={closeMobile}>
          <LogoMark />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <DesktopItem
              key={item.label}
              item={item}
              open={open === item.label}
              setOpen={setOpen}
              active={isActive(item, active)}
            />
          ))}
          <li className="ml-3 list-none">
            <ul>
              <DesktopItem
                item={ticketsNav}
                open={open === ticketsNav.label}
                setOpen={setOpen}
                active={isActive(ticketsNav, active)}
                cta
              />
            </ul>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-full p-2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="menu-movil"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="menu-movil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-y-auto lg:hidden"
            style={{ maxHeight: 'calc(100dvh - 70px)' }}
          >
            <div className="grid gap-6 px-4 pb-28 pt-4 sm:grid-cols-2">
              {nav.map((item) => (
                <div key={item.label}>
                  <a href={item.href} onClick={closeMobile} className="font-display text-xl">
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="mt-1 border-l border-glow/25 pl-3">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <a href={c.href} onClick={closeMobile} className="block py-1.5 text-foam/80">
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="rounded-2xl border border-glow/30 bg-glow/10 p-4 sm:col-span-2">
                <a href={ticketsNav.href} onClick={closeMobile} className="flex items-center gap-2 font-display text-xl text-glow">
                  <Ticket className="size-5" aria-hidden="true" /> {ticketsNav.label}
                </a>
                <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                  {ticketsNav.children.map((c) => (
                    <li key={c.href}>
                      <a href={c.href} onClick={closeMobile} className="block py-1.5">
                        {c.label}
                        <span className="block text-sm text-foam/60">{c.hint}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
