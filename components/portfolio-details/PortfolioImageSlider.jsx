import Image from 'next/image';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const PortfolioImageSlider = ({ portfolioImages, portfolioTitle }) => {
  return (
    // PORTFOLIO IMAGE SLIDER
    <Swiper
      direction="horizontal"
      speed={1500}
      slidesPerView={1}
      spaceBetween={20}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true, dynamicBullets: true }}
      loop={true}
      modules={[Autoplay, Keyboard, Pagination]}
      className="mySwiper w-full lg:col-span-2 h-fit"
    >
      {portfolioImages?.map((image, i) => (
        // SLIDE ITEM
        <SwiperSlide className="group overflow-hidden rounded-md  w-full mb-8" key={i}>
          <Image
            src={image}
            alt={portfolioTitle}
            width={800}
            height={800}
            priority
            className="w-full h-full md:max-w-lg md:max-h-[500px] max-h-[420px] md:min-h-[500px] mx-auto object-cover object-top rounded-md shadow-sm border border-solid border-gray-300 group-hover:scale-105 transition-all duration-500"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioImageSlider;
