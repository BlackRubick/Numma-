import React from 'react';
import { Target, Eye } from 'lucide-react';
import Reveal from '../common/Reveal';
import { companyInfo } from '../../data/company';

const statements = [
  { label: 'Misión', text: companyInfo.mission, icon: Target },
  { label: 'Visión', text: companyInfo.vision, icon: Eye },
];

const MissionVisionSection = () => {
  return (
    <section className="panel-inset bg-brand-50 py-12 sm:py-24">
      <div className="container-page grid grid-cols-1 gap-5 md:grid-cols-2">
        {statements.map(({ label, text, icon: Icon }, index) => (
          <Reveal as="article" key={label} delay={index * 100} className="flex">
            <div className="w-full rounded-3xl bg-white p-6 sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <span className="icon-chip" aria-hidden="true">
                  <Icon />
                </span>
                <h2 className="text-2xl">{label}</h2>
              </div>
              <p className="text-lg leading-relaxed text-neutral-600 text-pretty">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSection;
