'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/Button';
import Reveal from '@/components/common/ScrollAnimation';
import Title from '@/components/common/Title';
import { whoWeAreData } from '@/data/whoWeAreData';
import { aboutUsData } from '@/components/about/aboutUsData';
import VideoPopup from '@/components/VideoPopup';
import { useState } from 'react';

const WhoWeAreHometwo = () => {
  const [popupOpen, setPopupOpen] = useState();
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-24 gap-10">
          {/* IMAGE */}
          <div className="w-full relative">
            {whoWeAreData?.images?.map((img, index) => (
              <Reveal from={100} key={index}>
                <div
                  className={twMerge(
                    'overflow-visible',
                    index === 1 ? 'absolute -bottom-10 lg:-right-10 right-0 w-4/6' : ''
                  )}
                >
                  <Image
                    src={img}
                    alt="Who We Are"
                    className={twMerge(
                      'w-full h-full object-cover rounded-lg border border-solid border-gray-200',
                      index === 0 ? 'min-h-[520px]' : 'h-[280px] w-full'
                    )}
                    width={550}
                    height={550}
                    priority
                  />
                </div>
              </Reveal>
            ))}
            {/* PLAY BUTTON */}
            <div className="absolute inset-0 grid place-items-center z-20">
              <button className="play-btn is-play" onClick={() => setPopupOpen(true)}>
                <div className="button-outer-circle has-scale-animation"></div>
                <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                <div className="button-icon is-play">
                  <svg height="100%" width="100%" fill="#31BAA9">
                    <polygon
                      className="triangle"
                      points="5,0 30,15 5,30"
                      viewBox="0 0 30 15"
                    ></polygon>
                    <path
                      className="path"
                      d="M5,0 L30,15 L5,30z"
                      fill="none"
                      stroke="#31BAA9"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            {/* PLAY BTN */}
          </div>
          {/* IMAGE */}

          {/* CONTENT */}
          <div>
            <Title
              subTitle="Our Company"
              title="For 8 years, we've kept winning. Success comes after sacrifices."
              primary={true}
              classNames="text-left justify-start items-start mb-0"
            />
            <p className="lg:text-xl text-lg text-gray-700 my-6">
              {/*  eslint-disable-next-line react/no-unescaped-entities */}
              At TechWizard, we harness the power of skills and experience to shape tomorrow's
              technologies. With a team of experts, we drive innovation and progress in the tech
              world.
            </p>
            <ul className="mt-8 grid lg:grid-cols-2 gap-5 w-full">
              {aboutUsData?.keyPoints.map((point, i) => (
                <div className="flex flex-col md:flex-row md:gap-5 gap-2" key={i}>
                  <span className="text-5xl text-gray-500">
                    <point.icon />
                  </span>
                  <div>
                    <h5 className="text-2xl font-medium">{point.title}</h5>
                    <p className="text-lg text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </ul>
            <div className="mt-10 w-fit">
              <Button text="More About Us" link="/about" primary={false} />
            </div>
          </div>
          {/* CONTENT */}
        </div>
      </div>
      <VideoPopup
        setPopupOpen={setPopupOpen}
        popupOpen={popupOpen}
        video={'/assets/videos/ai-dev.mp4'}
      />
    </section>
  );
};

export default WhoWeAreHometwo;
