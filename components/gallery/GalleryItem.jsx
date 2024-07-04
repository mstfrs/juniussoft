import { HiMiniArrowLongRight } from 'react-icons/hi2';
import Reveal from '@/components/common/ScrollAnimation';
import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

const GalleryItem = ({ item }) => {
  return (
    <Reveal from={100} key={item.galleryId}>
      <Link
        href={`/about/gallery/${item?.galleryTitle?.split(' ')?.join('-')?.toLowerCase()}`}
        className="rounded-md shadow-custom border border-solid border-transparent hover:border-primary transition-all duration-300 group block"
      >
        <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
          <li>
            <div className="relative grid place-items-center bg-gray-200 rounded-md overflow-hidden ">
              {/* Gallery image */}
              <Image
                src={item?.galleryImages && item?.galleryImages[0]?.galleryImage}
                alt={item.galleryTitle}
                width={420}
                height={420}
                priority
                className="w-full h-full object-cover lg:min-h-[450px] sm:min-h-[350px] min-h-[300px] max-h-[550px] rounded-lg group-hover:scale-[1.05] transition-all duration-700"
              />
              {/* White border */}
              <div className="absolute w-full h-full bottom-0 left-0 galleryOverlay py-5 px-8 text-white flex flex-col items-start justify-end">
                <h3 className="md:text-4xl text-2xl font-normal tracking-wide">
                  {item.galleryTitle}
                </h3>

                <button className="mt-1 text-xl flex items-center justify-center gap-2">
                  <span className="group-hover:text-primary transition-colors duration-500">
                    View Members
                  </span>
                  <HiMiniArrowLongRight className="text-2xl -translate-x-8 opacity-0 w-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:w-8 group-hover:text-primary transition-all duration-500 mt-[4px]" />
                </button>
              </div>
            </div>
          </li>
        </motion.div>
      </Link>
    </Reveal>
  );
};

export default GalleryItem;
