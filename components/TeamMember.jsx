import Link from 'next/link';
import React from 'react';

import { HiMiniArrowLongRight } from 'react-icons/hi2';
import Image from 'next/image';
import SocialButton from '@/components/SocialButton';

const TeamMember = ({
  memberImage,
  memberName,
  memberPosition,
  teamName,
  memberSkills,
  memberExperience,
  memberSocialLinks,
}) => {
  return (
    <Link href={`/about/our-team/${teamName}/${memberName.toLowerCase().split(' ').join('-')}`}>
      <div class="w-full flex flex-col border border-solid border-gray-300 border-opacity-20 rounded-md relative group shadow">
        <div class="absolute inset-0 rounded-md flex justify-end p-2">
          {/* MEMBER DETAILS */}
          <div class="px-5 py-3 w-full h-fit mt-auto bg-gray-50 bg-opacity-80 backdrop-blur-sm rounded-md group-hover:opacity-0 group-hover:scale-0 transition-all duration-500">
            {/* MEMBER NAME */}
            <h3 class="text-2xl font-bold line-clamp-1">{memberName}</h3>
            {/* MEMBER DESIGNAION */}
            <p class="line-clamp-2 text-gray-800 font-medium">{memberPosition}</p>
          </div>
          {/* MEMBER DETAILS */}

          {/* HOVERD DETAILS */}
          <div class="px-8 py-3 bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-md flex flex-col justify-center text-center absolute inset-1 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            {/* MEMBER NAME */}
            <h3 class="text-3xl font-semibold text-gray-50">{memberName}</h3>
            {/* MEMBER DESIGNAION */}
            <p class="text-lg text-gray-300 font-medium">{memberPosition}</p>
            {/* MEMBER EXPERIENCE */}
            <p class="text-gray-200 font-medium text-sm">{memberExperience} of experience</p>

            <hr className="my-4 h-px w-full bg-primary" />

            {/* MEMBER SKILLS */}
            <ul className="flex items-center justify-center flex-wrap gap-3">
              {memberSkills?.slice(0, 2)?.map((skill, i) => (
                <span
                  className="rounded text-gray-800 bg-white duration-300 px-2 capitalize"
                  key={i}
                >
                  {skill}
                </span>
              ))}
            </ul>

            <ul className="flex items-center justify-center flex-wrap gap-3 mt-6">
              {memberSocialLinks?.map((social, i) => (
                <SocialButton
                  key={i}
                  href={social?.link}
                  name={social?.name}
                  i={i}
                  classNames="rounded bg-white duration-300 w-8 h-8 text-xl"
                />
              ))}
            </ul>

            <button className="mt-8 text-xl flex items-center justify-center gap-2 font-medium">
              <span className="text-primary">View Profile</span>
              <HiMiniArrowLongRight className="text-2xl text-primary" />
            </button>
          </div>
          {/* HOVERD DETAILS */}
        </div>
        {/* IMAGE */}
        <Image
          src={memberImage}
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-cover object-top sm:min-h-[420px] min-h-[375px] max-h-[420px] rounded-lg"
        />
        {/* IMAGE */}
      </div>
    </Link>
    // MEMBER ITEM END
  );
};

export default TeamMember;
