'use client';

import useLoader from '@/hooks/useLoader';
import BlogHomeOne from './BlogHomeOne';
import ClientsSection from './ClientsHomeOne';
import HeroHomeOneSlider from './HeroHomeOneSlider';
import PortfolioHomeOne from './PortfolioHomeOne';
import ServicesSection from './ServicesHomeOne';
import TechnologiesHomeOne from './TechnologiesHomeOne';
import TestimonialHomeOne from './TestimonialHomeOne';
import WhoWeAreHomeOne from './WhoWeAreHomeOne';
import WorkingProcessHomeOne from './WorkingProcessHomeOne';
import Loader from '@/components/common/Loader';

const HomeOne = () => {
  const loading = useLoader();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <HeroHomeOneSlider />
      <WhoWeAreHomeOne />
      <ServicesSection />
      <PortfolioHomeOne />
      <WorkingProcessHomeOne />
      <TechnologiesHomeOne />
      <TestimonialHomeOne />
      <BlogHomeOne />
      <ClientsSection />
    </>
  );
};

export default HomeOne;
