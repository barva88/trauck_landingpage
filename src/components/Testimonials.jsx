import React from 'react'

const items = [
  {name: 'Lucy Tarr', company: 'AB.co', quote: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem.', logoSmall: 'https://ui-avatars.com/api/?name=AB&size=64&background=0ea5a3&color=ffffff', logoLarge: 'https://ui-avatars.com/api/?name=AB&size=256&background=0ea5a3&color=ffffff'},
  {name: 'Grant Styles', company: 'Biffco Enterprises Ltd.', quote: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.', logoSmall: 'https://ui-avatars.com/api/?name=Biffco&size=64&background=6c3bf5&color=ffffff', logoLarge: 'https://ui-avatars.com/api/?name=Biffco&size=256&background=6c3bf5&color=ffffff'},
  {name: 'Oliver Reed', company: 'TransLine', quote: 'TRAUCK nos permitió optimizar rutas y reducir tiempo muerto.', logoSmall: 'https://ui-avatars.com/api/?name=TransLine&size=64&background=0ea5a3&color=ffffff', logoLarge: 'https://ui-avatars.com/api/?name=TransLine&size=256&background=0ea5a3&color=ffffff'},
  {name: 'Maria Lopez', company: 'Lopez Carriers', quote: 'Acepto cargas por voz mientras conduzco, funciona perfecto.', logoSmall: 'https://ui-avatars.com/api/?name=Lopez+Carriers&size=64&background=6c3bf5&color=ffffff', logoLarge: 'https://ui-avatars.com/api/?name=Lopez+Carriers&size=256&background=6c3bf5&color=ffffff'}
]

function TestimonialCard({it}){
  return (
    <div className="testimonial-card relative w-80 md:w-96 flex-shrink-0 p-6 rounded-xl card hover:scale-102 transition-transform">
      {/* small company logo top-right */}
      <img src={it.logoSmall} alt={it.company + ' logo'} className="absolute right-4 top-4 w-10 h-10 rounded-full object-cover" />

      <div className="flex flex-col items-center text-center">
        {/* show large company logo as main image (replaces avatar) */}
  <img src={it.logoLarge} alt={it.company} className="w-24 h-24 object-contain rounded-md" style={{background:'rgba(255,255,255,0.02)', padding:'8px'}} />
  <div className="mt-3 font-semibold text-text">{it.name}</div>
  <div className="text-muted text-sm">{it.company}</div>
  <p className="mt-4 text-muted">"{it.quote}"</p>
      </div>
    </div>
  )
}

export default function Testimonials(){
  // duplicate arrays to make marquee seamless
  const rowA = [...items, ...items]
  const rowB = [...items].reverse()
  const rowBdup = [...rowB, ...rowB]

  return (
    <section id="testimonials" className="space-y-8">
      <h2 className="text-3xl font-bold">Testimonios</h2>

      {/* Row 1 - scroll left */}
      <div className="overflow-hidden">
        <div className="marquee marquee-left flex gap-6 py-4">
          {rowA.map((it, i)=> (
            <TestimonialCard key={it.name + i} it={it} />
          ))}
        </div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="overflow-hidden">
        <div className="marquee marquee-right flex gap-6 py-4">
          {rowBdup.map((it, i)=> (
            <TestimonialCard key={it.name + i + '-b'} it={it} />
          ))}
        </div>
      </div>

    </section>
  )
}

