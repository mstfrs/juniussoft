import { TabSlider } from '../TabSlider';
import { AnimatePresence, motion } from 'framer-motion';
import SubService from './SubService';

const SubServices = ({
  filteredServiceData,
  currentTab,
  setCurrentTab,
  categories,
  currentServiceDescription,
}) => {
  return (
    <div>
      <div className="container">
        <TabSlider currentTab={currentTab} setCurrentTab={setCurrentTab} tabItems={categories} />

        {/* DescriptIon */}
        <p className="text-justify text-lg">{currentServiceDescription}</p>
        {/* DescriptIon */}

        {/* SUB SERVICES */}
        <motion.div layout className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-10 gap-5 my-12">
          <AnimatePresence>
            {filteredServiceData.map((detail, i) => (
              <SubService item={detail} key={i} />
            ))}
          </AnimatePresence>
        </motion.div>
        {/* SUB SERVICES */}
      </div>
    </div>
  );
};

export default SubServices;
