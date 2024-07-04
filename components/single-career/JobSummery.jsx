'use client';
import { useModal } from '@/context/ModalContext';
import { BsFillCalendar2DayFill } from 'react-icons/bs';
import { FaBatteryEmpty, FaDoorOpen } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineLocationOn, MdTimer } from 'react-icons/md';
import JobShareButtons from './JobShareButtons';

const JobSummery = ({ currentJob }) => {
  const { setApplyModalOpen, setJobPosition } = useModal();

  return (
    <div className="lg:w-[30%] md:w-[40%]">
      {/* SUMMERY */}
      <div className="px-8 py-12 bg-white rounded-lg shadow-md border border-solid border-gray-300">
        <div className="2xl:w-[60%] mx-auto">
          {/* APPLY BUTTON */}
          <button
            className="btn btn-secondary w-full"
            onClick={() => {
              setApplyModalOpen(true);
              setJobPosition(currentJob?.title);
            }}
          >
            Apply Now
          </button>
        </div>

        <h2 className="text-3xl font-medium capitalize my-6">Job Summary</h2>

        <ul className="flex flex-col gap-5">
          {/* LOCATIOn */}
          <li className="text-lg flex gap-3 items-start">
            <span>
              <MdOutlineLocationOn className="text-2xl text-primary mt-2" />
            </span>
            <div>
              <p className="text-gray-600">Office Location</p>
              <p>{currentJob?.officeLocation}</p>
            </div>
          </li>

          {/* Vacancy */}
          <li className="text-lg flex gap-3 items-start">
            <span>
              <FaDoorOpen className="text-2xl text-primary mt-2" />
            </span>
            <div>
              <p className="text-gray-600">Open Vacancy</p>
              <p>{currentJob?.vacancy} Vacancy</p>
            </div>
          </li>

          {/* Experience */}
          <li className="text-lg flex gap-3 items-start">
            <span>
              <GiSkills className="text-2xl text-primary mt-2" />
            </span>
            <div>
              <p className="text-gray-600">Experience</p>
              <p>{currentJob?.experience} years</p>
            </div>
          </li>

          {/* Working Hours */}
          <li className="text-lg flex gap-3 items-start">
            <span>
              <MdTimer className="text-2xl text-primary mt-2" />
            </span>
            <div>
              <p className="text-gray-600">Working Hours</p>
              <p>{currentJob?.workingHours}</p>
            </div>
          </li>

          {/* Working Day */}
          <li className="text-lg flex gap-3 items-start">
            <span>
              <BsFillCalendar2DayFill className="text-2xl text-primary mt-2" />
            </span>
            <div>
              <p className="text-gray-600">Working Day</p>
              <p>{currentJob?.workingDay}</p>
            </div>
          </li>

          {/* Application Deadline */}
          <li className="text-lg flex gap-3 items-start">
            <span>
              <FaBatteryEmpty className="text-2xl text-primary mt-2" />
            </span>
            <div>
              <p className="text-gray-600">Application Deadline</p>
              <p>{currentJob?.applicationDeadline}</p>
            </div>
          </li>
        </ul>
      </div>
      {/* SUMMERY */}

      {/* Share Job */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold capitalize mb-3">Share This Job</h2>
        <JobShareButtons jobTitle={currentJob?.title} />
      </div>
    </div>
  );
};

export default JobSummery;
