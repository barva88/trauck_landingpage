import React from 'react'

import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'

export default function App() {
  return (
  <div className="min-h-screen hero-gradient text-text">
      <header className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-text font-bold">T</div>
          <div className="text-2xl font-bold text-text">TRAUCK</div>
        </div>
        <nav className="space-x-6 hidden md:block text-muted">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#plans" className="hover:underline">Pricing</a>
          <a href="#testimonials" className="hover:underline">Careers</a>
        </nav>
        <div>
          <a href="#register" className="bg-primary text-text px-4 py-2 rounded-md font-medium hover:bg-primary-600">Regístrate</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-16">
        <Hero />
        <div className="brand-gradient rounded-2xl p-10 mt-6 text-center">
          <p className="text-text/90">Trusted by these companies</p>
          <div className="flex items-center justify-center space-x-10 mt-6 opacity-90 text-text">
            <span>Google</span>
            <span>Slack</span>
            <span>Trustpilot</span>
            <span>CNN</span>
            <span>Clutch</span>
          </div>
        </div>

        <WhatIs />
        <Features />
        <Benefits />
        <Plans />
        <Testimonials />
        <CTA />
      </main>

  <footer className="max-w-7xl mx-auto p-6 text-muted">
  <div className="grid md:grid-cols-4 gap-6 py-8 border-t" style={{borderColor:'var(--border)'}}>
          <div>
            <div className="text-2xl font-bold text-white">TRAUCK</div>
            <p className="text-muted mt-2">The Smart Dispatcher for Carriers — TMS + IA + comunicación en tiempo real.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Secciones</h4>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href="#features" className="hover:underline">Funciones</a></li>
              <li><a href="#what" className="hover:underline">Qué es</a></li>
              <li><a href="#plans" className="hover:underline">Planes</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Recursos</h4>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href="/privacy" className="hover:underline">Política de Privacidad</a></li>
              <li><a href="/terms" className="hover:underline">Términos de Servicio</a></li>
              <li><a href="/careers" className="hover:underline">Carreras</a></li>
              <li><a href="/docs" className="hover:underline">Documentación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contacto</h4>
            <div className="mt-3 text-muted">
              <Contact />
            </div>
          </div>
        </div>

  <div className="text-center text-muted text-sm mt-6">© {new Date().getFullYear()} TRAUCK. Todos los derechos reservados.</div>
      </footer>
    </div>
  )
}
