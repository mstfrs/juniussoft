import { Collapse } from 'react-collapse';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import Reveal from '@/components/common/ScrollAnimation';

const Accordion = ({ item, toggle, open, withTag }) => {
  return (
    <Reveal from={50} className="w-full">
      {/* Header section of the accordion */}
      <div
        className={twMerge(
          'flex items-center justify-between cursor-pointer hover:text-primary transition-colors  pb-1 hover:opacity-100 gap-6',
          open ? 'text-primary opacity-100' : 'opacity-70'
        )}
        onClick={toggle}
      >
        {/* Title of the accordion item, which can be clicked to toggle open/close */}
        <h4 className="font-medium cursor-pointer border-b border-inherit border-solid text-xl">
          {item?.title}
        </h4>

        {/* Button to toggle open/close the accordion */}
        <button className="text-2xl">
          {open ? <FiChevronUp className="" /> : <FiChevronDown />}
        </button>
      </div>

      {/* Content of the accordion, displayed when it's open */}
      <Collapse isOpened={open}>
        {/* Description text */}
        {withTag ? (
          <p
            className="lg:text-lg max-w-[980px] pt-3 text-justify"
            dangerouslySetInnerHTML={{
              __html: item?.description,
            }}
          ></p>
        ) : (
          <p className="lg:text-lg max-w-[980px] pt-3 text-justify">{item?.description}</p>
        )}
      </Collapse>
    </Reveal>
  );
};

export default Accordion;
