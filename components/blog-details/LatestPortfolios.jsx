'use client';

import Image from 'next/image';
import Link from 'next/link';

import { portfolioData } from '@/data/portfolioData';
import Reveal from '@/components/common/ScrollAnimation';
import { useEffect, useState } from 'react';

const LatestPortfolios = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const allProductDetails = portfolioData?.reduce((accumulator, item) => {
      return accumulator.concat(item.portfolioDetails);
    }, []);

    setPortfolioItems(allProductDetails);
  }, []);

  return (
    <div className=" border border-solid border-gray-300 rounded-lg mt-10">
      {/* LATEST PROJECTS */}
      <div className="py-5 px-8 border-b border-solid border-gray-300">
        <h3 className="text-3xl font-semibold">Our Pojects</h3>
      </div>

      <ul className="py-5 px-8 ">
        {portfolioItems?.slice(0, 3)?.map((portfolio, i) => (
          <Reveal key={i} from={20}>
            {/* LATEST PROJECT */}
            <li className="flex gap-4 py-3 border-b border-solid border-gray-300 last:border-b-0 text-gray-700  transition-all duration-500">
              <Link
                href={`/portfolio/${portfolio?.portfolioName
                  ?.toLowerCase()
                  ?.split(' ')
                  ?.join('-')}`}
              >
                <Image
                  src={portfolio?.portfolioHeaderImage}
                  alt={portfolio?.portfolioName}
                  width={100}
                  height={100}
                  className="min-h-[80px] min-w-[100px] max-w-[100px] max-h-[80px] object-cover object-top rounded-md"
                />
              </Link>

              <div>
                <h3 className="text-xl font-semibold line-clamp-1">{portfolio?.portfolioName}</h3>
                <Link
                  href={`/portfolio/${portfolio?.portfolioName
                    ?.toLowerCase()
                    ?.split(' ')
                    ?.join('-')}`}
                  className="hover:text-primary text-base"
                >
                  See Details
                </Link>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
};

export default LatestPortfolios;
