import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal';

const CTASection = () => {
  return (
    <section className="py-20 sm:py-24">
      <Reveal className="container-page">
        <div className="flex flex-col gap-8 rounded-3xl bg-accent-600 px-6 py-10 sm:rounded-[2rem] sm:px-14 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-white sm:text-4xl">¿Listo para innovar?</h2>
            <p className="mt-3 text-lg leading-relaxed text-accent-100 text-pretty sm:text-xl">
              Únete a las empresas que ya están transformando su futuro con nuestras soluciones tecnológicas
            </p>
          </div>
          <Link to="/contacto" className="btn-white group w-full shrink-0 sm:w-auto">
            Comienza tu proyecto
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default CTASection;
