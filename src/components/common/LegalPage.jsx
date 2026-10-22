import React from 'react'
import { ChevronDown } from 'lucide-react'
import PageHeader from './PageHeader'

const TableOfContents = ({ sections }) => (
  <ol className="space-y-1 border-l border-neutral-200">
    {sections.map((section, index) => (
      <li key={section.id}>
        <a
          href={`#${section.id}`}
          className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[15px] text-neutral-600 transition-colors hover:border-brand-900 hover:text-brand-900"
        >
          {index + 1}. {section.title}
        </a>
      </li>
    ))}
  </ol>
)

// Plantilla de páginas legales: índice (desplegable en móvil, lateral en
// escritorio) y contenido en columna de lectura
const LegalPage = ({ title, description, updated, sections }) => (
  <div>
    <PageHeader title={title} description={description} />

    <section className="py-12 sm:py-20">
      <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <details className="group rounded-2xl border border-neutral-200 lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-semibold text-brand-900 [&::-webkit-details-marker]:hidden">
            Contenido ({sections.length} secciones)
            <ChevronDown
              className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="px-5 pb-4">
            <TableOfContents sections={sections} />
          </div>
        </details>

        <nav
          aria-label="Contenido"
          className="hidden lg:col-span-4 lg:block xl:col-span-3"
        >
          <div className="sticky top-28">
            <p className="mb-3 text-[15px] font-semibold text-brand-900">
              Contenido
            </p>
            <TableOfContents sections={sections} />
          </div>
        </nav>

        <article className="legal lg:col-span-8 xl:col-start-5">
          <p className="!mt-0 text-[15px] text-neutral-500">
            Última actualización: {updated}
          </p>
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2>
                {index + 1}. {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </article>
      </div>
    </section>
  </div>
)

export default LegalPage
