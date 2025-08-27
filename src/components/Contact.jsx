import React, { useState } from 'react'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const to = 'contact@trauck.com'
    const subject = encodeURIComponent('Contacto desde Landing Page - TRAUCK')
    const body = encodeURIComponent(`Nombre: ${name}%0AEmail: ${email}%0A%0AMensaje:%0A${message}`)
    // open default mail client with prefilled content
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-2">
        <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre" className="w-1/2 px-3 py-2 rounded-md bg-surface-2 border border-border text-text" />
        <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-1/2 px-3 py-2 rounded-md bg-surface-2 border border-border text-text" />
      </div>
      <textarea required value={message} onChange={e=>setMessage(e.target.value)} placeholder="Mensaje" rows={3} className="w-full px-3 py-2 rounded-md bg-surface-2 border border-border text-text"></textarea>
      <div className="flex items-center gap-3">
        <button type="submit" className="bg-primary text-text px-4 py-2 rounded-md hover:bg-primary-600">Enviar por email</button>
        <a className="text-muted" href="https://wa.me/12345678901?text=Hola%20TRAUCK,%20quiero%20más%20info" target="_blank" rel="noreferrer">Contactar por WhatsApp</a>
        <a className="text-muted" href="tel:+12345678901">Llamar: +1 234 567 8901</a>
      </div>
    </form>
  )
}
