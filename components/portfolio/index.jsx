'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from '@/components/common/Loader';
import PortfolioItem from '@/components/PortfolioItem';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TabSlider } from '@/components/TabSlider';

import useLoader from '@/hooks/useLoader';
import { portfolioData } from '@/data/portfolioData';

const Portfolio = () => {
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

            {/* PORTFOLIO ITEMS */}
            <div>
              <motion.ul layout className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                <AnimatePresence>
                  {filteredPortfolioData?.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* PORTFOLIO */}
                      <PortfolioItem
                        portfolio={item}
                        category={item?.portfolioCategory}
                        primary={true}
                      />
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            </div>
          </div>
        </div>
        {/* PORTFOLIO ITEMS */}
      </div>
    </div>
  );
};

export default Portfolio;
