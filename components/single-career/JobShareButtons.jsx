import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

const JobShareButtons = ({ jobTitle }) => {
  return (
    <ul className="flex items-center gap-4 ">
      {/* SOCIAL JOB SHARE BUTTONS */}
      <li className="w-12 h-12 rounded-full border border-solid border-gray-400 grid place-items-center">
        <FacebookShareButton
          url={`https://techwizard-template.vercel.app/career/${jobTitle
            ?.toLowerCase()
            ?.split(' ')
            ?.join('-')}`}
        >
          <FaFacebook className="text-3xl text-[#2374E1]" />
        </FacebookShareButton>
      </li>
      <li className="w-12 h-12 rounded-full border border-solid border-gray-400 grid place-items-center">
        <TwitterShareButton
          url={`https://techwizard-template.vercel.app/career/${jobTitle
            ?.toLowerCase()
            ?.split(' ')
            ?.join('-')}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        </TwitterShareButton>
      </li>

      <li className="w-12 h-12 rounded-full border border-solid border-gray-400 grid place-items-center">
        <LinkedinShareButton
          url={`https://techwizard-template.vercel.app/career/${jobTitle
            ?.toLowerCase()
            ?.split(' ')
            ?.join('-')}`}
        >
          <FaLinkedin className="text-3xl text-[#0a66c2]" />
        </LinkedinShareButton>
      </li>
    </ul>
  );
};

export default JobShareButtons;
