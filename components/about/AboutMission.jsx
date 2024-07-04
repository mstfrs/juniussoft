import OurMisson from '@/components/about/OurMisson';
import Title from '@/components/common/Title';
import { aboutUsData } from '@/components/about/aboutUsData';

const AboutMission = () => {
  return (
    <div className="mt-16">
      <div className="container">
        <Title
          subTitle="Our Mission and Vision"
          title="Empowering Businesses through Tech Excellence and Global Innovation."
          primary={true}
        />

        {/* OUR MISSION AND VISSION */}
        <ul className="grid md:grid-cols-2">
          {aboutUsData?.ourMission?.map((item, i) => (
            <OurMisson key={item?.aboutId} item={item} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMission;
