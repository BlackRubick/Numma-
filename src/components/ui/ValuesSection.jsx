import React from 'react';
import { Zap, Star, Shield, Heart } from 'lucide-react';
import Reveal from '../common/Reveal';
import FeatureGrid from '../common/FeatureGrid';
import { companyInfo } from '../../data/company';

const iconMap = {
  Zap: <Zap />,
  Star: <Star />,
  Shield: <Shield />,
  Heart: <Heart />,
};

const ValuesSection = () => {
  const values = companyInfo.values.map((value) => ({
    ...value,
    icon: iconMap[value.icon],
  }));

  return (
    <section className="pt-20 sm:pt-28">
      <div className="container-page">
        <Reveal className="mb-12 max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-[2.6rem]">Nuestros valores</h2>
          <p className="mt-4 text-xl leading-relaxed text-neutral-600">
            Los principios que guían cada decisión y proyecto que emprendemos
          </p>
        </Reveal>
        <FeatureGrid items={values} />
      </div>
    </section>
  );
};

export default ValuesSection;
