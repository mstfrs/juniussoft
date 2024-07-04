'use client';

import { useState } from 'react';

import Accordion from '@/components/Accordion';
import PromoBox from '@/components/PromoBox';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import Title from '@/components/common/Title';

import { faqData } from '@/components/faq/faqData';
import Loader from '@/components/common/Loader';
import useLoader from '@/hooks/useLoader';

const Faq = () => {
  const loading = useLoader();
  const [openAccodion, setOpenAccodion] = useState(0);

  const toggleAccordion = (index) => {
    if (openAccodion === index) {
      return setOpenAccodion(null);
    }
    setOpenAccodion(index);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Breadcrumb title="FAQ's" />

      <div className="py-14">
        <div className="container">
          <Title subTitle="Most common question about our services" title="FAQ" primary={true} />

          {/* FAQS */}
          <ul className="space-y-6 max-w-3xl mx-auto mb-20">
            {faqData?.map((item, i) => (
              <li key={item.id}>
                <Accordion
                  item={item}
                  open={openAccodion === i}
                  toggle={() => toggleAccordion(i)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PromoBox />
    </div>
  );
};

export default Faq;
