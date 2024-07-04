'use client';

import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Reveal from '@/components/common/ScrollAnimation';

const ProjectCounter = ({ count }) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <Reveal from={200}>
      <li className="list-none text-primary w-full bg-transparent border-2 border-solid border-primary border-opacity-40 px-5 py-4 rounded-3xl group max-h-[200px] h-[200px] transition-all duration-500">
        <div className="text-center w-full h-full flex flex-col justify-center rounded-xl">
          {/* ScrollTrigger to trigger the counter animation */}
          <ScrollTrigger onEnter={() => setCounterOn(true)}>
            {counterOn && (
              <h2 className="lg:text-5xl text-3xl font-medium">
                {/* CountUp animation */}
                <CountUp start={1} end={count?.countNumber} duration={3} delay={0} />+
              </h2>
            )}
          </ScrollTrigger>
          {/* Display the count name */}
          <h3 className="text-xl text-white font-normal">{count?.countName}</h3>
        </div>
      </li>
    </Reveal>
  );
};

export default ProjectCounter;
