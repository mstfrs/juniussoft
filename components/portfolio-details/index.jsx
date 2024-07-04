'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

import Button from '@/components/Button';
import Loader from '@/components/common/Loader';
import { Breadcrumb } from '@/components/common/Breadcrumb';

import { portfolioData } from '@/data/portfolioData';
import useLoader from '@/hooks/useLoader';

import PortfolioImageSlider from './PortfolioImageSlider';
import RelatedPortfolios from './RelatedPortfolios';

const PortfolioDetail = ({ portfolioName }) => {
  const loading = useLoader();
  const [filteredPortfolioItem, setFilteredPortfolioItem] = useState({});
  const [releatedPortfolios, setReleatedPortfolios] = useState([]);

  useEffect(() => {
    const currentCategory = (currentPortfolioId) => {
      const portfolioItem = portfolioData?.find((item) =>
        item.portfolioDetails.some((detail) => detail.detailsId === currentPortfolioId)
      );

      return portfolioItem?.portfolioCategoryName;
    };

    const currentcategoryName = currentCategory(filteredPortfolioItem?.detailsId);
    const getCategoryProducts = portfolioData
      ?.filter((item) => item.portfolioCategoryName === currentcategoryName)
      ?.flatMap((item) => item?.portfolioDetails)
      ?.filter((item) => item?.detailsId !== filteredPortfolioItem?.detailsId);

    setReleatedPortfolios(getCategoryProducts);
  }, [filteredPortfolioItem?.detailsId]);

  useEffect(() => {
    const filteredPortfolioItems = () => {
      const data = portfolioData
        ?.flatMap((portfolioItem) => portfolioItem?.portfolioDetails)
        ?.find(
          (item) => item?.portfolioName?.toLowerCase()?.split(' ')?.join('-') === portfolioName
        );

      setFilteredPortfolioItem(data);
    };
    filteredPortfolioItems();
  }, [portfolioName]);

  if (loading) {
    return <Loader />;
  }

  if (!filteredPortfolioItem) {
    return notFound();
  }

  return (
    <div>
      <Breadcrumb title={portfolioName?.split('-')?.join(' ')} />

      <div>
        {/*  */}
        <div className="container mt-12">
          <h3 className="sm:text-[40px] text-3xl font-semibold mb-7 text-center capitalize">
            {filteredPortfolioItem?.portfolioName}
          </h3>
          <p className="sm:text-lg text-justify">{filteredPortfolioItem?.portfolioDescription}</p>
        </div>
        {/*  */}

        {/*  */}
        <div className="container grid lg:grid-cols-5 grid-cols-1 gap-12 mt-10">
          <div className="lg:col-span-3">
            {filteredPortfolioItem?.portfolioProvides && (
              <div>
                <h3 className="text-3xl font-semibold mb-7">What We Provide</h3>

                <p className="mb-3 sm:text-lg text-justify">
                  {filteredPortfolioItem?.portfolioProvideTitle}
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-10 mt-12">
              {filteredPortfolioItem?.portfolioProvides && (
                <div>
                  <h3 className="text-3xl font-semibold mb-7">Deliverables</h3>

                  <div className="sm:text-lg">
                    <ul className="list-disc list-inside pl-2">
                      {filteredPortfolioItem?.portfolioProvides?.map((provide, i) => (
                        <li key={i} className="capitalize">
                          {provide}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {filteredPortfolioItem?.liveLink && (
                    <div className="mt-12 md:block hidden">
                      <Button
                        target={true}
                        text="Visit Live Website"
                        link={
                          filteredPortfolioItem?.liveLink ? filteredPortfolioItem?.liveLink : '#'
                        }
                        className="w-fit"
                      />
                    </div>
                  )}
                </div>
              )}

              {filteredPortfolioItem?.portolioTechnologies && (
                <div>
                  <h3 className="text-3xl font-semibold mb-7">Technologies</h3>

                  <div className="sm:text-lg">
                    <ul className="list-disc list-inside pl-2">
                      {filteredPortfolioItem?.portolioTechnologies?.map((technologie, i) => (
                        <li key={i} className="capitalize">
                          {technologie}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="mt-6 block md:hidden">
                <Button
                  target={true}
                  text="Visit Live Website"
                  link={filteredPortfolioItem?.liveLink ? filteredPortfolioItem?.liveLink : '#'}
                  className="w-fit"
                />
              </div>
            </div>
          </div>

          <PortfolioImageSlider
            portfolioImages={filteredPortfolioItem?.portfolioImages}
            portfolioTitle={filteredPortfolioItem?.portfolioTitle}
          />
        </div>

        <hr className="container h-px w-full bg-gray-400 my-16" />

        <RelatedPortfolios releatedPortfolios={releatedPortfolios} />
      </div>
    </div>
  );
};

export default PortfolioDetail;
