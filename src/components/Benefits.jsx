import React from 'react'

const benefits = [
  'Reducir costos operativos',
  'Ahorro de tiempo en dispatch',
  'Acceso a herramientas profesionales',
  'Automatización y comunicación en tiempo real'
]

export default function Benefits(){
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h2 className="text-3xl font-bold">Beneficios para carriers pequeños</h2>
        <p className="text-muted mt-4">TRAUCK ayuda a carriers con menos de 5 unidades a competir con grandes empresas, reduciendo costos y mejorando la eficiencia.</p>
        <ul className="mt-4 space-y-2 text-muted">
          {benefits.map(b=> <li key={b}>• {b}</li>)}
        </ul>
      </div>

      <div className="card p-6 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-text">Integración todo-en-uno</h3>
        <p className="text-muted mt-2">TMS + comunicación + IA + educación y pagos en una sola plataforma.</p>
      </div>
    </section>
  )
}
