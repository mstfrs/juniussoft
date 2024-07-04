'use client';

import Button from '@/components/Button';
import Loader from '@/components/common/Loader';
import Title from '@/components/common/Title';

import { careerData } from '@/data/careerData';
import useLoader from '@/hooks/useLoader';
import HeroCareer from './HeroCareer';
import LifeAtTechwizard from './LifeAtTechwizard';
import Benefits from './Benefits';
import Jobs from './Jobs';
import CareerFaqs from './CareerFaqs';

const Career = () => {
  const loading = useLoader();

  const jobData = careerData?.jobs;
  const benefitsData = careerData?.benefits;
  const lifeAtTechWizardData = careerData?.lifeAtTechWizard;
  const faqData = careerData?.faqData;

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <HeroCareer />
      <LifeAtTechwizard lifeAtTechWizardData={lifeAtTechWizardData} />
      <Benefits benefitsData={benefitsData} />
      <Jobs jobData={jobData} />
      <CareerFaqs faqData={faqData} />

      <div className="container mb-20 flex flex-col items-center">
        <Title
          title="Don’t See a Match?"
          subTitle="We are looking for talented people."
          primary={true}
        />
        <Button link="/contact" primary={false} text="CONTACT US" className="w-fit" />
      </div>
    </div>
  );
};

export default Career;
