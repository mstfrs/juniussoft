import TimelineItem from './TimelineItem';
import Title from '@/components/common/Title';
import { timelineData } from '@/components/about/timelineData';

const AboutTimeline = () => {
  return (
    <div className="py-20 roadmap mt-20">
      <Title
        subTitle="Our Journey of Evolution"
        title="From Humble Beginnings to a Legacy of Innovation."
        classNames="px-6"
      />
      <div className="container relative lg:py-20 py-10">
        {/* timeline-line */}
        <div className="absolute lg:left-1/2 lg:-translate-x-1/2 h-full top-0 w-1 rounded-[32px]  z-10 bg-white"></div>
        {timelineData
          ?.sort((a, b) => b?.timelineId - a?.timelineId)
          ?.map((item, i) => (
            <TimelineItem item={item} index={i} key={item?.timelineId} />
          ))}
      </div>
    </div>
  );
};

export default AboutTimeline;
