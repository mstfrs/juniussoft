import { IoCall, IoMail } from 'react-icons/io5';
import SocialButton from '../SocialButton';
import { FaMapMarkedAlt } from 'react-icons/fa';

const ContactInfo = () => {
  const contactData = {
    contactPhone: '+92 666 888 0000',
    contactEmail: 'needhelp@company.com',
    contactAddress: '66 Road Broklyn Street, 600 New York, USA',
  };

  const socialLinks = [
    {
      href: '',
      name: 'linkedin',
    },
    {
      href: '',
      name: 'facebook',
    },
    {
      href: '',
      name: 'twitter',
    },
  ];

  return (
    <div>
      <div className="space-y-3">
        <h4 className="text-3xl font-medium">CONTACT INFO</h4>
        <p className="text-lg text-darkGray">
          Welcome to our Website. We are glad to have you around.
        </p>
      </div>

      <hr className="w-[85px] h-px bg-darkGray my-5" />
      {/* INFO */}
      <div className="flex justify-between flex-wrap gap-14">
        <div className="flex items-center gap-8 flex-grow">
          <IoCall className="text-5xl text-primary" />
          <div className="text-lg">
            <p>Phone</p>
            <a href={`tel:${contactData?.contactPhone}`} className="text-darkGray inline-block">
              {contactData?.contactPhone}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-8 flex-grow">
          <IoMail className="text-5xl text-primary" />
          <div className="text-lg">
            <p>Email</p>
            <a href={`mailto:${contactData?.contactEmail}`} className="text-darkGray inline-block">
              {contactData?.contactEmail}
            </a>
          </div>
        </div>

        <div className="flex gap-8 flex-grow">
          <FaMapMarkedAlt className="text-5xl text-primary" />
          <div className="text-lg">
            <p>Address</p>
            <p className="text-darkGray">{contactData?.contactAddress}</p>
          </div>
        </div>
      </div>
      {/* INFO */}

      <hr className="w-full h-px bg-darkGray bg-opacity-30 lg:my-12 my-7" />

      {/* SOCIAL ICONS */}
      <ul className="flex items-center gap-5 -mt-4">
        {socialLinks.map((link, i) => (
          <SocialButton
            key={i}
            icon={link?.icon}
            href={link?.href}
            name={link?.name}
            classNames="border border-gray-300"
            i={i}
          />
        ))}
      </ul>
      {/* SOCIAL ICONS */}
    </div>
  );
};

export default ContactInfo;
