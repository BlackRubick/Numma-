import React from 'react'
import CountUp from './CountUp'
import Reveal from './Reveal'

// Fila de cifras con divisores finos
const StatBand = ({ items }) => (
  <section className="py-14 sm:py-16">
    <Reveal
      as="dl"
      className="container-page grid grid-cols-2 gap-y-10 lg:grid-cols-4"
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`flex flex-col border-neutral-200 ${
            index % 2 ? 'border-l pl-6 sm:pl-8' : ''
          } ${index > 0 ? 'lg:border-l lg:pl-8' : ''}`}
        >
          <dd className="order-1 text-4xl font-bold tracking-tight text-accent-600 sm:text-5xl">
            <CountUp value={item.value} />
          </dd>
          <dt className="order-2 mt-2 text-neutral-600">{item.label}</dt>
        </div>
      ))}
    </Reveal>
  </section>
)

export default StatBand
