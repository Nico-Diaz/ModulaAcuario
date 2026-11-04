import { useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Section from '../components/Section.jsx'
import { contact } from '../data/content.js'

const empty = { nombre: '', email: '', motivo: contact.reasons[0], mensaje: '' }

function validate(form) {
  const errors = {}
  if (!form.nombre.trim()) errors.nombre = 'Ingrese su nombre.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Ingrese un email válido, por ejemplo nombre@correo.com.'
  if (form.mensaje.trim().length < 10) errors.mensaje = 'Cuéntenos un poco más: al menos 10 caracteres.'
  return errors
}

const field =
  'mt-1.5 w-full rounded-xl border border-glow/25 bg-black/30 px-4 py-3 text-foam placeholder:text-foam/40 focus:border-glow focus:outline-none'

export default function Contacto() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // Sin backend todavía: el formulario abre el cliente de correo con el mensaje ya redactado.
  const submit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) return
    const body = `${form.mensaje}\n\n${form.nombre} (${form.email})`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(form.motivo)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const errorProps = (name) =>
    errors[name] ? { 'aria-invalid': true, 'aria-describedby': `${name}-error` } : {}

  return (
    <Section id="contacto" title="Hablemos de tu visita" intro="¿Venís con tu escuela, querés organizar un evento o consultar por el restaurante? Escribinos y te ayudamos.">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div className="space-y-6">
          <p className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-glow" aria-hidden="true" />
            <span>
              {contact.address}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
                target="_blank"
                rel="noreferrer"
                className="block text-glow underline-offset-4 hover:underline"
              >
                Cómo llegar
              </a>
            </span>
          </p>
          <p className="flex gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-glow" aria-hidden="true" />
            <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>{contact.phone}</a>
          </p>
          <p className="flex gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-glow" aria-hidden="true" />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <div className="flex gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-glow" aria-hidden="true" />
            <dl>
              {contact.hours.map(([d, h]) => (
                <div key={d}>
                  <dt className="text-foam/70">{d}</dt>
                  <dd className="mb-2 font-bold">{h}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ul className="flex flex-wrap gap-2 pt-2">
            {contact.socials.map((s) => (
              <li key={s}>
                <a href="#" className="inline-block rounded-full border border-foam/25 px-4 py-1.5 text-sm hover:border-glow hover:text-glow">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form noValidate onSubmit={submit} className="glass space-y-5 rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              Nombre
              <input name="nombre" autoComplete="name" value={form.nombre} onChange={update} className={field} {...errorProps('nombre')} />
              {errors.nombre && <span id="nombre-error" className="mt-1 block text-sm text-coral">{errors.nombre}</span>}
            </label>
            <label className="block">
              Email
              <input name="email" type="email" autoComplete="email" value={form.email} onChange={update} className={field} {...errorProps('email')} />
              {errors.email && <span id="email-error" className="mt-1 block text-sm text-coral">{errors.email}</span>}
            </label>
          </div>
          <label className="block">
            Motivo
            <select name="motivo" value={form.motivo} onChange={update} className={field}>
              {contact.reasons.map((r) => (
                <option key={r} className="bg-deep">{r}</option>
              ))}
            </select>
          </label>
          <label className="block">
            Mensaje
            <textarea name="mensaje" rows="5" value={form.mensaje} onChange={update} className={field} {...errorProps('mensaje')} />
            {errors.mensaje && <span id="mensaje-error" className="mt-1 block text-sm text-coral">{errors.mensaje}</span>}
          </label>
          <button type="submit" className="w-full rounded-full bg-glow px-6 py-3 font-bold text-deep transition-colors hover:bg-white">
            Enviar mensaje
          </button>
          <p role="status" className="text-sm text-foam/75">
            {sent && 'Hemos abierto su programa de correo con el mensaje listo. Solo falta pulsar enviar.'}
          </p>
        </form>
      </div>
    </Section>
  )
}
