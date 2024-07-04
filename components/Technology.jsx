'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/ScrollAnimation';

const Technology = ({ item }) => {
  return (
    <Reveal from={100}>
      <div className="bg-white drop-shadow-md w-full h-[130px] grid place-items-center rounded-md relative z-10 group">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          {/* TECHNOLOGY IMAGE */}
          <Image src={item?.image} alt={item?.name} width={80} height={80} priority />
        </motion.div>

        {/* TECHNOLOGY NAME AND OVERLAY */}
        <div
          className={`absolute inset-0 bg-[${item?.color}] bg-opacity-80 backdrop-blur-[2px] rounded-md text-2xl grid place-items-center text-white font-medium opacity-0 scale-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-500 capitalize`}
        >
          {item?.name}
        </div>
      </div>
    </Reveal>
  );
};

export default Technology;
