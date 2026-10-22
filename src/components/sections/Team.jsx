import React from 'react'
import { teamData } from '../../data/team'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Team = () => {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="team" ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6">
            Conoce al equipo detrás de Numma
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesionales apasionados por la innovación tecnológica y el impacto social
          </p>
        </div>
        {/* Team grid will be implemented */}
      </div>
    </section>
  )
}

export default Team