import Image from 'next/image';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import SocialButton from '@/components/SocialButton';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="sm:max-w-5xl w-full sm:mx-auto text-black rounded-lg relative backface-hidden">
      {/* Qoute Image (Left) */}
      <BiSolidQuoteAltLeft className="absolute left-0 top-0 md:text-[120px] text-6xl text-primary opacity-60" />

      {/* Qoute Image (Right, rotated) */}
      <BiSolidQuoteAltLeft className="absolute right-0 -bottom-0 rotate-180 md:text-[120px] text-6xl text-primary opacity-60" />

      {/* TESTIMONIAL CONTENT */}
      <div className="flex flex-col items-center text-center p-6 ">
        {/* Testimonial Image */}
        <Image
          src={testimonial?.testimonialImage}
          alt={testimonial?.testimonialName}
          width={130}
          height={130}
          className="rounded-full sm:w-fit w-20 max-w-[100px] min-h-[100px] object-cover"
        />
        {/* Testimonial Name */}
        <h4 className="text-[32px] font-medium mt-2">{testimonial?.testimonialName}</h4>

        {/* Testimonial Designation */}
        <h5 className="md:text-2xl text-xl mt-2 mb-1 capitalize">
          {testimonial?.testimonialDesignation} - {testimonial?.testimonialCompanyName}
        </h5>

        {/* Testimonial Description */}
        <p className="md:text-lg">{testimonial?.testimonialDescription}</p>

        {/* SOCIAL ICONS */}
        <ul className="flex items-center gap-5 mt-6">
          {testimonial?.socialLinks.map((social, i) => (
            <SocialButton key={i} name={social.name} href={social.link} />
          ))}
        </ul>
        {/* SOCIAL ICONS */}
      </div>
      {/* TESTIMONIAL CONTENT */}
    </div>
  );
};

export default Testimonial;
