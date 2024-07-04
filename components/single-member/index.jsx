'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

import { teamsData } from '@/data/teamsData';
import MemberImage from './MemberImage';
import MemberInfo from './MemberInfo';
import MemberEducationInfo from './MemberEducationInfo';
import RelatedMembers from './RelatedMembers';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import Loader from '@/components/common/Loader';
import useLoader from '@/hooks/useLoader';

const SingleMember = ({ currentMember, teamName }) => {
  const loading = useLoader();
  const [memberDetails, setMemberDetails] = useState({});
  const [realetedMembers, setRealetedMembers] = useState([]);

  useEffect(() => {
    const filterMember = () => {
      const memberData = teamsData
        ?.map((team) =>
          team?.singleMember?.find(
            (member) => member?.memberName.toLowerCase().split(' ').join('-') === currentMember
          )
        )
        ?.filter((memberDetails) => memberDetails)[0];

      setMemberDetails(memberData);

      return memberData;
    };

    filterMember();
  }, [currentMember]);

  useEffect(() => {
    const getRandomTeamMembers = () => {
      const relatedMembers = teamsData?.filter((team) =>
        team?.singleMember?.find(
          (member) => member?.memberName.toLowerCase().split(' ').join('-') === currentMember
        )
      );

      const team = relatedMembers && relatedMembers[0];

      const filteredRelatedMembers = team?.singleMember?.filter(
        (member) => member?.memberName?.toLowerCase().split(' ').join('-') !== currentMember
      );

      // Shuffle the array of related members to make it random
      const shuffledMembers = filteredRelatedMembers?.slice().sort(() => Math.random() - 0.5);

      // Select the first 3 members from the shuffled array
      const randomMembers = shuffledMembers?.slice(0, 4);

      setRealetedMembers(randomMembers);
    };

    getRandomTeamMembers();
  }, [currentMember]);

  if (loading) {
    return <Loader />;
  }

  if (!memberDetails) {
    return notFound();
  }

  return (
    <div>
      <Breadcrumb title={`${currentMember?.split('-').join(' ')}`} />

      <div className="py-16">
        <div className="container">
          {/* MEMBER IMAGE AND INFO */}
          <div className="flex flex-col lg:flex-row gap-9">
            <MemberImage
              memberImage={memberDetails?.memberImage}
              memberName={memberDetails?.memberName}
            />
            <MemberInfo memberDetails={memberDetails} />
          </div>

          {/* EDUCATION INFO */}
          <MemberEducationInfo
            memberEducationLevel={memberDetails?.memberEducationLevel}
            memberEducationInstitute={memberDetails?.memberEducationInstitute}
            memebrExperience={memberDetails?.memebrExperience}
          />
          <hr className="w-full h-px bg-gray-200 my-16" />

          {/* RELATED MEMBERS */}
          <RelatedMembers realetedMembers={realetedMembers} teamName={teamName} />
        </div>
      </div>
    </div>
  );
};

export default SingleMember;
