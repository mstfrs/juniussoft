'use client';

import Loader from '@/components/common/Loader';
import WhyChooseUs from '@/components/whyChooseUs';
import { useEffect, useState } from 'react';

const WhyChooseUsPage = () => {
  // State to handle loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <WhyChooseUs />
    </>
  );
};

export default WhyChooseUsPage;
