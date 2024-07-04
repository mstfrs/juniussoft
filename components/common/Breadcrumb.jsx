'use client';

import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';

export const Breadcrumb = ({ title }) => {
  const router = usePathname();

  const pathSegments = router.split('/').filter((segment) => segment);

  return (
    <div className="lg:pt-[100px] pt-[96px]">
      <div className="title-section text-white text-center">
        {/* TITLE */}
        <h1 className="sm:text-5xl text-3xl font-semibold mb-5 capitalize container max-w-4xl tracking-wide">
          {title}
        </h1>
        <nav aria-label="Breadcrumb">
          <ul className="text-2xl mt-3 flex justify-center flex-wrap capitalize gap-1">
            {/* The first breadcrumb item is usually a link to the home page */}
            <li>
              <a href="/" className="inline-flex items-center gap-1">
                <FaHome /> Home
                <span className="ml-1">{'/'}</span>
              </a>
            </li>
            {/* Map through the pathSegments to create breadcrumb links */}
            {pathSegments.map((segment, index) => (
              <li key={index}>
                {/* Render a link for each segment, except the last one */}
                {index !== pathSegments.length - 1 ? (
                  <a href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                    {segment?.split('-')?.join(' ')}
                    <span className="ml-1">{'/'}</span>
                  </a>
                ) : (
                  // Render the last segment as plain text
                  <span>{segment?.split('-')?.join(' ')}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
