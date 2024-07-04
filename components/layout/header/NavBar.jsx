import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { headerMenuItems } from '@/components/layout/header/menuItems';
import { twMerge } from 'tailwind-merge';

const NavBar = ({ headerPrimary, setMenuOpen, menuOpen, pathname, sticky }) => {
  return (
    <nav
      className={twMerge(
        'flex lg:bg-transparent bg-gray-700 lg:bg-opacity-100 bg-opacity-90 lg:backdrop-blur-none backdrop-blur-md flex-col lg:flex-row items-center gap-10 lg:relative absolute top-full left-0 w-full lg:w-auto py-10 lg:py-0 transition-all duration-500 ease-in-out z-50 overflow-y-scroll lg:overflow-y-visible',
        menuOpen
          ? 'translate-y-0 opacity-100 visible'
          : '-translate-y-1/2 lg:-translate-y-0 opacity-0 lg:opacity-100 invisible lg:visible'
      )}
    >
      {/*---------------------- NAV LIST START ----------------------*/}
      <ul
        className={twMerge(
          'flex flex-col lg:flex-row items-center xl:gap-8 gap-4 text-lg font-medium',
          headerPrimary ? 'text-white' : 'lg:text-black text-white'
        )}
      >
        {headerMenuItems?.map((item, i) => (
          // NAV ITEM
          <li
            className={twMerge(
              ' flex flex-col items-center relative group ',
              sticky ? 'lg:py-7' : 'lg:py-[36px] py-0'
            )}
            key={i}
          >
            <Link
              href={item.link !== '' ? `/${item?.link}` : '/'}
              className="flex flex-col items-center whitespace-nowrap nav-link relative"
            >
              <span
                className={twMerge(
                  'flex items-center gap-1 font-medium hover:text-primary transition-all duration-500',
                  item?.link === pathname.split('/').slice(1)[0] && 'text-primary'
                )}
              >
                {item?.text}
                {item?.dropdownMenu && (
                  <FiChevronDown className="group-hover:rotate-120 transition-all duration-500" />
                )}
              </span>
            </Link>

            {item.dropdownMenu && (
              // DROPDOWN MENUS
              <ul
                className={twMerge(
                  'lg:absolute lg:top-full left-0 lg:h-fit h-0 bg-gray-50 rounded-md lg:rounded-t-none border-0 border-t-3 border-solid border-primary max-w-sm w-[300px] shadow-md drop-shadow-md flex flex-col gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:h-fit group-hover:py-6 transition-all duration-300 z-20',
                  i === 6 && '-left-full w-[250px]'
                )}
              >
                {item.dropdownMenu.map((dropdownItem, i) => (
                  <li
                    key={i}
                    className="text-black hover:text-primary transition-all duration-300 ease-in-out px-6 group/subDrop"
                  >
                    <Link href={dropdownItem?.link} onClick={() => setMenuOpen(false)}>
                      {dropdownItem?.text}
                    </Link>

                    {dropdownItem.dropdownSubMenu && (
                      // SUB DROPDOWN MENUS
                      <ul className="left-full lg:absolute lg:top-0 lg:h-fit h-0 bg-white text-black max-w-sm w-[250px] shadow-md drop-shadow-md flex flex-col gap-3 py-0 -translate-x-1/2 opacity-0 invisible group-hover/subDrop:-translate-x-0 group-hover/subDrop:opacity-100 group-hover/subDrop:visible group-hover/subDrop:h-fit group-hover/subDrop:py-6 transition-all duration-300 z-10">
                        <li className="px-6">Hello world</li>
                        <li className="px-6">Hello world</li>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
          // NAV ITEM
        ))}
      </ul>
      {/*---------------------- NAV LIST END ----------------------*/}
    </nav>
  );
};

export default NavBar;
