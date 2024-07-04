'use client';

import { useState } from 'react';
import Accordion from '@/components/Accordion';
import Title from '@/components/common/Title';

const ServiceFaqs = ({ serviceFAQs }) => {
  const [openAccodion, setOpenAccodion] = useState(0);

  const toggleAccordion = (index) => {
    if (openAccodion === index) {
      return setOpenAccodion(null);
    }

    setOpenAccodion(index);
  };
  return (
    <>
      {serviceFAQs && (
        <div className="py-20">
          <div className="container space-y-10 flex flex-col items-center">
            <Title
              subTitle="Related Design FAQ's"
              title="Answers to Your Burning Questions"
              primary={true}
              classNames="mb-5"
            />

            {/* SERVICE FAQS */}
            <ul className="space-y-6">
              {serviceFAQs?.map((item, i) => (
                <li key={item.id}>
                  {/* FAQ ITEM */}
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
      )}
    </>
  );
};

export default ServiceFaqs;
