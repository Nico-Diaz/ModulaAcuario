import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { faq } from '../data/content.js'

const greeting = {
  from: 'mobu',
  text: '¡Hola! Soy Mobu, la mobula que te acompaña en la inmersión. ¿En qué te puedo ayudar?',
}

function Avatar({ className = '' }) {
  return (
    <span className={`block overflow-hidden rounded-full ring-2 ring-glow/70 ${className}`}>
      <img src="/mobi-asistente.jpeg" alt="" className="h-full w-full scale-[1.7] object-cover object-[62%_46%]" />
    </span>
  )
}

// Asistente con respuestas predefinidas (sin IA ni backend): cada respuesta enlaza a su sección.
export default function MobiAssistant() {
  const [open, setOpen] = useState(false)
  const [greeted, setGreeted] = useState(false)
  const [messages, setMessages] = useState([greeting])
  const [typing, setTyping] = useState(false)
  const timer = useRef(null)
  const listRef = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const ask = (item) => {
    setMessages((m) => [...m, { from: 'user', text: item.q }])
    setTyping(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: 'mobi', text: item.a, href: item.href, link: item.link }])
    }, 700)
  }

  const toggle = () => {
    setOpen((v) => !v)
    setGreeted(true)
  }

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Mobi, asistente virtual"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="glass absolute bottom-20 left-0 flex max-h-[min(560px,calc(100dvh-8rem))] w-[min(360px,calc(100vw-2rem))] origin-bottom-left flex-col overflow-hidden rounded-3xl shadow-2xl shadow-black/50"
          >
            <header className="flex items-center gap-3 border-b border-glow/15 p-4">
              <Avatar className="size-11" />
              <div className="flex-1">
                <p className="font-display text-lg leading-tight">Mobi</p>
                <p className="text-xs text-foam/65">Tu guía en el acuario</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar asistente" className="rounded-full p-2 hover:bg-white/10">
                <X className="size-5" aria-hidden="true" />
              </button>
            </header>

            <div ref={listRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <p
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.95rem] leading-snug ${
                      m.from === 'user' ? 'rounded-br-md bg-glow text-deep' : 'rounded-bl-md bg-white/10'
                    }`}
                  >
                    {m.text}
                    {m.href && (
                      <a
                        href={m.href}
                        onClick={() => setOpen(false)}
                        className="mt-2 block font-bold text-glow underline-offset-4 hover:underline"
                      >
                        {m.link}
                      </a>
                    )}
                  </p>
                </div>
              ))}
              {typing && (
                <p className="w-fit rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5 text-foam/70">
                  <span className="sr-only">Mobi está escribiendo</span>
                  <span aria-hidden="true" className="tracking-[0.3em]">···</span>
                </p>
              )}
            </div>

            <div className="border-t border-glow/15 p-3">
              <p className="mb-2 px-1 text-xs text-foam/60">Preguntas frecuentes</p>
              <ul className="flex flex-wrap gap-2">
                {faq.map((item) => (
                  <li key={item.q}>
                    <button
                      type="button"
                      onClick={() => ask(item)}
                      disabled={typing}
                      className="rounded-full border border-glow/35 px-3 py-1.5 text-left text-sm transition-colors hover:bg-glow/15 disabled:opacity-50"
                    >
                      {item.q}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? 'Cerrar a Mobi, el asistente virtual' : 'Abrir a Mobi, el asistente virtual'}
          className="animate-glide rounded-full shadow-[0_0_30px_rgba(111,230,244,0.45)]"
        >
          <Avatar className="size-16" />
        </button>
        {!greeted && (
          <button type="button" onClick={toggle} className="glass hidden rounded-2xl rounded-bl-sm px-3 py-2 text-sm sm:block" tabIndex={-1} aria-hidden="true">
            ¿Te ayudo? Soy Mobi
          </button>
        )}
      </div>
    </div>
  )
}
