'use client';

import Image from 'next/image';

import Button from '@/components/Button';
import { useModal } from '@/context/ModalContext';

export const HeroHomeTwO = ({ slider }) => {
  const { setIsModalOpen } = useModal();

  return (
    <li className="lg:min-h-screen grid place-items-center pt-[100px] relative" id="hero-2">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        {/* SLIDER IMAGES AND VIDEO */}
        {slider?.sliderImage && (
          <Image
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
        {/* OVERLAY */}
        <div className="absolute inset-0 hero2-gradient"></div>
      </div>
      <div className="container h-full sm:py-40 py-28 relative z-10 text-white flex items-center">
        <div className="max-w-[850px]">
          {/*------------------------ HERO CONTENT START ------------------------*/}
          <div className="flex flex-col gap-6 ">
            <p className="px-5 py-2 border-solid border-3 border-primary rounded-full w-fit md:text-2xl text-xl">
              {slider?.sliderTag}
            </p>

            <h1 className="lg:text-6xl text-4xl font-bold lg:leading-[70px] flex gap-3">
              {slider?.sliderTitle}
            </h1>
            <p className="lg:text-lg mb-6">{slider?.sliderDescription}</p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-8 mt-4">
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
