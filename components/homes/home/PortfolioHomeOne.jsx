'use client';

import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';

import PortfolioItem from '@/components/PortfolioItem';
import Title from '@/components/common/Title';
import { portfolioData } from '@/data/portfolioData';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const PortfolioHomeOne = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const portfolioSwiperRef = useRef();

  useEffect(() => {
    const allProductDetails = portfolioData?.reduce((accumulator, item) => {
      return accumulator.concat(item.portfolioDetails);
    }, []);

    setPortfolioItems(allProductDetails);
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container relative">
        <Title
          subTitle="Our Portfolio"
          title="Explore Our Works"
          primary={true}
          titleBlack={false}
        />

        {/* PORTFOLIO SLIDER */}
        <Swiper
          direction="horizontal"
          speed={1000}
          slidesPerView={1}
          spaceBetween={20}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1100: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          modules={[Autoplay, Keyboard, Navigation]}
          onBeforeInit={(swiper) => {
            portfolioSwiperRef.current = swiper;
          }}
          className="mySwiper2"
        >
          <ul className="flex gap-8">
            {portfolioItems?.map((item, i) => (
              //SLIDER ITEM
              <SwiperSlide key={i}>
                <PortfolioItem
                  portfolio={item}
                  primary={false}
                  category={item?.portfolioCategory}
                />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
        {/* Navigation Start */}
        <div className="flex justify-center gap-12 mt-5">
          <button
            className="w-14 h-14 bg-transparent grid place-items-center text-2xl text-black border border-solid border-gray-500 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-500"
            onClick={() => portfolioSwiperRef.current?.slidePrev()}
          >
            <BsChevronLeft />
          </button>
          <button
            className="w-14 h-14 bg-transparent grid place-items-center text-2xl text-black border border-solid border-gray-500 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-500"
            onClick={() => portfolioSwiperRef.current?.slideNext()}
          >
            <BsChevronRight />
          </button>
        </div>
        {/* Navigation END */}
      </div>
    </section>
  );
};

export default PortfolioHomeOne;
