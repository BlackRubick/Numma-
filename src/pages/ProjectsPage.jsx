import React, { useState } from 'react'
import { Check, Activity, Briefcase } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import FallbackImage from '../components/common/FallbackImage'
import Reveal from '../components/common/Reveal'
import CountUp from '../components/common/CountUp'
import CTASection from '../components/ui/CTASection'

const projectStats = [
  { label: 'Proyectos Completados', value: '12+' },
  { label: 'Clientes Satisfechos', value: '100%' },
  { label: 'Sectores Atendidos', value: '6' },
]

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Hospitalaria MedFlow',
      category: 'medical',
      status: 'completed',
      description:
        'Plataforma integral para la gestión de pacientes, historiales médicos y administración hospitalaria con interfaz intuitiva y seguridad de nivel clínico.',
      image:
        'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80&fit=crop',
      client: 'Sector Privado',
      duration: '8 meses',
      team: 2,
      year: '2024',
      features: [
        'Historiales médicos electrónicos seguros',
        'Sistema de citas en línea',
        'Módulo de facturación integrado',
        'Dashboard analítico en tiempo real',
      ],
    },
    {
      id: 2,
      title: 'CardioMonitor AI',
      category: 'medical',
      status: 'completed',
      description:
        'Aplicación móvil para monitoreo continuo de signos vitales con alertas en tiempo real y análisis predictivo para prevención de eventos cardíacos.',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      client: 'Sector Privado',
      duration: '6 meses',
      team: 2,
      year: '2024',
      features: [
        'Monitoreo en tiempo real 24/7',
        'Alertas inteligentes con IA',
        'Sincronización con wearables',
        'Reportes médicos automatizados',
      ],
    },
    {
      id: 3,
      title: 'IntelliDash Pro',
      category: 'business',
      status: 'completed',
      description:
        'Dashboard empresarial avanzado con visualización de datos en tiempo real, análisis predictivo y automatización de reportes ejecutivos.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      client: 'Grupo Empresarial Chiapas',
      duration: '6 meses',
      team: 2,
      year: '2023',
      features: [
        'Visualización de datos interactiva',
        'Análisis predictivo con ML',
        'Reportes automatizados',
        'Integración multi-fuente',
      ],
    },
    {
      id: 4,
      title: 'TeleMed Connect',
      category: 'medical',
      status: 'completed',
      description:
        'Plataforma completa de telemedicina con videoconferencias seguras, prescripciones digitales y seguimiento remoto de pacientes.',
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      client: 'Sector Privado',
      duration: '10 meses',
      team: 2,
      year: '2024',
      features: [
        'Videoconferencias HD seguras',
        'Prescripciones digitales',
        'Chat médico encriptado',
        'Seguimiento de tratamientos',
      ],
    },
    {
      id: 5,
      title: 'SmartCommerce AI',
      category: 'business',
      status: 'completed',
      description:
        'Plataforma de e-commerce con recomendaciones personalizadas, chatbot inteligente y análisis predictivo de ventas y análisis de sentimientos',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      client: 'TOkkiSoft',
      duration: '7 meses',
      team: 2,
      year: '2023',
      features: [
        'Recomendaciones con IA',
        'Chatbot inteligente',
        'Análisis predictivo de ventas',
        'Optimización de inventario',
      ],
    },
    {
      id: 6,
      title: 'MedInventory QR',
      category: 'medical',
      status: 'completed',
      description:
        'Sistema móvil para control de inventario médico con códigos QR, alertas de vencimiento y optimización automática de pedidos.',
      image:
        'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop',
      client: 'Farmacias Médico Amigo',
      duration: '5 meses',
      team: 2,
      year: '2024',
      features: [
        'Escaneo QR automatizado',
        'Alertas de vencimiento',
        'Optimización de pedidos',
        'Trazabilidad completa',
      ],
    },
  ]

  const categories = [
    { id: 'all', name: 'Todos', count: projects.length },
    {
      id: 'medical',
      name: 'Médicos',
      count: projects.filter(p => p.category === 'medical').length,
    },
    {
      id: 'business',
      name: 'Empresariales',
      count: projects.filter(p => p.category === 'business').length,
    },
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory)

  const getStatusColor = status => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500'
      case 'in-progress':
        return 'bg-accent-600'
      case 'planning':
        return 'bg-amber-500'
      default:
        return 'bg-neutral-400'
    }
  }

  const getStatusText = status => {
    switch (status) {
      case 'completed':
        return 'Completado'
      case 'in-progress':
        return 'En Progreso'
      case 'planning':
        return 'Planificación'
      default:
        return 'Estado desconocido'
    }
  }

  const renderMeta = project => (
    <dl className="mt-6 grid grid-cols-1 gap-x-4 gap-y-3 border-y border-neutral-100 py-4 text-[15px] min-[360px]:grid-cols-2">
      <div className="min-[360px]:col-span-2">
        <dt className="text-neutral-500">Cliente</dt>
        <dd className="font-semibold text-brand-900">{project.client}</dd>
      </div>
      <div>
        <dt className="text-neutral-500">Duración</dt>
        <dd className="font-semibold text-brand-900">{project.duration}</dd>
      </div>
      <div>
        <dt className="text-neutral-500">Equipo</dt>
        <dd className="font-semibold text-brand-900">
          {project.team} desarrolladores
        </dd>
      </div>
    </dl>
  )

  const renderFeatures = project => (
    <div className="mt-5">
      <h3 className="mb-3 text-base">Características principales:</h3>
      <ul className="space-y-2">
        {project.features.slice(0, 3).map(feature => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-neutral-600"
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
    </div>
  )

  const renderImage = (project, className) => (
    <div className={`relative overflow-hidden bg-brand-50 ${className}`}>
      <FallbackImage
        src={project.image}
        alt={project.title}
        fallback={
          <span className="flex flex-col items-center gap-4">
            <span className="icon-chip bg-white">
              {project.category === 'medical' ? <Activity /> : <Briefcase />}
            </span>
            <span className="text-lg font-semibold text-brand-900">
              {project.title}
            </span>
          </span>
        }
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
      />
      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-900">
        <span
          className={`h-2 w-2 rounded-full ${getStatusColor(project.status)}`}
          aria-hidden="true"
        />
        {getStatusText(project.status)}
      </span>
    </div>
  )

  const renderHeading = (project, size) => (
    <>
      <p className="eyebrow">
        {project.category === 'medical' ? 'Sector Médico' : 'Empresarial'} ·{' '}
        {project.year}
      </p>
      <h2 className={`mt-2 ${size}`}>{project.title}</h2>
      <p className="mt-3 leading-relaxed text-neutral-600 text-pretty">
        {project.description}
      </p>
    </>
  )

  const [featured, ...rest] = filteredProjects

  return (
    <div>
      <PageHeader
        title="Nuestros Proyectos"
        description="Casos de éxito que demuestran nuestro compromiso con la innovación y la excelencia tecnológica"
        image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80&fit=crop"
        imageAlt="Muestras de laboratorio en una placa de análisis"
      >
        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
          {projectStats.map(stat => (
            <div key={stat.label} className="flex flex-col">
              <dd className="order-1 text-4xl font-bold text-accent-600">
                <CountUp value={stat.value} />
              </dd>
              <dt className="order-2 mt-1 text-[15px] text-neutral-600">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </PageHeader>

      <section className="py-14 sm:py-20">
        <div className="container-page">
          {/* Filtro */}
          <div
            className="mb-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar proyectos por categoría"
          >
            {categories.map(category => {
              const isSelected = selectedCategory === category.id
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  aria-pressed={isSelected}
                  className={`rounded-full border px-5 py-2.5 text-[16px] font-semibold transition-colors duration-200 ${
                    isSelected
                      ? 'border-brand-900 bg-brand-900 text-white'
                      : 'border-neutral-300 bg-white text-brand-900 hover:border-brand-900'
                  }`}
                >
                  {category.name}
                  <span
                    className={`ml-2 ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}
                  >
                    {category.count}
                  </span>
                </button>
              )
            })}
          </div>

          {featured && (
            <Reveal
              as="article"
              key={featured.id}
              className="card group mb-6 grid overflow-hidden lg:grid-cols-2"
            >
              {renderImage(
                featured,
                'aspect-[16/10] lg:aspect-auto lg:min-h-[28rem]'
              )}
              <div className="flex flex-col p-6 sm:p-10">
                {renderHeading(featured, 'text-2xl sm:text-3xl')}
                {renderMeta(featured)}
                {renderFeatures(featured)}
              </div>
            </Reveal>
          )}

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, index) => (
              <Reveal
                as="li"
                key={project.id}
                delay={(index % 3) * 80}
                className="flex"
              >
                <div className="card card-hover group flex w-full flex-col overflow-hidden">
                  {renderImage(project, 'aspect-[16/10]')}
                  <div className="flex flex-1 flex-col p-6">
                    {renderHeading(project, 'text-xl')}
                    {renderMeta(project)}
                    {renderFeatures(project)}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default ProjectsPage
