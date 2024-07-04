import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import SocialButton from '@/components/SocialButton';
import Image from 'next/image';
import Logo from '@/public/assets/logo.png';
import { footerMenuItems } from '@/components/layout/footer/footerMenuItems';

const Footer = () => {
  // Social media links
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
      classNames: 'fill-white hover:bg-white hover:fill-black',
    },
    {
      href: '',
      name: 'youtube',
    },
  ];

  // Address details
  const addressDetails = [
    {
      text: '66 Road Broklyn Street, 600 New York, USA',
      icon: FaMapMarkerAlt,
    },
    {
      icon: MdMail,
      text: 'needhelp@company.com',
      href: 'mailto:needhelp@company.com',
    },
    { icon: IoCall, text: '+92 666 888 0000', href: 'tel:+92 666 888 0000' },
  ];

  return (
    <>
      <footer className={`text-white font-extralight footer`}>
        <div className="container py-14">
          <div className="flex flex-col sm:flex-row justify-between flex-wrap gap-12 w-full">
            {/* About Us */}
            <div className="max-w-[420px]">
              <Image
                src={Logo}
                alt="Logo"
                className="w-48 mb-3"
                width={200}
                height={100}
                priority
              />
              <p className="sm:text-lg">
                TechWizard is dedicated to provide you the very best of services and creative
                solutions.
              </p>

              {/* Social Media Icons */}
              <ul className="flex items-center gap-5 mt-6">
                {socialLinks.map((link, i) => (
                  <SocialButton
                    key={i}
                    icon={link?.icon}
                    href={link?.href}
                    name={link?.name}
                    classNames={link?.classNames}
                    i={i}
                  />
                ))}
              </ul>
              {/* Social Media Icons */}
            </div>
            {/* About Us */}

            {/* Company */}
            <div className="">
              <h5 className="text-2xl mb-[22px] bottom-0 border-b-2 border-solid pb-1 w-fit font-light">
                Useful Links
              </h5>
              <ul className="list-disc list-inside sm:text-lg footer-nav-list">
                {footerMenuItems.companyLinks?.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}

            {/* Support */}
            <div className="">
              <h5 className="text-2xl mb-[22px] bottom-0 border-b-2 border-solid pb-1 w-fit font-light">
                Support
              </h5>
              <ul className="list-disc list-inside sm:text-lg footer-nav-list">
                {footerMenuItems.supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Support */}

            {/* Address */}
            <div className="max-w-[350px]">
              <h5 className="text-2xl mb-[22px] bottom-0 border-b-2 border-solid pb-1 w-fit font-light">
                Address
              </h5>
              <div className="sm:text-lg space-y-3">
                {addressDetails.map((line, index) => (
                  <div key={index} className="flex gap-2">
                    {line?.icon && <span>{line.icon && <line.icon className="text-3xl" />}</span>}

                    {line?.href ? (
                      <a href={line?.href}>
                        <p>{line.text}</p>
                      </a>
                    ) : (
                      <p>{line.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Address */}
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`py-3 px-5 flex justify-center items-center container text-white 
          text-center sm:text-lg border-t border-gray-500 border-solid`}
        >
          <p>
            <span className="font-serif">&copy;</span> {new Date(Date.now()).getFullYear()} by
            TechWizard. All Rights Reserved.
          </p>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};

export default Footer;
