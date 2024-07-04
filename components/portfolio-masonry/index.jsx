'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Loader from '@/components/common/Loader';
import PortfolioItem from '@/components/PortfolioItem';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TabSlider } from '@/components/TabSlider';

import useLoader from '@/hooks/useLoader';
import { portfolioData } from '@/data/portfolioData';

const PortfolioMasonry = () => {
  const loading = useLoader();
  const [currentTab, setCurrentTab] = useState('all');
  const [filteredPortfolioData, setFilteredPortfolioData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const portfolioCategories = portfolioData
      ?.flatMap((portfolio) => portfolio?.portfolioDetails)
      ?.flatMap((categoryitem) => categoryitem.portfolioCategory);

    // Convert the array to a Set to remove duplicates, and then spread it back into an array.
    const uniqueCategories = [...new Set(portfolioCategories)];

    setCategories(uniqueCategories);
  }, []);

  // Filter Portfolio data based on the selected tab
  useEffect(() => {
    const filteredData = () => {
      if (currentTab === 'all') {
        const allProductDetails = portfolioData?.reduce((accumulator, item) => {
          return accumulator.concat(item.portfolioDetails);
        }, []);

        return setFilteredPortfolioData(allProductDetails);
      } else {
        const data = portfolioData
          ?.flatMap((categoryItem) => categoryItem?.portfolioDetails)
          ?.filter((data) => data?.portfolioCategory?.includes(currentTab));
        return setFilteredPortfolioData(data);
      }
    };
    filteredData();
  }, [currentTab]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Breadcrumb title="Portfolio" />

      <div className="pt-16 pb-44">
        {/* PORTFOLIO ITEMS */}
        <div>
          <div className="container">
            <TabSlider
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              tabItems={categories}
            />
            <div>
              <motion.ul layout className="lg:columns-3 md:columns-2 gap-x-4 py-12">
                {filteredPortfolioData?.map((item, i) => (
                  <motion.li
                    key={i} // Assuming each portfolio item has a unique id
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="break-inside-avoid mb-4 block"
                  >
                    {/* PORTFOLIO ITEM */}
                    <PortfolioItem
                      portfolio={item}
                      category={item?.portfolioCategory}
                      primary={true}
                      masonry={true}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
        {/* PORTFOLIO ITEMS */}
      </div>
    </div>
  );
};

export default PortfolioMasonry;
