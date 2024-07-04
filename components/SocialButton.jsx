import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

const SocialButton = ({ href, name, classNames }) => {
  return (
    <li>
      <Link
        href={href === '' ? '#' : href}
        target="_blank"
        className={twMerge(
          `w-[52px] h-[52px] grid place-items-center rounded-full text-3xl transition-all duration-500 hover:text-white hover:fill-white hover:scale-110 hover:-translate-y-2 relative`,
          name === 'linkedin' && 'text-[#0a66c2] hover:bg-[#0a66c2]',
          name === 'facebook' && 'text-[#2374E1] hover:bg-[#2374E1]',
          name === 'twitter' && 'fill-black hover:bg-black',
          name === 'youtube' && 'text-[#fe0000] hover:bg-[#fe0000]',
          name === 'github' && 'text-black hover:bg-black',
          classNames
        )}
      >
        {name === 'linkedin' && <FaLinkedinIn />}
        {name === 'facebook' && <FaFacebook />}
        {name === 'github' && <FaGithub />}
        {name === 'twitter' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30"
          >
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        )}
        {name === 'youtube' && <FaYoutube />}
      </Link>
    </li>
  );
};

export default SocialButton;
