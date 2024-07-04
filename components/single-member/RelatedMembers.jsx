import TeamMember from '../TeamMember';

const RelatedMembers = ({ realetedMembers, teamName }) => {
  return (
    <>
      {realetedMembers?.length && (
        <div className="">
          <div className="container">
            <h3 className="text-center text-[40px] font-semibold mb-10">Team Members</h3>

            {/* RELATED MEMBERS */}
            <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
              {realetedMembers?.length &&
                realetedMembers?.map((member) => (
                  // MEMBER ITEM
                  <TeamMember
                    key={member?.memberId}
                    memberImage={member?.memberImage}
                    memberName={member?.memberName}
                    memberPosition={member?.memberPosition}
                    teamName={teamName}
                    memberSocialLinks={member?.socialLinks}
                    memberSkills={member?.memberSkills}
                    memberExperience={member?.memebrExperience}
                  />
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default RelatedMembers;
