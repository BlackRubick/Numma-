import React from 'react'
import Reveal from './Reveal'

// Cabecera de páginas internas: panel claro redondeado con foto
const PageHeader = ({ title, description, image, imageAlt, children }) => (
  <section className="pt-20">
    <div className="panel-inset bg-brand-50">
      <div className="container-page grid grid-cols-1 items-center gap-10 py-12 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <Reveal className="lg:col-span-6">
          <h1 className="text-[2.1rem] leading-[1.08] sm:text-5xl xl:text-[3.4rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600 text-pretty sm:text-xl">
              {description}
            </p>
          )}
          {children}
        </Reveal>

        {image && (
          <Reveal delay={120} className="lg:col-span-6">
            <img
              src={image}
              alt={imageAlt}
              className="aspect-[4/3] w-full rounded-3xl object-cover md:aspect-[16/9] lg:aspect-[4/3]"
            />
          </Reveal>
        )}
      </div>
    </div>
  </section>
)

export default PageHeader
