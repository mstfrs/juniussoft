import SocialButton from '../SocialButton';

const MemberInfo = ({ memberDetails }) => {
  return (
    <div className="w-full">
      <div>
        {/* MEMBER ANME */}
        <h3 className="sm:text-[40px] text-3xl font-semibold capitalize mb-2">
          {memberDetails?.memberName}
        </h3>

        {/* MEMBER POSITION */}
        <h5 className="text-2xl capitalize">{memberDetails?.memberPosition}</h5>
      </div>

      <hr className="h-0.5 w-full bg-gradient my-4" />

      {/* SHORT BIO */}
      <p className="sm:text-lg text-justify">{memberDetails?.memberDescription}</p>
      {/* SHORT BIO */}

      {/* SKILLS */}
      {memberDetails?.memberSkills?.length && (
        <div>
          <h3 className="text-2xl font-bold my-4">Personal Skills</h3>
          <ul className="flex flex-wrap gap-3">
            {memberDetails?.memberSkills?.map((skill, i) => (
              <li key={i} className={`px-4 py-2 rounded-md text-xl capitalize bg-gray-200`}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* SKILLS */}

      {/* SOCIAL LINKS */}
      {memberDetails?.socialLinks?.length && (
        <ul className="flex items-center flex-wrap gap-3 mt-10">
          {memberDetails?.socialLinks?.map((social, i) => (
            <SocialButton
              key={i}
              href={social?.link}
              name={social?.name}
              i={i}
              classNames="rounded-md bg-white border border-gray-300 duration-300 w-12 h-12 text-2xl"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MemberInfo;
