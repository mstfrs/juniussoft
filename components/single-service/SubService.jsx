import Image from 'next/image';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

const SubService = ({ item }) => {
  const { setIsModalOpen } = useModal();

  return (
    // Framer Motion for animation
    <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
      <div className="max-h-[300px] h-[300px] w-full bg-white flex flex-col justify-center items-center text-center border border-solid border-primary rounded-xl gap-5 relative group p-5">
        {/* Sub-Service Image */}
        <Image
          src={item?.image}
          alt={item?.title}
          width={80}
          height={80}
          priority
          className="min-h-[80px]"
        />
        {/* Sub-Service Title */}
        <h5 className="text-2xl capitalize">{item?.title}</h5>

        {/* Overlay for Description and Link */}
        <div className="absolute inset-0 bg-gradient rounded-xl text-white px-6 py-8 border-solid border border-primary flex flex-col justify-between scale-0 opacity-0 invisible  group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-500">
          {/* Sub-Service Description */}
          <p className="text-lg">{item?.description}</p>
          {/* Get Quotation Link */}
          <button
            className="flex text-center self-center items-center gap-1 text-lg font-bold group/btn"
            onClick={() => setIsModalOpen(true)}
          >
            GET QUOTATION{' '}
            <HiMiniArrowLongRight className="-translate-x-8 opacity-0 w-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 group-hover/btn:w-8 transition-all duration-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SubService;
