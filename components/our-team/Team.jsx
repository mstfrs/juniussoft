'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiMiniArrowLongRight } from 'react-icons/hi2';
import Reveal from '@/components/common/ScrollAnimation';

// Team component displays a team with their image and a link to their profile.
const Team = ({ teamImg, teamName, slug }) => {
  return (
    <Reveal from={100}>
      <li className="mb-20">
        <Link href={`/about/our-team/${slug}`} className="relative group block">
          {/* Team Image */}
          <Image
            src={teamImg}
            alt={teamName}
            width={533}
            height={500}
            priority
            className="rounded-xl w-full object-cover object-top min-h-[350px] max-h-[350px] group-hover:scale-105 transition-all duration-500 bg-gray-50"
          />
          {/* Overlay with Link to Team Profile */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white shadow-lg  w-[90%] rounded-xl grid place-items-center text-center md:px-6 md:py-4 p-3 text-gray-800">
            {/* Link to Team Profile */}
            <h3 className="md:text-3xl text-2xl font-medium">{teamName}</h3>
            <button className="mt-1 text-xl flex items-center justify-center gap-2">
              <span className="group-hover:text-primary transition-colors duration-500">
                View Members
              </span>
              <HiMiniArrowLongRight className="text-2xl -translate-x-8 opacity-0 w-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:w-8 group-hover:text-primary transition-all duration-500 mt-[4px]" />
            </button>
          </div>
        </Link>
      </li>
    </Reveal>
  );
};

export default Team;
