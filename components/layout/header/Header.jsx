'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useSticky from '@/hooks/useSticky';
import { MdClose } from 'react-icons/md';
import NavBar from '@/components/layout/header/NavBar';
import { twMerge } from 'tailwind-merge';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Logo from '@/public/assets/logo.png';

const Header = ({ headerPrimary }) => {
  const { sticky } = useSticky(150);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative header">
      <div
        className={twMerge(
          'w-full absolute left-0 z-50 page-header',
          sticky && ' is-sticky',
          !headerPrimary && 'bg-white'
        )}
      >
        <div
          className={twMerge(
            'container flex justify-between items-center lg:gap-10 gap-6',
            sticky ? 'py-7 lg:py-0' : 'lg:py-0 py-[36px]'
          )}
        >
          {/*---------------------- LOGO START ----------------------*/}
          <Link href="/" className="w-48 grid place-items-center">
            <Image src={Logo} width={200} height={100} alt="logo" className="rounded-lg" />
          </Link>
          {/*---------------------- LOGO END ----------------------*/}

          {/*---------------------- NAVBAR START ----------------------*/}
          <NavBar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            pathname={pathname}
            headerPrimary={headerPrimary}
            sticky={sticky}
          />
          {/*---------------------- NAVBAR END ----------------------*/}
          <button
            className={twMerge(
              'text-4xl block lg:hidden',
              sticky || !headerPrimary ? 'text-black' : 'text-white'
            )}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <MdClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
