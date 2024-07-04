import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Reveal from '@/components/common/ScrollAnimation';
import Title from '@/components/common/Title';

import { useModal } from '@/context/ModalContext';
import { aboutUsData } from '@/components/about/aboutUsData';

const AboutCompany = () => {
  const { setIsModalOpen } = useModal();

  return (
    <div className="py-20">
      <div className="container">
        <Title subTitle="Our Journey" title="About TechWizard" primary={true} />
        <div className="grid md:grid-cols-2 lg:gap-16 gap-10 items-center">
          {/* ABOUT IMAGE SIDE */}
          <Reveal from={200}>
            <div className="grid grid-cols-2 gap-5 w-full relative h-fit">
              {aboutUsData?.aboutImage?.map((img, index) => (
                <Reveal from={100} key={index}>
                  <div className="image">
                    <Image
                      src={img}
                      alt="About Image"
                      className={twMerge(
                        'w-full h-full sm:min-h-[550px] min-h-[450px] object-cover rounded-lg',
                        index === 1 && 'mt-20'
                      )}
                      width={550}
                      height={550}
                      priority
                    />
                  </div>
                </Reveal>
              ))}
              <div className="flex items-center gap-3 w-fit py-4 px-6 bg-primary absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-100 rounded-md">
                <h2 className="text-6xl font-bold">6</h2>
                <p className="text-2xl">Years Of Journey</p>
              </div>
            </div>
          </Reveal>
          {/* ABOUT IMAGE SIDE */}

          {/* ABOUT CONTENT */}
          <Reveal from={200}>
            <div>
              <p className={`md:text-lg text-justify transition-all`}>
                <span className="lg:text-[28px] text-xl font-medium">
                  {aboutUsData?.aboutDescription?.split(' ')?.slice(0, 8)?.join(' ')}
                </span>{' '}
                {aboutUsData?.aboutDescription?.split(' ')?.slice(8, -1)?.join(' ')}
              </p>

              {/* POINTS */}
              <ul className="mt-8 grid lg:grid-cols-2 gap-5 w-full">
                {aboutUsData?.keyPoints.map((point, i) => (
                  <div className="flex flex-col md:flex-row md:gap-5 gap-2" key={i}>
                    <span className="text-5xl text-gray-500">
                      <point.icon />
                    </span>
                    <div>
                      <h5 className="text-2xl font-medium">{point.title}</h5>
                      <p className="text-lg text-gray-600 text-justify">{point.description}</p>
                    </div>
                  </div>
                ))}
              </ul>
              {/* POINTS */}

              <button className="btn btn-secondary mt-10" onClick={() => setIsModalOpen(true)}>
                GET QUOTATION
              </button>
            </div>
          </Reveal>
          {/* ABOUT CONTENT */}
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
