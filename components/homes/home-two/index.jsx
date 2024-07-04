'use client';

import PromoBox from '@/components/PromoBox';
import PortfolioHomeOne from '../home/PortfolioHomeOne';
import TechnologiesHomeOne from '../home/TechnologiesHomeOne';
import WorkingProcessHomeOne from '../home/WorkingProcessHomeOne';
import ClientsHomeTwo from './ClientsHomeTwo';
import HeroHomeTwoSlider from './HeroHomeTwoSlider';
import ServicesHomeTwo from './ServicesHomeTwo';
import WhoWeAreHometwo from './WhoWeAreHometwo';
import TestimonialHomeOne from '../home/TestimonialHomeOne';
import BlogHomeOne from '../home/BlogHomeOne';
import Loader from '@/components/common/Loader';
import useLoader from '@/hooks/useLoader';

const HomeTwo = () => {
  const loading = useLoader();

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <HeroHomeTwoSlider />
      <ClientsHomeTwo />
      <WhoWeAreHometwo />
      <ServicesHomeTwo />
      <PortfolioHomeOne />
      <WorkingProcessHomeOne />
      <TechnologiesHomeOne />
      <TestimonialHomeOne />
      <BlogHomeOne />
      <PromoBox />
    </>
  );
};

export default HomeTwo;
