import React from 'react'
import { Activity, Code, Brain, Shield, Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import Reveal from '../components/common/Reveal'
import CTASection from '../components/ui/CTASection'
import { workMethodology } from '../data/services'

const photo = id =>
  `https://images.unsplash.com/photo-${id}?w=1200&q=80&fit=crop`

const serviceMedia = {
  'Software Médico': {
    id: 'software-medico',
    image: photo('1576091160399-112ba8d25d1d'),
    alt: 'Médico consultando información en un teléfono',
  },
  'Soluciones Empresariales': {
    id: 'soluciones-empresariales',
    image: photo('1460925895917-afdab827c52f'),
    alt: 'Panel de indicadores en una computadora portátil',
  },
  'Inteligencia Artificial': {
    id: 'inteligencia-artificial',
    image: photo('1559757175-5700dde675bc'),
    alt: 'Modelo anatómico de cerebro y neurona',
  },
  'Consultoría Tecnológica': {
    id: 'consultoria',
    image: photo('1600880292203-757bb62b4baf'),
    alt: 'Reunión de trabajo con un cliente',
  },
}

const ServicesPage = () => {
  const services = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Software Médico',
      description:
        'Desarrollo de historiales clínicos digitales, sistemas de monitoreo en tiempo real y análisis predictivos para mejorar la atención médica.',
      features: [
        'Historiales electrónicos seguros',
        'Monitoreo en tiempo real',
        'Análisis predictivos con IA',
        'Integración con dispositivos',
      ],
      //price: 'Desde $15,000 USD'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Soluciones Empresariales',
      description:
        'Automatización de procesos, dashboards inteligentes y aplicaciones personalizadas para optimizar la productividad empresarial.',
      features: [
        'Automatización de procesos',
        'Dashboards ejecutivos',
        'Apps móviles empresariales',
        'Integración con sistemas',
      ],
      //price: 'Desde $8,000 USD'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Inteligencia Artificial',
      description:
        'Implementación de modelos de machine learning y deep learning para análisis predictivo y automatización inteligente.',
      features: [
        'Machine learning personalizado',
        'Análisis predictivo',
        'Procesamiento de lenguaje',
        'Visión computacional',
      ],
      //price: 'Desde $12,000 USD'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Consultoría Tecnológica',
      description:
        'Asesoría especializada en transformación digital, arquitectura de software y estrategias tecnológicas.',
      features: [
        'Auditoría de sistemas',
        'Transformación digital',
        'Arquitectura escalable',
        'Roadmap tecnológico',
      ],
      //price: 'Desde $3,000 USD'
    },
  ]

  return (
    <div>
      <PageHeader
        title="Nuestros Servicios"
        description="Soluciones tecnológicas avanzadas diseñadas para transformar tu negocio"
        image={photo('1581091226825-a6a2a5aee158')}
        imageAlt="Ingeniera trabajando en un laboratorio de desarrollo"
      >
        <nav aria-label="Servicios" className="mt-8 flex flex-wrap gap-2">
          {services.map(service => (
            <a
              key={service.title}
              href={`#${serviceMedia[service.title].id}`}
              className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-[15px] font-semibold text-brand-900 transition-colors hover:border-brand-900"
            >
              {service.title}
            </a>
          ))}
        </nav>
      </PageHeader>

      {/* Detalle de cada servicio */}
      <div className="py-12 sm:py-16">
        {services.map((service, index) => {
          const media = serviceMedia[service.title]
          const flipped = index % 2 === 1
          return (
            <section
              key={service.title}
              id={media.id}
              className="scroll-mt-24 py-12 sm:py-16"
            >
              <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal
                  className={`group overflow-hidden rounded-3xl lg:col-span-6 ${flipped ? 'lg:order-2' : ''}`}
                >
                  <img
                    src={media.image}
                    alt={media.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover md:aspect-[16/9] lg:aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </Reveal>
                <Reveal delay={100} className="lg:col-span-6">
                  <span className="icon-chip mb-6" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h2 className="text-3xl leading-tight sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-600 text-pretty">
                    {service.description}
                  </p>
                  <ul className="mt-7 grid gap-x-6 gap-y-3 border-t border-neutral-200 pt-7 sm:grid-cols-2">
                    {service.features.map(feature => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-medium text-brand-900"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-accent-600"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contacto" className="link-arrow group mt-8">
                    Solicitar cotización
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              </div>
            </section>
          )
        })}
      </div>

      {/* Metodología */}
      <section className="panel-inset bg-brand-50 py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="mb-12 max-w-2xl">
            <h2 className="text-3xl leading-tight sm:text-[2.6rem]">
              Metodología de trabajo
            </h2>
          </Reveal>
          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workMethodology.map((step, index) => (
              <Reveal
                as="li"
                key={step.step}
                delay={index * 80}
                className="flex"
              >
                <div className="flex w-full flex-col rounded-3xl bg-white p-6 sm:p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-bold text-accent-600">
                      {String(step.step).padStart(2, '0')}
                    </span>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-neutral-600">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-neutral-100 pt-5">
                    {step.deliverables.map(item => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[15px] text-neutral-600"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-accent-600"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default ServicesPage
