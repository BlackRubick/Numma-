import React from 'react';
import Reveal from '../common/Reveal';
import StatBand from '../common/StatBand';
import { companyInfo } from '../../data/company';

const AboutSection = () => {
  return (
    <>
      <StatBand items={companyInfo.stats} />

      <section className="pb-20 pt-6 sm:pb-28">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-3">Quiénes somos</p>
            <h2 className="text-3xl leading-tight sm:text-[2.6rem]">
              Transformando el futuro digital
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-600 text-pretty">
              <p>
                Desde nuestra fundación en {companyInfo.founded}, nos hemos dedicado a crear tecnología que
                realmente impacte en la vida de las personas. Combinamos la experiencia médica
                con la innovación tecnológica para desarrollar soluciones que mejoren la
                atención sanitaria y optimicen los procesos empresariales.
              </p>
              <p>
                Nuestro equipo multidisciplinario está formado por ingenieros biomédicos,
                desarrolladores de software y especialistas en inteligencia artificial,
                todos comprometidos con la excelencia y la innovación.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&fit=crop"
              alt="Estetoscopio junto a una computadora portátil"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover md:aspect-[16/9] lg:aspect-[4/3]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
