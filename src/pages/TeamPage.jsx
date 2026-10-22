import React from 'react'
import {
  Mail,
  Linkedin,
  Award,
  MapPin,
  Calendar,
  Code,
  Heart,
  Star,
  Users,
  Check,
  GraduationCap,
  Wrench,
  FolderOpen,
  Languages,
} from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import Reveal from '../components/common/Reveal'
import FeatureGrid from '../components/common/FeatureGrid'
import FallbackImage from '../components/common/FallbackImage'
import CTASection from '../components/ui/CTASection'
import CountUp from '../components/common/CountUp'

const MemberPhoto = ({ src, name }) => {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map(part => part[0])
    .join('')

  return (
    <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-brand-50">
      <FallbackImage
        src={src}
        alt={name}
        className="h-full w-full object-cover"
        fallback={
          <span className="text-5xl font-bold text-neutral-400">
            {initials}
          </span>
        }
      />
    </div>
  )
}

const DetailBlock = ({ title, icon: Icon, children }) => (
  <div className="grid grid-cols-1 gap-3 border-t border-neutral-200 py-6 md:grid-cols-[13rem_1fr] md:gap-6 lg:grid-cols-1 lg:gap-3 xl:grid-cols-[13rem_1fr] xl:gap-6">
    <h4 className="flex items-center gap-2.5 text-base">
      <Icon className="h-5 w-5 text-accent-600" aria-hidden="true" />
      {title}
    </h4>
    <div>{children}</div>
  </div>
)

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'César Gómez Aguilera',
      role: 'Co-fundador & CEO',
      profession: 'Desarrollador de Software',
      experience: '3 años de experiencia',
      education:
        'Ing. en Desarrollo de Software - Universidad Politecnica de Chiapas',
      specialization:
        'Desarrollo full-stack y arquitectura de sistemas escalables',
      image: '/images/team/cesar.jpeg',
      description:
        'Desarrollador full-stack especializado en la creación de aplicaciones web y móviles robustas y escalables. Experto en tecnologías modernas y metodologías ágiles para el desarrollo de software empresarial.',
      skills: [
        'React/Next.js',
        'Node.js/Python',
        'Cloud Computing (AWS/Azure)',
        'DevOps & CI/CD',
        'Desarrollador Frontend',
      ],
      email: 'blackrubick14@gmail.com',
      linkedin: 'https://www.linkedin.com/in/cesar-gomez-aguilera-429125316/',
      achievements: [
        'Programa especializado: Ciberseguridad de Google',
        'Google Cloud Professional Developer',
        'Hackaton Varathon Ganador 1er Lugar ',
      ],
      projects: [
        'IntelliDash Pro',
        'Diagnostico medico asisitido por  AI',
        'Sistema de Gestión Hospitalaria',
      ],
      languages: ['Español', 'Inglés'],
      location: 'Tuxtla Gutiérrez, Chiapas',
      joinedYear: '2022',
    },
    {
      id: 2,
      name: 'Luis Felipe Morales Gutiérrez',
      role: 'Co-fundador & CTO',
      profession: 'Ingeniero Biomédica',
      experience: '3 años de experiencia',
      education: 'Ingeniería Biomédica - Universidad Politecnica de Chiapas',
      specialization: 'Sistemas médicos digitales ',
      image: '/images/team/felipe.jpeg',
      description:
        'Especialista en el desarrollo de tecnologías médicas innovadoras con enfoque en la mejora de la atención sanitaria a través de soluciones digitales. Experta en integración de dispositivos médicos y análisis de big data en salud.',
      skills: [
        'Ingeniería Biomédica',
        'Análisis de Datos Médicos',
        'Machine Learning en Salud',
      ],
      email: 'felipemorales453@gmail.com',
      linkedin:
        'https://www.linkedin.com/in/luis-felipe-morales-gutierrez-159b75325/',
      achievements: ['Premio Innovación Tecnológica 2023'],
      projects: ['Sistema de Gestión Hospitalaria', 'CardioMonitor AI'],
      languages: ['Español', 'Inglés'],
      location: 'Tuxtla Gutiérrez, Chiapas',
      joinedYear: '2022',
    },
  ]

  const companyValues = [
    {
      icon: <Code />,
      title: 'Excelencia Técnica',
      description:
        'Nos comprometemos con los más altos estándares de calidad en cada línea de código.',
    },
    {
      icon: <Heart />,
      title: 'Impacto Social',
      description:
        'Desarrollamos tecnología que mejora la vida de las personas y contribuye al bienestar social.',
    },
    {
      icon: <Star />,
      title: 'Innovación Continua',
      description:
        'Siempre buscamos las últimas tecnologías para crear soluciones disruptivas.',
    },
    {
      icon: <Users />,
      title: 'Trabajo en Equipo',
      description:
        'Creemos en la colaboración y el intercambio de conocimientos para lograr los mejores resultados.',
    },
  ]

  const culturePoints = [
    'Flexibilidad y balance trabajo-vida',
    'Oportunidades de crecimiento profesional',
    'Ambiente colaborativo e inclusivo',
    'Apoyo para certificaciones y formación',
  ]

  const hiringReasons = [
    {
      value: '+3 años',
      text: 'De experiencia en desarrollo de software y soluciones médicas',
    },
    {
      value: 'Especialistas',
      text: 'Equipo multidisciplinario en ingeniería biomédica y software',
    },
    {
      value: '100%',
      text: 'Comprometidos con la calidad, innovación y atención personalizada',
    },
  ]

  const photo = id =>
    `https://images.unsplash.com/photo-${id}?w=1200&q=80&fit=crop`

  return (
    <div>
      <PageHeader
        title="Nuestro Equipo"
        description="Conoce a los profesionales apasionados por la innovación tecnológica y el impacto social que están detrás de Numma"
        image={photo('1522071820081-009f0129c71c')}
        imageAlt="Equipo colaborando alrededor de una mesa de trabajo"
      />

      {/* Integrantes */}
      <section className="py-20 sm:py-24">
        <div className="container-page space-y-20 sm:space-y-28">
          {teamMembers.map(member => (
            <Reveal
              as="article"
              key={member.id}
              className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16"
              aria-labelledby={`member-${member.id}`}
            >
              {/* Ficha */}
              <div className="lg:col-span-4">
                <div className="sm:grid sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-end sm:gap-8 lg:sticky lg:top-28 lg:block">
                  <div className="max-w-sm">
                    <MemberPhoto src={member.image} name={member.name} />
                  </div>
                  <div>
                    <h3
                      id={`member-${member.id}`}
                      className="mt-6 text-2xl sm:mt-0 lg:mt-6"
                    >
                      {member.name}
                    </h3>
                    <p className="mt-1 font-semibold text-brand-900">
                      {member.role}
                    </p>
                    <p className="text-neutral-600">{member.profession}</p>

                    <ul className="mt-5 space-y-2 text-[15px] text-neutral-600">
                      <li className="flex items-center gap-2.5">
                        <MapPin
                          className="h-4 w-4 text-neutral-400"
                          aria-hidden="true"
                        />
                        {member.location}
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Calendar
                          className="h-4 w-4 text-neutral-400"
                          aria-hidden="true"
                        />
                        En Numma desde {member.joinedYear}
                      </li>
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="btn-primary h-11 px-5 text-[15px]"
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        Correo
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline h-11 px-5 text-[15px]"
                      >
                        <Linkedin className="h-4 w-4" aria-hidden="true" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detalle */}
              <div className="lg:col-span-8">
                <h4 className="text-2xl">
                  Acerca de {member.name.split(' ')[0]}
                </h4>
                <p className="mt-3 pb-8 text-lg leading-relaxed text-neutral-600 text-pretty">
                  {member.description}
                </p>

                <DetailBlock
                  title="Experiencia y Formación"
                  icon={GraduationCap}
                >
                  <dl className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <dt className="text-[15px] text-neutral-500">
                        Experiencia
                      </dt>
                      <dd className="font-semibold text-brand-900">
                        {member.experience}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[15px] text-neutral-500">
                        Educación
                      </dt>
                      <dd className="font-semibold text-brand-900">
                        {member.education}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[15px] text-neutral-500">
                        Especialización
                      </dt>
                      <dd className="font-semibold text-brand-900">
                        {member.specialization}
                      </dd>
                    </div>
                  </dl>
                </DetailBlock>

                <DetailBlock title="Habilidades Técnicas" icon={Wrench}>
                  <ul className="flex flex-wrap gap-2">
                    {member.skills.map(skill => (
                      <li
                        key={skill}
                        className="rounded-full bg-brand-50 px-3 py-1 text-[15px] font-medium text-neutral-600"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock title="Logros y Certificaciones" icon={Award}>
                  <ul className="space-y-2">
                    {member.achievements.map(achievement => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2.5 text-neutral-600"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-accent-600"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock title="Proyectos Destacados" icon={FolderOpen}>
                  <ul className="space-y-2">
                    {member.projects.map(project => (
                      <li
                        key={project}
                        className="flex items-start gap-2.5 text-neutral-600"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-accent-600"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        {project}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock title="Idiomas" icon={Languages}>
                  <p className="text-neutral-600">
                    {member.languages.join(' · ')}
                  </p>
                </DetailBlock>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="panel-inset bg-brand-50 py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="mb-12 max-w-2xl">
            <h2 className="text-3xl leading-tight sm:text-[2.6rem]">
              Nuestros Valores
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-neutral-600">
              Los principios que guían cada decisión y proyecto que emprendemos
            </p>
          </Reveal>
          <FeatureGrid items={companyValues} />
        </div>
      </section>

      {/* Cultura */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <img
              src="/images/logonuma.jpeg"
              alt="logo Numma"
              loading="lazy"
              className="mx-auto aspect-square w-full max-w-sm rounded-3xl object-cover lg:max-w-none"
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <h2 className="text-3xl leading-tight sm:text-[2.6rem]">
              Nuestra Cultura
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-600 text-pretty">
              <p>
                En Numma fomentamos un ambiente de trabajo colaborativo,
                creativo e inclusivo. Creemos que la diversidad de pensamiento y
                experiencia es fundamental para la innovación. Nuestro equipo
                trabaja con pasión para crear soluciones que realmente impacten
                en la vida de las personas.
              </p>
              <p>
                Valoramos el aprendizaje continuo, la experimentación y el
                crecimiento profesional. Cada miembro de nuestro equipo tiene la
                oportunidad de liderar proyectos, proponer nuevas ideas y
                contribuir al éxito colectivo de la empresa.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {culturePoints.map(point => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 font-medium text-brand-900"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-accent-600"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Por qué contratarnos */}
      <section className="pb-4">
        <div className="container-page">
          <Reveal
            as="h2"
            className="mb-10 text-3xl leading-tight sm:text-[2.6rem]"
          >
            ¿Por qué contratarnos?
          </Reveal>
          <dl className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {hiringReasons.map((reason, index) => (
              <Reveal key={reason.value} delay={index * 80} className="flex">
                <div className="card w-full p-8">
                  <dt className="text-4xl font-bold text-accent-600">
                    <CountUp value={reason.value} />
                  </dt>
                  <dd className="mt-3 text-lg leading-relaxed text-neutral-600">
                    {reason.text}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default TeamPage
