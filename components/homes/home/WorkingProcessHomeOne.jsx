import Reveal from '@/components/common/ScrollAnimation';
import Title from '@/components/common/Title';
import Image from 'next/image';
import { ourSolutionProcessData } from './ourSolutionProcessData';
import Process from './Process';

const WorkingProcessHomeOne = () => {
  return (
    <section id="process" className="py-24">
      <div className="container">
        <Title
          subTitle="Work Process"
          title="Our Solution Process"
          primary={true}
          titleBlack={false}
        />

        {/* WORKING PROCESS */}
        <div className="grid lg:grid-cols-4 lg:gap-32 gap-20">
          <div className="image w-full lg:col-span-2">
            {/* IMAGE */}
            <Reveal from={100}>
              <Image
                src={ourSolutionProcessData?.image}
                width={500}
                height={500}
                priority
                alt=""
                className="rounded-2xl w-full object-cover sm:min-h-[550px]"
              />
            </Reveal>
          </div>

          <ol className="relative border-l border-gray-300 md:border-dashed w-full lg:col-span-2 h-fit lg:pl-6 pl-16 lg:space-y-10 space-y-5">
            {ourSolutionProcessData?.topics?.map((solution, i) => (
              // PROCESS ITEM
              <Process key={i} index={i} item={solution} />
            ))}
          </ol>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessHomeOne;
