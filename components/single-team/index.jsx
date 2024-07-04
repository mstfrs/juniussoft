'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';

import TeamMember from '@/components/TeamMember';
import Title from '@/components/common/Title';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { useEffect, useState } from 'react';
import { teamsData } from '@/data/teamsData';
import Loader from '@/components/common/Loader';
import useLoader from '@/hooks/useLoader';

const SingleTeam = ({ params }) => {
  const loading = useLoader();
  const [currentTeam, setCurrentTeam] = useState({});

  useEffect(() => {
    const getCurrentTeam = (slug, teamsData) => {
      return teamsData?.find((team) => team?.teamSlug === slug);
    };

    const filteredData = getCurrentTeam(params?.team, teamsData);
    setCurrentTeam(filteredData);
  }, [params?.team]);

  if (loading) {
    return <Loader />;
  }

  if (!currentTeam) {
    return notFound();
  }

  return (
    <div className="singleTeam">
      <Breadcrumb title={currentTeam?.teamName} />

      <div className="py-12 team">
        <div className="container">
          <Title
            subTitle={`"${currentTeam?.teamQuote}"`}
            title={currentTeam?.teamName}
            primary={true}
            titleBlack={false}
            classNames="flex-col-reverse"
          />

          {currentTeam?.teamThumbnail && (
            // THUMBNAIL IMAGE
            <div className="relative">
              <Image
                src={currentTeam?.teamImage}
                alt={currentTeam?.teamName}
                width={1300}
                height={400}
                priority
                className="w-full object-cover aspect-video md:aspect-auto bg-gray-100 rounded-[20px] max-h-[500px] lg:min-h-[500px] min-h-[320px] object-top"
              />
            </div>
          )}

          <Title
            subTitle="Meet the Minds Shaping Our Future"
            title="Our Talented Team"
            primary={true}
            titleBlack={false}
            classNames="flex-col-reverse mt-16"
          />

          {/* SINGLE TEAMS */}
          <ul className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-y-10 lg:gap-x-[20px] sm:gap-10 gap-6">
            {currentTeam?.singleMember
              ?.sort((a, b) => a?.memberId - b?.memberId)
              ?.map((member) => (
                <TeamMember
                  key={member.memberId}
                  memberImage={member?.memberImage}
                  memberName={member?.memberName}
                  memberPosition={member?.memberPosition}
                  memberStatus={member?.memberStatus}
                  memberEmail={member?.memberEmail}
                  teamName={params?.team}
                  memberSocialLinks={member?.socialLinks}
                  memberSkills={member?.memberSkills}
                  memberDesc={member?.memberDescription}
                  memberExperience={member?.memberExperience}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
