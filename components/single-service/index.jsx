'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

import Loader from '@/components/common/Loader';
import PromoBox from '@/components/PromoBox';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import useLoader from '@/hooks/useLoader';
import { servicesData } from '@/data/serviceData';
import ServiceFaqs from './ServiceFaqs';
import PortfolioHomeOne from '../homes/home/PortfolioHomeOne';
import SubServices from './SubServices';

const SingleService = ({ singleServiceName }) => {
  const loading = useLoader();
  const [currentTab, setCurrentTab] = useState('all');
  const [filteredServiceData, setFilteredServiceData] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCurrentService = (slug, services) => {
    return services?.find(
      (service) => service?.serviceName?.toLowerCase().split(' ').join('-') === slug
    );
  };
  const currentService = getCurrentService(singleServiceName, servicesData);

  useEffect(() => {
    const serviceCategories = currentService?.subServices?.flatMap(
      (service) => service?.subServiceName
    );

    // Convert the array to a Set to remove duplicates, and then spread it back into an array.
    const uniqueCategories = [...new Set(serviceCategories)];

    setCategories(uniqueCategories);
  }, [currentService]);

  // FILTER SUB SERVICE DATA
  useEffect(() => {
    const filteredData = () => {
      if (currentTab === 'all') {
        let data = [];

        currentService?.subServices
          ?.map((subService) => subService?.subServiceDetails)
          ?.forEach((item) => data.push(...item));

        return setFilteredServiceData(data);
      } else {
        const data = [];
        currentService?.subServices
          ?.filter((item) => item?.subServiceName === currentTab)
          ?.map((subService) => subService?.subServiceDetails)
          ?.forEach((item) => data.push(...item));
        return setFilteredServiceData(data);
      }
    };
    filteredData();
  }, [currentService?.subServices, currentTab]);

  if (loading) {
    return <Loader />;
  }

  if (!currentService) {
    return notFound();
  }

  return (
    <div>
      <Breadcrumb title={singleServiceName?.split('-').join(' ')} />

      <div>
        <SubServices
          filteredServiceData={filteredServiceData}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          categories={categories}
          currentServiceDescription={currentService?.serviceDescription}
        />

        <PortfolioHomeOne />
        <ServiceFaqs serviceFAQs={currentService?.serviceFAQs} />
      </div>

      <PromoBox />
    </div>
  );
};

export default SingleService;
