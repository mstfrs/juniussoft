'use client';

import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import { BiChevronRight } from 'react-icons/bi';
import ServiceItemBg from '@/public/assets/images/home/service-item-bg-shape.svg';

export const Service = ({ serviceName, serviceImage, serviceDescription, leftAlign }) => {
  return (
    <Tilt
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1}
      transitionSpeed={8000}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="h-full"
      >
        {/* Link to the service details page */}
        <Link
          href={`/services/${serviceName?.toLowerCase().split(' ').join('-')}`}
          className={twMerge(
            'sm:px-6 sm:py-10 p-6 bg-white text-black shadow-custom rounded-md border border-solid border-primary border-opacity-20 hover:text-white hover:bg-transparent relative group transition-all duration-500 h-full w-full serviceItem',
            leftAlign ? 'block text-left' : 'grid place-items-center text-center'
          )}
        >
          {/* Background IMAGE */}
          <div className="absolute inset-0 w-full h-full -z-10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary">
            <Image
              src={ServiceItemBg}
              width={180}
              height={180}
              alt={serviceName}
              priority
              className="absolute right-0 bottom-0"
            />
          </div>

          {/* Service Image */}
          <div className="mb-4 p-5 w-24 h-24 grid place-items-center rounded-full bg-gray-200">
            <Image src={serviceImage} width={110} height={110} alt={''} priority />
          </div>
          {/* Service Name */}
          <h5 className="text-2xl font-medium">{serviceName}</h5>
          {/* Service Description */}
          <p className="text-lg mt-2 mb-5 line-clamp-2">{serviceDescription}</p>

          {/* Read More Link */}
          <Link
            href={`/services/${serviceName?.toLowerCase().split(' ').join('-')}`}
            className="flex items-center text-lg"
          >
            Read More
            {/* Right arrow icon */}
            <span>
              <BiChevronRight className="text-xl" />
            </span>
          </Link>
        </Link>
      </motion.div>
    </Tilt>
  );
};
