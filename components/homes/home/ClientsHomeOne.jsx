'use client';

import Title from '@/components/common/Title';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import { clientsData } from '@/data/clientsData';
import Client from './Client';

const ClientsSection = () => {
  return (
    <section id="our-clients" className="our-clients py-20">
      {/* Our Clients START */}
      <div className="container mb-8 max-w-4xl">
        <Title
          subTitle="Company we work with"
          title="Clients and Partners"
          primary={true}
          titleBlack={false}
        />
        <p className="text-center text-xl -mt-6">
          Our diverse clients includes large enterprises , small businesses, and startups. We are
          dedicated to understand their unique needs and deliver tailored solutions for success. We
          take pride in our strong client relationships and look forward to many more.
        </p>
      </div>

      {/* SWIPER SLIDER */}
      <div className="pl-5">
        <Swiper
          speed={500}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1750: {
              slidesPerView: 5.5,
            },

            1450: {
              slidesPerView: 4.5,
            },

            1300: {
              slidesPerView: 4,
            },

            1100: {
              slidesPerView: 3.5,
            },

            967: {
              slidesPerView: 3,
            },

            785: {
              slidesPerView: 2.5,
            },

            667: {
              slidesPerView: 2,
            },

            467: {
              slidesPerView: 1.5,
            },

            390: {
              slidesPerView: 1.2,
            },
          }}
          loop={true}
          modules={[Autoplay, Keyboard]}
          className="mySwiper"
        >
          <ul className="flex gap-6">
            {clientsData?.map((item, i) => (
              // SLIDER ITEM
              <SwiperSlide key={i}>
                <Client client={item} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
      {/* Our Clients END */}
    </section>
  );
};

export default ClientsSection;
