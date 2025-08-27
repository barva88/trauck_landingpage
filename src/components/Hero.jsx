import React from 'react'

export default function Hero(){
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">Start moving more loads, smarter.</h1>
      <p className="max-w-3xl mx-auto mt-6 text-muted">TRAUCK es un TMS inteligente para carriers y pequeños dueños de camiones en EE.UU. Automatiza dispatch, recomienda rutas con IA y permite aceptar cargas por voz o WhatsApp.</p>

      <div className="mt-8 flex items-center justify-center space-x-4">
        <a id="register" href="#" className="bg-primary text-text px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-primary-600">Regístrate</a>
        <a href="#demo" className="text-muted ring-1 ring-surface-2 px-6 py-3 rounded-full">Solicitar demo</a>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="float-dashboard w-[920px]">
          <img src="https://images.unsplash.com/photo-1559028012-4818f7a8b2a2?q=80&w=1400&auto=format&fit=crop" alt="TRAUCK dashboard mockup" className="w-full h-56 object-cover" />
        </div>
      </div>
    </section>
  )
}
