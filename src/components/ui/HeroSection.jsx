import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal';
import { companyInfo } from '../../data/company';

const HeroSection = () => {
  return (
    <section className="pt-20">
      <div className="panel-inset bg-brand-50">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-12 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <Reveal className="lg:col-span-6">
            <h1 className="text-[2.1rem] leading-[1.08] min-[380px]:text-[2.5rem] sm:text-6xl lg:text-[3rem] xl:text-[3.6rem] 2xl:text-[4rem]">
              Innovación que transforma la salud y el futuro digital
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600 text-pretty sm:text-xl">
              {companyInfo.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/servicios" className="btn-primary group">
                Descubre nuestros servicios
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link to="/proyectos" className="btn-outline">
                Ver proyectos
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=1400&q=80&fit=crop"
              alt="Equipo de investigación trabajando en un laboratorio"
              className="aspect-[4/3] w-full rounded-3xl object-cover md:aspect-[16/9] lg:aspect-[5/4]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
