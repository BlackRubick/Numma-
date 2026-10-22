import React from 'react'
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import Reveal from '../components/common/Reveal'
import { whatsappUrl } from '../data/whatsapp'

const contactItems = [
  {
    icon: Mail,
    label: 'Correo',
    value: 'numma.contact@gmail.com',
    href: 'mailto:numma.contact@gmail.com',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+52 962 3546362',
    href: whatsappUrl,
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
          {/* WhatsApp */}
          <Reveal className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between gap-10 rounded-3xl bg-brand-50 p-6 sm:p-10">
              <div>
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-[#25D366] text-white"
                  aria-hidden="true"
                >
                  <MessageCircle className="h-7 w-7" />
                </span>
                <h2 className="mt-6 text-3xl leading-tight sm:text-[2.2rem]">
                  Escríbenos por WhatsApp
                </h2>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-neutral-600 text-pretty">
                  Cuéntanos sobre tu proyecto y te responderemos directamente
                  para darte información y una cotización personalizada.
                </p>
              </div>
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn group w-full bg-[#25D366] text-white hover:bg-[#1ebe5a] sm:w-auto"
                >
                  Iniciar conversación
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <p className="mt-4 text-[15px] leading-snug text-neutral-500">
                  Al contactarnos aceptas nuestro{' '}
                  <Link
                    to="/privacidad"
                    className="font-semibold text-brand-900 underline underline-offset-4 hover:text-accent-600"
                  >
                    Aviso de Privacidad
                  </Link>
                  .
                </p>
              </div>
            </div>
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
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
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
