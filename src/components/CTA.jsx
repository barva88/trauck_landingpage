import React from 'react'

export default function CTA(){
  return (
    <section id="cta" className="text-center py-12">
      <h2 className="text-3xl font-bold">Listo para optimizar tu operación?</h2>
      <p className="text-muted mt-3">Regístrate hoy o solicita una demo personalizada para ver TRAUCK en acción.</p>
      <div className="mt-6 space-x-4">
        <a href="#register" className="bg-primary text-text px-6 py-3 rounded-md font-semibold hover:bg-primary-600">Regístrate</a>
        <a href="#demo" className="text-muted border border-border px-6 py-3 rounded-md">Solicitar demo</a>
      </div>
    </section>
  )
}
