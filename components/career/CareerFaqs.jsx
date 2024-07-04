'use client';
import { useState } from 'react';
import Accordion from '../Accordion';
import Title from '@/components/common/Title';

const CareerFaqs = ({ faqData }) => {
  const [openAccodion, setOpenAccodion] = useState(0);

  const toggleAccordion = (index) => {
    if (openAccodion === index) {
      return setOpenAccodion(null);
    }
    setOpenAccodion(index);
  };

  return (
    <div className="py-14">
      <div className="container">
        <Title subTitle="FAQ" title="Most common question about our services" primary={true} />

        {/* CAREER FAQS */}
        <ul className="space-y-6 max-w-4xl mx-auto mb-20">
          {faqData?.map((item, i) => (
            <li key={item.id}>
              <Accordion
                item={item}
                open={openAccodion === i}
                toggle={() => toggleAccordion(i)}
                withTag={true}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerFaqs;
