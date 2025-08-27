import React from 'react'

export default function WhatIs(){
  return (
    <section id="what" className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold">¿Qué es TRAUCK?</h2>
  <p className="text-muted mt-4">TRAUCK es una plataforma tecnológica creada para carriers y pequeños dueños de camiones en Estados Unidos. Su propósito es convertirse en “The Smart Dispatcher for Carriers”, un sistema integral que utiliza inteligencia artificial, automatización y comunicación en tiempo real para simplificar y optimizar la operación diaria de transporte.</p>
  <ul className="mt-4 space-y-2 text-muted">
          <li>Integración TMS con módulos inteligentes</li>
          <li>Comunicación por WhatsApp y llamadas</li>
          <li>Panel web y herramientas móviles para drivers</li>
        </ul>
      </div>

      <div className="card p-6 rounded-lg">
  <h3 className="text-lg font-semibold text-text">Visión</h3>
  <p className="text-muted mt-2">Crear el ecosistema más completo y automatizado para el transporte de carga en EE.UU., donde los carriers puedan encontrar, aceptar y gestionar cargas de forma rápida, segura y sencilla.</p>
      </div>
    </section>
  )
}
