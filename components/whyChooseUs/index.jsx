'use client';

import PromoBox from '@/components/PromoBox';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import WhoWeAreHometwo from '../homes/home-two/WhoWeAreHometwo';
import AboutCounter from '../about/AboutCounter';
import ServicesHomeTwo from '../homes/home-two/ServicesHomeTwo';
import PortfolioHomeOne from '../homes/home/PortfolioHomeOne';
import TechnologiesHomeOne from '../homes/home/TechnologiesHomeOne';
import BlogHomeOne from '../homes/home/BlogHomeOne';
import Loader from '@/components/common/Loader';
import useLoader from '@/hooks/useLoader';

const WhyChooseUs = () => {
  const loading = useLoader();
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="why-choose-us">
      <Breadcrumb title="Why Choose Us" />

      <WhoWeAreHometwo />
      <AboutCounter />
      <ServicesHomeTwo />
      <PortfolioHomeOne />
      <TechnologiesHomeOne />
      <BlogHomeOne />
      <PromoBox />
    </div>
  );
};

export default WhyChooseUs;
