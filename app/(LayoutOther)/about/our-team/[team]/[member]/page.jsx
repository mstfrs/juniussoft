import SingleMember from '@/components/single-member';

const Member = ({ params }) => {
  const currentMember = params?.member;
  const teamName = params?.team;

  return <SingleMember currentMember={currentMember} teamName={teamName} />;
};

export default Member;
