import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

const PortfolioItem = ({ portfolio, category, primary, masonry }) => {
  return (
    <Link
      href={`/portfolio/${portfolio?.portfolioName?.toLowerCase()?.split(' ')?.join('-')}`}
      className="relative rounded-2xl group w-full block"
    >
      {/* Portfolio Image */}
      <Image
        src={portfolio?.portfolioHeaderImage}
        alt={portfolio?.portfolioName}
        width={350}
        height={350}
        priority
        className={twMerge(
          'object-cover rounded-2xl w-full  border border-solid border-gray-300',
          masonry ? 'min-h-[300px]' : 'max-h-[350px] sm:min-h-[350px] min-h-[350px]'
        )}
      />

      {primary ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 w-full h-fit backdrop-blur-sm mt-auto flex flex-col justify-center p-3 text-white rounded-xl">
          {/* Portfolio Category */}
          <h5 className="text-lg capitalize">{category?.length > 1 ? category?.[1] : category}</h5>
          {/* Portfolio Name */}
          <h3 className="text-2xl font-semibold my-2 capitalize line-clamp-1">
            {portfolio?.portfolioName}
          </h3>
          {/* Link to Portfolio Details Page */}

          <button className="text-lg flex items-center gap-2">
            <span className="group-hover:text-primary transition-colors duration-500">
              See Details
            </span>
            <HiMiniArrowLongRight className="text-2xl -translate-x-8 opacity-0 w-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:w-8 group-hover:text-primary transition-all duration-500 mt-[4px]" />
          </button>
        </div>
      ) : (
        <div
          className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 w-full h-full flex flex-col justify-end text-white rounded-2xl transition-all duration-500 text-center`}
        >
          {/* Portfolio Name */}
          <div className="group-hover:mb-4 group-hover:-translate-y-16 transition-all duration-500 w-full p-3 bg-black bg-opacity-30 backdrop-blur-sm h-32 flex flex-col justify-center items-center">
            <h5 className="text-base mb-1 capitalize">
              {category?.length > 1 ? category?.[1] : category}
            </h5>

            <h3 className="text-2xl font-semibold capitalize line-clamp-2">
              {portfolio?.portfolioName}
            </h3>
          </div>
          {/* Link to Portfolio Details Page */}
          <Link
            href={`/portfolio/${portfolio?.portfolioName?.toLowerCase()?.split(' ')?.join('-')}`}
            className="text-lg translate-y-12 opacity-0 hover:text-primary group-hover:-translate-y-16 group-hover:opacity-100 transition-all duration-500"
          >
            See Details
          </Link>
        </div>
      )}
      {/* Overlay with Information */}
    </Link>
  );
};

export default PortfolioItem;
