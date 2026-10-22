import React from 'react'
import Reveal from './Reveal'

const FeatureGrid = ({ items }) => (
  <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item, index) => (
      <Reveal as="li" key={item.title} delay={index * 80} className="flex">
        <div className="card card-hover w-full p-6 sm:p-7">
          <span className="icon-chip mb-6" aria-hidden="true">
            {item.icon}
          </span>
          <h3 className="mb-2 text-xl">{item.title}</h3>
          <p className="leading-relaxed text-neutral-600">{item.description}</p>
        </div>
      </Reveal>
    ))}
  </ul>
)

export default FeatureGrid
