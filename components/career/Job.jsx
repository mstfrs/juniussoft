import React from 'react';
import { MdOutlineAccessTime } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import Button from '@/components/Button';
import Reveal from '@/components/common/ScrollAnimation';
import Link from 'next/link';

const Job = ({ title, description, location, employmentType, department }) => {
  return (
    <Reveal from={50}>
      <li className="p-8 border border-solid border-gray-300 rounded-md flex justify-between md:gap-12 gap-8 items-center flex-wrap">
        <div className="flex flex-col gap-3">
          {/* JOB TITLE */}
          <Link
            href={`/career/${title?.toLowerCase()?.split(' ')?.join('-')}`}
            className="hover:text-primary transition-all duration-500 w-fit"
          >
            <h2 className="text-3xl font-semibold">{title}</h2>
          </Link>
          {/* JOB DESCRIPTION */}
          <p className="text-base text-gray-700 md:max-w-2xl text-justify line-clamp-2">
            {description}
          </p>
          {/* JOB LOCATION */}
          <ul className="flex items-center gap-3 flex-wrap">
            <li className="flex items-center gap-2 font-medium text-base tracking-wide px-4 py-2 rounded-full border border-solid border-gray-300">
              <span>
                <SlLocationPin />
              </span>
              {location}
            </li>
            {/* JOB EMPLOYMENT TYPE */}
            <li className="flex items-center gap-2 font-medium text-base tracking-wide px-4 py-2 rounded-full border border-solid border-gray-300">
              <span>
                <MdOutlineAccessTime />
              </span>
              {employmentType}
            </li>
            {/* JOB DEPARTMENT */}
            <li className="flex items-center gap-2 font-medium text-base tracking-wide px-4 py-2 rounded-full border border-solid border-gray-300">
              {department}
            </li>
          </ul>
        </div>
        <div>
          <Button
            primary={false}
            link={`/career/${title?.toLowerCase()?.split(' ')?.join('-')}`}
            text={'See Details'}
          />
        </div>
      </li>
    </Reveal>
  );
};

export default Job;
