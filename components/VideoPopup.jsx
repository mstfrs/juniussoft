'use cleint';

import { useEffect, useRef } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

const VideoPopup = ({ setPopupOpen, popupOpen, video }) => {
  const modalRef = useRef();
  const videoRef = useRef(null);

  const handleClose = (e) => {
    if (!modalRef.current) return;

    if (!modalRef.current.contains(e.target)) {
      return setPopupOpen(false);
    }
  };

  useEffect(() => {
    if (popupOpen && videoRef.current) {
      videoRef.current.play();
    } else if (!popupOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset video to start
    }
  }, [popupOpen]);

  return (
    <div>
      <div
        className={twMerge(
          'p-4 fixed flex justify-center items-center inset-0 bg-black transition-all duration-500  z-50',
          popupOpen ? 'bg-opacity-60 visible' : 'bg-opacity-0 invisible'
        )}
        onClick={handleClose}
      >
        {/* <!-- Modal --> */}
        <div
          className={twMerge(
            'max-w-3xl max-h-full bg-transparent rounded-lg shadow-xl overflow-auto relative transition-all duration-500',
            popupOpen ? 'scale-100' : 'scale-0'
          )}
          ref={modalRef}
        >
          <div className="w-full h-full">
            {/* <!-- Modal Content --> */}

            <video className={`object-cover w-full h-half`} controls loop={true} ref={videoRef}>
              <source src={video} type="video/mp4" />
            </video>

            {/* <!-- Close button--> */}
            <div className="absolute top-3 right-3 z-50" onClick={() => setPopupOpen(false)}>
              <button className="transition duration-500 ease-in text-gray-50 opacity-50 hover:opacity-100 rounded-full bg-opacity-50 bg-black text-3xl inline-block">
                <RiCloseCircleLine />
              </button>
            </div>
            {/* <!-- Close button--> */}
            {/* <!-- Modal Content --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
