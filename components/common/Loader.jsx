import Image from 'next/image';
import Logo from '@/public/assets/logo.png';

const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50 fixed inset-0 z-[100]">
      <div role="status">
        <Image
          src={Logo}
          alt="Logo"
          className="animate-pulse animate-infinite animate-duration-1500 max-w-[200px]"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
