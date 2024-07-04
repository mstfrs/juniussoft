'use client';

import { Breadcrumb } from '@/components/common/Breadcrumb';
import Loader from '@/components/common/Loader';

import AboutCounter from '@/components/about/AboutCounter';
import WorkingProcessHomeOne from '@/components/homes/home/WorkingProcessHomeOne';
import useLoader from '@/hooks/useLoader';
import ServiceSection from './ServiceSection';

const Services = () => {
  const loading = useLoader();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="service">
      <Breadcrumb title="Our Services" />
      <ServiceSection />
      <AboutCounter />
      <WorkingProcessHomeOne />
    </div>
  );
};

export default Services;
