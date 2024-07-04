import { VscFileSubmodule } from 'react-icons/vsc';
import { BiGitRepoForked } from 'react-icons/bi';
import { GoStack } from 'react-icons/go';
import { HiOutlineTruck } from 'react-icons/hi';
import Reveal from '@/components/common/ScrollAnimation';

const Process = ({ item, index }) => {
  return (
    <Reveal from={50}>
      <li className="ml-6 group">
        {/* ICONS */}
        <span className="absolute flex items-center justify-center w-16 h-16 text-2xl bg-white rounded-lg md:-left-8 left-0 border border-solid border-gray-300 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
          {(index === 0 && <VscFileSubmodule />) ||
            (index === 1 && <BiGitRepoForked />) ||
            (index === 2 && <GoStack />) ||
            (index === 3 && <HiOutlineTruck />)}
        </span>

        {/* TITLE */}
        <div className="group-hover:translate-x-2 transition-all duration-500">
          <h3 className="flex items-center mb-1 lg:text-2xl text-xl font-semibold text-gray-900">
            {item?.topicName}
          </h3>

          {/* DESCRIOTION */}
          <p className="mb-4 lg:text-base font-normal text-gray-500 text-justify">
            {item?.description}
          </p>
        </div>
      </li>
    </Reveal>
  );
};

export default Process;
