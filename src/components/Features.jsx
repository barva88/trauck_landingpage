import React from 'react'

const items = [
  {title: 'Rutas optimizadas con IA', desc: 'Recomendaciones según preferencias, historial y destino.'},
  {title: 'Selección inteligente de cargas', desc: 'Modelo tipo Uber: acepta o rechaza, la carga rota automáticamente.'},
  {title: 'Asistente de voz y chat', desc: 'Integración con WhatsApp, Twilio y Retell AI para aceptar cargas por voz o mensaje.'},
  {title: 'Trauck Education', desc: 'Módulo CDL con exámenes interactivos e IA.'},
  {title: 'Gestión de pagos', desc: 'Planes y pagos con Stripe; créditos para funciones especiales.'},
  {title: 'Servicios roadmap', desc: 'Fuel cards, factoring, seguros, facturación y más.'}
]

export default function Features(){
  return (
    <section id="features" className="space-y-6">
      <h2 className="text-3xl font-bold">Funciones principales</h2>
  <p className="text-muted">Módulos diseñados para optimizar cada paso del dispatch y la operación del carrier.</p>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {items.map((it)=> (
          <div key={it.title} className="card p-5 rounded-lg">
            <div className="text-xl font-semibold text-text">{it.title}</div>
            <div className="text-muted mt-2 text-sm">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
