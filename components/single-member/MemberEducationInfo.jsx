const MemberEducationInfo = ({
  memberEducationLevel,
  memberEducationInstitute,
  memebrExperience,
}) => {
  return (
    <div>
      {/* EDUCATION & EXPERIENCE */}
      <div className="mt-14">
        <div className="w-full md:px-6 px-3 py-4  border-solid border-2 border-primary rounded-r-full text-2xl font-bold text-center">
          <p className="capitalize">Education Lavel</p>
        </div>

        {/* Other qualifications */}
        <ul className="sm:text-2xl text-lg mt-5 space-y-5">
          {memberEducationLevel && (
            <li className="flex gap-3">
              <p className="font-bold">Other qualifications:</p>
              <p>{memberEducationLevel}</p>
            </li>
          )}

          {/* Education Institute */}
          {memberEducationInstitute && (
            <li className="flex gap-3">
              <p className="font-bold">Education Institute:</p>
              <p>{memberEducationInstitute}</p>
            </li>
          )}

          {/* Experience */}
          {memebrExperience && (
            <li className="flex">
              <p className="max-w-[200px] w-[200px] font-bold">Experience:</p>
              <p>{memebrExperience}</p>
            </li>
          )}
        </ul>
      </div>
      {/* EDUCATION & EXPERIENCE */}
    </div>
  );
};

export default MemberEducationInfo;
