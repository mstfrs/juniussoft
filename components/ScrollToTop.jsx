'use client';

import { FaArrowUpLong } from 'react-icons/fa6';
import useSticky from '@/hooks/useSticky';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const ScrollToTop = () => {
  const { sticky } = useSticky(300);

  useEffect(() => {
    let calcScrollValue = () => {
      const scrollProgress = document.getElementById('progress');
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // Some browsers use document.body
      const calcHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const scrollValue = Math.round((scrollTop / calcHeight) * 100);

      scrollProgress.style.background = `conic-gradient(#31BAA9 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.addEventListener('scroll', calcScrollValue);
    window.addEventListener('load', calcScrollValue);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', calcScrollValue);
      window.removeEventListener('load', calcScrollValue);
    };
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Add smooth scrolling behavior
        })
      }
      id="progress"
      className={twMerge(
        'w-14 h-14 rounded-full grid place-items-center fixed bottom-6 right-6 z-50 transition-all duration-500 scrollToTop',
        sticky ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      )}
    >
      {/* ICON BOX */}
      <div className="bg-white w-[50px] h-[50px] rounded-full text-black text-2xl grid place-items-center">
        <FaArrowUpLong />
      </div>
    </button>
  );
};

export default ScrollToTop;
