'use client';

import Image from 'next/image';

import Button from '@/components/Button';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useModal } from '@/context/ModalContext';

export const HeroHomeOne = ({ slider }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { setIsModalOpen } = useModal();

  return (
    <li className="lg:min-h-screen grid place-items-center pt-[100px] relative" id="hero">
      <div className="absolute -z-10 h-full w-full slide-bg overflow-hidden">
        {/* HERO IMAGE AND VIDEO */}
        {slider?.sliderImage && (
          <Image
            style={{
              transform: isInView ? 'scale(1.2)' : 'none',
              transition: 'all 12s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            src={slider?.sliderImage}
            priority
            alt={slider?.sliderTitle}
            width={1920}
            height={1080}
            className="object-cover h-full w-full object-center"
          />
        )}

        {slider?.sliderVideo && (
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            className="h-full w-full object-cover"
          >
            <source src={slider?.sliderVideo} />
          </video>
        )}

        <div className="absolute inset-0 bg-[#04172e] bg-opacity-80 backdrop-blur-[2px]"></div>
      </div>
      <div className="container h-full grid place-items-center sm:py-40 py-28 relative z-10 text-white">
        <div className="max-w-[850px]">
          {/*------------------------ HERO CONTENT START ------------------------*/}
          <div className="flex flex-col justify-center items-center gap-6 text-center" ref={ref}>
            <p
              style={{
                transform: isInView ? 'none' : 'translateY(100px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
              className="px-5 py-2 border-solid border-3 border-primary rounded-full w-fit md:text-2xl text-xl"
            >
              {slider?.sliderTag}
            </p>

            <h1
              style={{
                transform: isInView ? 'none' : 'translateY(80px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
              className="lg:text-6xl text-4xl font-bold lg:leading-[70px] flex gap-3"
            >
              {slider?.sliderTitle}
            </h1>
            <p
              style={{
                transform: isInView ? 'none' : 'translateY(100px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                transitionDelay: '0.6s',
              }}
              className="lg:text-lg mb-6"
            >
              {slider?.sliderDescription}
            </p>
          </div>

          {/* BUTTONS */}
          <div
            style={{
              transform: isInView ? 'none' : 'translateY(100px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              transitionDelay: '1s',
            }}
            className="flex flex-col sm:flex-row gap-8 mt-4 justify-center"
          >
            <Button
              text="Our Services"
              link="/services"
              primary={false}
              className="hover:text-white"
            />

            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              GET QUOTATION
            </button>
          </div>
          {/*------------------------ HERO CONTENT END ----------------------- */}
        </div>
      </div>
    </li>
  );
};
