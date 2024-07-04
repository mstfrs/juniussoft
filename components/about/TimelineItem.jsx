import { MdEditDocument } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { FaHandshake, FaCartArrowDown, FaGlobeAmericas } from 'react-icons/fa';
import { GiOffshorePlatform } from 'react-icons/gi';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, index }) => {
  // Define animation variants for even and odd items
  const variants = {
    even: {
      initial: { x: 250, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    odd: {
      initial: { x: -250, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  };

  const animationVariant = index % 2 === 0 ? 'even' : 'odd';

  return (
    // Timeline item container with flex layout
    <motion.li
      className={`text-[${item.timelineColor}] flex lg:-mt-8  mt-8 first:mt-0 ml-6 lg:ml-0 lg:even:justify-end timeline relative group`}
      initial="initial"
      whileInView="animate"
      variants={variants[animationVariant]}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Container for the year marker */}
      <div className="lg:min-w-[50%] 2xl:max-w-[630px] xl:max-w-[606px] lg:max-w-[468px] max-w-[468px] lg:group-odd:text-right text-left flex flex-col-reverse lg:flex-row lg:group-even:flex-row-reverse lg:items-center gap-5 lg:group-odd:pr-16 lg:group-even:pl-16 sm:px-10 px-6">
        {/* Year marker background */}
        <div className="space-y-5">
          {/* Title of the timeline item */}
          <div className="flex items-center gap-4 justify-between lg:group-even:flex-row-reverse">
            <span className="text-6xl hidden sm:block">
              {<item.icon />}
              {/* {item?.icon && <item.icon />} */}
            </span>
            <h4 className={`font-bold sm:text-2xl text-xl`}>{item?.timelineTitle}</h4>
          </div>
          {/* Description of the timeline item */}
          <p className="sm:text-lg text-gray-100 line-clamp-4">{item?.timelineDescription}</p>
        </div>
        <div
          className={`bg-[${item.timelineColor}]  w-32 min-w-[128px] h-32 rounded-full grid place-items-center relative option-box before:absolute before:w-[62px] before:h-[3px] group-even:before:-left-[62px] lg:group-odd:before:-right-[62px] lg:group-odd:before:left-[100%] group-odd:before:-left-[62px] before:bg-inherit after:absolute after:w-[20px] after:h-[20px] after:rounded-full group-even:after:-left-[74px] lg:group-odd:after:left-[182px] group-odd:after:-left-[74px] after:bg-inherit after:z-10 sm:ml-0 ml-[18px]`}
        >
          <div
            className={
              'flex flex-col justify-center items-center text-2xl font-medium p-5 w-28 h-28 bg-white hover:bg-inherit hover:text-white translate-all duration-500 rounded-full shadow-md'
            }
          >
            <p className="font-bold text-4xl">{item?.year}</p>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default TimelineItem;
