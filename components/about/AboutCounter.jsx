import Title from '@/components/common/Title';
import { counterData } from './countData';
import ProjectCounter from './ProjectCounter';

const AboutCounter = () => {
  return (
    <div className="counter">
      <div className="container md:py-24 py-12 z-20 relative text-white grid md:grid-cols-2 gap-12">
        {/* CONTENT */}
        <div className="max-w-3xl">
          <Title
            subTitle="Explore Our Distinctive Qualities"
            title="Skills and experience that shape tomorrow's technologies"
            primary={false}
            classNames="text-left justify-start items-start mb-6 text-primary"
            subTitleColor={'text-white'}
          />
          <p className="lg:text-xl text-lg text-gray-300">
            {/*  eslint-disable-next-line react/no-unescaped-entities */}
            At TechWizard, we harness the power of skills and experience to shape tomorrow's
            technologies. With a team of experts, we drive innovation and progress in the tech
            world.
          </p>

          <p className="lg:text-4xl text-2xl font-medium mt-10">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            We've empowered tech businesses to achieve remarkable growth, with average revenue
            increases.
          </p>
        </div>
        {/* CONTENT */}

        {/* COUNTER */}
        <div>
          <ul className="w-full grid md:grid-cols-2 xl:gap-5 gap-6 rounded-3xl">
            {counterData?.map((count) => (
              <ProjectCounter key={count?.countId} count={count} />
            ))}
          </ul>
        </div>
        {/* COUNTER */}
      </div>
    </div>
  );
};

export default AboutCounter;
