'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import { EffectFlip, Autoplay, Keyboard, Pagination } from 'swiper/modules';

import Title from '@/components/common/Title';
import { testimonialsData } from './testimonialData';
import Testimonial from './Testimonial';

const TestimonialHomeOne = () => {
  return (
    <section id="testimonial" className="testimonial py-24 relative ">
      <div className="container">
        <Title subTitle="Our Client Says" title="Testimonial" primary={true} titleBlack={false} />

        {/* TESTIMONIAL SLIDER */}
        <Swiper
          direction="horizontal"
          effect="flip"
          speed={2500}
          slidesPerView={1}
          spaceBetween={20}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay, Keyboard, EffectFlip, Pagination]}
          className="mySwiper"
        >
          <ul className="flex gap-6">
            {testimonialsData?.map((testimonial, i) => (
              // SLIDER ITEM
              <SwiperSlide key={i} className="py-6">
                <Testimonial testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialHomeOne;
