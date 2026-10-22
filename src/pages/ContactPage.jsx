import React from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import Reveal from '../components/common/Reveal'

const contactItems = [
  {
    icon: Mail,
    label: 'Correo',
    value: 'numma.contact@gmail.com',
    href: 'mailto:numma.contact@gmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+52 962 3546362',
    href: 'tel:+529623546362',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Tuxtla Gutiérrez, Chiapas',
  },
]

const ContactPage = () => {
  return (
    <div>
      <PageHeader
        title="Contáctanos"
        description="¿Tienes un proyecto en mente? Nos encantaría conocer tus ideas"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80&fit=crop"
        imageAlt="Persona usando su teléfono junto a una computadora portátil"
      />

      <section className="py-20 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Formulario */}
          <Reveal className="lg:col-span-7">
            <h2 className="mb-8 text-3xl leading-tight sm:text-[2.2rem]">
              Envíanos un mensaje
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="field-label">
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    className="field h-12"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="field-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    className="field h-12"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-company" className="field-label">
                  Empresa
                </label>
                <input
                  id="contact-company"
                  type="text"
                  autoComplete="organization"
                  className="field h-12"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="field-label">
                  Proyecto
                </label>
                <textarea
                  id="contact-message"
                  rows="6"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="field resize-y py-3 leading-relaxed"
                ></textarea>
              </div>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
                <button
                  type="submit"
                  className="btn-primary w-full shrink-0 sm:w-auto"
                >
                  Enviar mensaje
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <p className="text-[15px] leading-snug text-neutral-500">
                  Al enviar tu mensaje aceptas nuestro{' '}
                  <Link
                    to="/privacidad"
                    className="font-semibold text-brand-900 underline underline-offset-4 hover:text-accent-600"
                  >
                    Aviso de Privacidad
                  </Link>
                  .
                </p>
              </div>
            </form>
          </Reveal>

          {/* Datos de contacto */}
          <Reveal as="aside" delay={100} className="space-y-5 lg:col-span-5">
            <div className="card divide-y divide-neutral-200 px-5 sm:px-7">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span
                      className="icon-chip h-10 w-10 sm:h-12 sm:w-12 [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-6 sm:[&_svg]:w-6"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] text-neutral-500">
                        {label}
                      </span>
                      <span className="block break-words text-[15px] font-semibold text-brand-900 transition-colors group-hover:text-accent-600 min-[360px]:text-base sm:text-lg">
                        {value}
                      </span>
                    </span>
                  </>
                )
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-3 py-5 sm:gap-4"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 py-5 sm:gap-4"
                  >
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="rounded-3xl bg-accent-600 p-7 text-white">
              <h3 className="text-2xl text-white">
                ¿Necesitas una cotización?
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-accent-100">
                No dudes en llamarnos, te brindaremos una atención ágil y
                personalizada
              </p>
              <a href="tel:+529623546362" className="btn-white mt-6 w-full">
                <Phone className="h-5 w-5" aria-hidden="true" />
                +52 962 3546362
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200">
              <iframe
                title="Mapa de Tuxtla Gutiérrez, Chiapas"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-93.20%2C16.71%2C-93.04%2C16.80&layer=mapnik&marker=16.7528%2C-93.1152"
                className="h-64 w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
