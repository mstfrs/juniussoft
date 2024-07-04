import Image from 'next/image';
import Reveal from '@/components/common/ScrollAnimation';

const Message = ({ title, image, desc, name, position }) => {
  return (
    <li className="sm:py-12 sm:px-0 p-5 transition-all duration-500 ease-in-out group border-b border-solid last:border-none border-gray-300 w-fit mx-auto">
      <Reveal from={100}>
        {/* Message Title */}
        <div className="container flex flex-col lg:flex-row lg:group-even:flex-row-reverse gap-8 px-0">
          <div>
            <div className="relative managementImg grid place-items-center ">
              {/* Display an Image */}
              <Image
                src={image}
                alt={name}
                width={500}
                height={450}
                priority
                className="object-cover lg:max-w-[500px] max-h-[450px] lg:min-h-[450px] rounded-[20px] object-top"
              />
            </div>
            {/* Message Description */}
          </div>
          <div>
            <h3 className="sm:text-[40px] text-3xl mb-5">{title}</h3>
            <p className="sm:text-lg text-justify">{desc}</p>
            {/* Name */}
            <div className="flex flex-col mb-4">
              <h4 className="text-3xl font-medium mt-7 mb-2">{name}</h4>
              {/* Position */}
              <h5 className="text-2xl">{position}</h5>
            </div>
          </div>
        </div>
      </Reveal>
    </li>
  );
};

export default Message;
