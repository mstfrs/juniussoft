import Title from '@/components/common/Title';
import Technology from '@/components/Technology';
import { technologiesData } from './technologiesData';

const TechnologiesHomeOne = () => {
  return (
    <section id="expertise" className="relative overflow-hidden py-24 bg-gray-50">
      <div className="container">
        <Title subTitle="Technologies" title="Our Expertise" primary={true} titleBlack={false} />

        {/* TECHNOLOGIES */}
        <ul className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {technologiesData?.map((item, i) => (
            <Technology key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechnologiesHomeOne;
