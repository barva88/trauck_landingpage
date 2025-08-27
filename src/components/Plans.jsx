import React from 'react'

const plans = [
  {name: 'Starter', price: '$29', desc: 'Para carriers pequeños que empiezan'},
  {name: 'Pro', price: '$79', desc: 'Funciones avanzadas y créditos de IA'},
  {name: 'Enterprise', price: 'Custom', desc: 'Soporte y servicios a medida'}
]

export default function Plans(){
  return (
    <section id="plans" className="space-y-6">
      <h2 className="text-3xl font-bold">Planes y precios</h2>
  <p className="text-muted">Ejemplo de paquetes; integración con Stripe preparada (placeholder).</p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {plans.map((p, idx)=> (
          <div key={p.name} className={`${idx===1? 'transform scale-105 shadow-2xl bg-surface-1 text-text': 'card'} p-6 rounded-lg text-center` }>
            <div className="text-2xl font-bold text-text">{p.price}</div>
            <div className={`${idx===1? 'text-secondary font-bold mt-2':'text-text font-semibold mt-2'}`}>{p.name}</div>
            <div className="text-muted mt-2">{p.desc}</div>
            <button className={`mt-4 px-4 py-2 rounded-md ${idx===1? 'bg-primary text-text hover:bg-primary-600':'bg-primary text-text hover:bg-primary-600'}`}>Comenzar</button>
          </div>
        ))}
      </div>
    </section>
  )
}
