import { useModal } from '@/context/ModalContext';

const JobInformation = ({ currentJob }) => {
  const { setApplyModalOpen, setJobPosition } = useModal();

  return (
    <div className="lg:w-[70%] md:w-[60%]">
      <p className="text-lg mb-8">{currentJob?.description}</p>
      {/* Job Responsibilities */}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold capitalize">Job Responsibilities</h2>

        <ul className="list-disc ml-5 text-lg">
          {currentJob?.responsibilities?.map((responsibility, i) => (
            <li key={i}>{responsibility}</li>
          ))}
        </ul>
      </div>
      {/* Job Responsibilities */}

      {/* Job REQUIREMENT */}
      <div className="space-y-3 mt-12">
        <h2 className="text-3xl font-semibold capitalize">Job Requirements</h2>

        <ul className="list-disc ml-5 text-lg">
          {currentJob?.requirements?.map((qualification, i) => (
            <li key={i}>{qualification}</li>
          ))}
        </ul>
      </div>
      {/* Job REQUIREMENT */}

      {/* Education */}
      <div className="space-y-3 mt-12">
        <h2 className="text-3xl font-semibold capitalize">Education</h2>

        <ul className="list-disc ml-5 text-lg">
          {currentJob?.education?.map((education, i) => (
            <li key={i}>{education}</li>
          ))}
        </ul>
      </div>
      {/* Education */}

      {/* Experience */}
      <div className="space-y-3 mt-12">
        <h2 className="text-3xl font-semibold capitalize">Experience Requirements</h2>

        <ul className="list-disc ml-5 text-lg">
          {currentJob?.experienceRequirements?.map((experience, i) => (
            <li key={i}>{experience}</li>
          ))}
        </ul>
      </div>
      {/* Experience */}

      {/* Compensation AND BENEFITS */}
      <div className="space-y-3 mt-12">
        <h2 className="text-3xl font-semibold capitalize">Compensation & Other Benefits</h2>

        <ul className="list-disc ml-5 text-lg">
          {currentJob?.otherBenefits?.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </div>
      {/* Compensation AND BENEFITS */}

      {/* SALARY */}
      <div className="space-y-3 mt-12 mb-14">
        <h2 className="text-3xl font-semibold capitalize">Salary</h2>

        <h4 className="text-xl font-medium">{currentJob?.salary}</h4>
      </div>
      {/* SALARY */}

      <button
        className="btn btn-secondary"
        onClick={() => {
          setApplyModalOpen(true);
          setJobPosition(currentJob?.title);
        }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobInformation;
