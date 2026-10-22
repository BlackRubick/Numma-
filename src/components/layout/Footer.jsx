import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'

const serviceLinks = [
  'Software Médico',
  'Soluciones Empresariales',
  'Inteligencia Artificial',
  'Consultoría',
]

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-600">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm leading-relaxed text-neutral-600">
            Innovación que transforma la salud y el futuro digital.
            Desarrollamos soluciones tecnológicas que impactan positivamente en
            la vida de las personas.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 text-base font-bold text-brand-900">Servicios</h3>
          <ul className="space-y-1.5">
            {serviceLinks.map(label => (
              <li key={label}>
                <Link
                  to="/servicios"
                  className="inline-block rounded py-1 transition-colors hover:text-brand-900"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="mb-4 text-base font-bold text-brand-900">Contacto</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:numma.contact@gmail.com"
                className="inline-flex items-center gap-2.5 [overflow-wrap:anywhere] rounded transition-colors hover:text-brand-900"
              >
                <Mail
                  className="h-4 w-4 shrink-0 text-accent-600"
                  aria-hidden="true"
                />
                numma.contact@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+529623546362"
                className="inline-flex items-center gap-2.5 rounded transition-colors hover:text-brand-900"
              >
                <Phone
                  className="h-4 w-4 shrink-0 text-accent-600"
                  aria-hidden="true"
                />
                +52 962 3546362
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin
                className="h-4 w-4 shrink-0 text-accent-600"
                aria-hidden="true"
              />
              Tuxtla Gutiérrez, Chiapas
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="container-page flex flex-col gap-3 pb-28 pt-6 text-[15px] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2025 Numma Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link
                to="/privacidad"
                className="inline-block rounded py-1 transition-colors hover:text-brand-900"
              >
                Aviso de Privacidad
              </Link>
            </li>
            <li>
              <Link
                to="/terminos"
                className="inline-block rounded py-1 transition-colors hover:text-brand-900"
              >
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
