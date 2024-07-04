'use client';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { HeroHomeOne } from './HeroHomeOne';
import { heroSliderData } from '@/data/heroSliderData';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-creative';
import { Autoplay, Keyboard, EffectCreative } from 'swiper/modules';
import Link from 'next/link';
import { useRef } from 'react';

const HeroHomeOneSlider = () => {
  const heroSwiperRef = useRef();

  return (
    // HEO SLIDER
    <Swiper
      direction="horizontal"
      effect={'creative'}
      creativeEffect={{
        prev: {
          translate: ['-100%', 0, 0],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      speed={1000}
      slidesPerView={1}
      spaceBetween={20}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 12000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Keyboard, EffectCreative]}
      onBeforeInit={(swiper) => {
        heroSwiperRef.current = swiper;
      }}
      className="mySwiper w-full h-full heroSlider relative group"
    >
      {/* SCROLL MOUSE */}
      <Link
        href="#services"
        className="absolute bottom-10 z-20 left-1/2 -translate-x-1/2 2xl:block hidden"
      >
        <span className="mouse">
          <span className="move"></span>
        </span>
      </Link>
      {/* SCROLL MOUSE */}
      <ul>
        {heroSliderData?.map((slider, i) => (
          // SLIDER ITEM
          <SwiperSlide key={i}>
            <HeroHomeOne slider={slider} index={i} />
          </SwiperSlide>
        ))}
      </ul>

      {/* Navigation Start */}
      <button
        className="absolute left-10 top-1/2 -translate-y-1/2 z-[200] w-14 h-12 bg-transparent lg:grid hidden place-items-center text-2xl text-white border border-solid border-white rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 hover:bg-primary hover:border-primary"
        onClick={() => heroSwiperRef.current?.slidePrev()}
      >
        <BsChevronLeft />
      </button>
      <button
        className="absolute right-10 top-1/2 -translate-y-1/2 z-[200] w-14 h-12 bg-transparent lg:grid hidden place-items-center text-2xl text-white border border-solid border-white rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 hover:bg-primary hover:border-primary"
        onClick={() => heroSwiperRef.current?.slideNext()}
      >
        <BsChevronRight />
      </button>
      {/* Navigation END */}
    </Swiper>
  );
};

export default HeroHomeOneSlider;
