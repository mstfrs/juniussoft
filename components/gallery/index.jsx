'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TabSlider } from '@/components/TabSlider';
import GalleryItem from '@/components/gallery/GalleryItem';
import { galleryData } from '@/data/galleryData';
import useLoader from '@/hooks/useLoader';
import Loader from '@/components/common/Loader';

const Gallery = () => {
  const loading = useLoader();
  const [currentTab, setCurrentTab] = useState('all');
  const [filteredGalleryData, setFilteredGalleryData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const galleryCategories = galleryData?.flatMap((gallery) => gallery?.category);

    // Convert the array to a Set to remove duplicates, and then spread it back into an array.
    const uniqueCategories = [...new Set(galleryCategories)];

    setCategories(uniqueCategories);
  }, []);

  // Filter gallery data based on the selected tab
  useEffect(() => {
    const filteredData = () => {
      if (currentTab === 'all') {
        return setFilteredGalleryData(galleryData);
      } else {
        const data = galleryData?.filter((item) => item?.category === currentTab);
        return setFilteredGalleryData(data);
      }
    };
    filteredData();
  }, [currentTab]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Breadcrumb title="Gallery" />

      <div className="py-14">
        <div className="container">
          <TabSlider currentTab={currentTab} setCurrentTab={setCurrentTab} tabItems={categories} />

          {/* GALLTERY ITEMS */}
          <div className="space-y-20 relative z-20">
            <motion.ul layout className="bg-white grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              <AnimatePresence>
                {filteredGalleryData?.map((item) => (
                  <GalleryItem key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
