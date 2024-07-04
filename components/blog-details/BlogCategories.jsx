import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import Reveal from '@/components/common/ScrollAnimation';
import { blogData } from '@/data/blogData';

const BlogCategories = () => {
  return (
    <div className=" border border-solid border-gray-300 rounded-lg">
      <div className="py-5 px-8 border-b border-solid border-gray-300">
        <h3 className="text-3xl font-semibold">Categories</h3>
      </div>

      {/* Categoreis */}
      <ul className="py-5 px-8">
        {blogData
          ?.flatMap((blog) => blog?.category)
          ?.slice(0, 6)
          ?.map((category, i) => (
            <Reveal key={i} from={20}>
              <li className="py-3 border-b border-solid border-gray-300 last:border-b-0 text-gray-700 hover:text-primary transition-all duration-500">
                <Link
                  href={`/blog?category=${category?.split(' ')?.join('-')}`}
                  className="text-xl flex items-center justify-between gap-4"
                >
                  {category}
                  <span className="text-2xl">
                    <BiChevronRight />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
