import Image from 'next/image';

const MemberImage = ({ memberImage, memberName }) => {
  return (
    <div className="bg-gradient p-1 h-fit w-fit flex justify-center">
      {memberImage && (
        <Image
          src={memberImage}
          alt={memberName}
          width={410}
          height={500}
          priority
          className="object-cover object-top sm:min-h-[450px] sm:max-w-[410px] max-h-[450px]"
        />
      )}
    </div>
  );
};

export default MemberImage;
