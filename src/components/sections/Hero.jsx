import React from 'react'
import { ChevronRight } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Hero = () => {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section 
      id="home"
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden"
    >
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-6xl md:text-8xl font-thin text-white mb-6 tracking-tight">
          numma <span className="text-blue-400 font-light"></span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Innovación que transforma la salud y el futuro digital
        </p>
        <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
          Descubre nuestra tecnología
          <ChevronRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}

export default Hero