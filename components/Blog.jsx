import Image from 'next/image';
import Link from 'next/link';
import { FaTag, FaUserAlt } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';

const Blog = ({ blog }) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date(blog?.date);
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear() % 100;

  return (
    <li className="w-full border border-gray-300 border-solid rounded-md">
      <div>
        <div className="relative">
          {/* BLOG IMAGE */}
          <Link href={`/blog/${blog?.title?.toLowerCase()?.split(' ')?.join('-')}`}>
            <div className="overflow-hidden rounded-t-md">
              <Image
                src={blog?.image}
                alt={blog?.title}
                width={300}
                height={300}
                priority
                className="w-full rounded-t-md md:max-h-[260px] md:min-h-[260px] hover:scale-105 transition-all duration-500 bg-gray-300"
              />
            </div>
          </Link>

          {/* BLOG DATE */}
          <div className="absolute right-5 -top-5 bg-white rounded-md px-5 py-2 shadow-lg drop-shadow-lg text-center border-b-4 border-solid border-primary">
            <h2 className="text-4xl font-medium">{day}</h2>
            <p className="text-lg text-gray-600 flex items-center">
              {month} <span>{`-${year < 10 ? '0' : ''}${year}`}</span>
            </p>
          </div>
        </div>

        <div className="p-5">
          {/* BLGO TITLE */}
          <Link
            href={`/blog/${blog?.title?.toLowerCase()?.split(' ')?.join('-')}`}
            className="text-primary hover:underline inline-block"
          >
            <h3 className="text-3xl font-medium line-clamp-1">{blog?.title}</h3>
          </Link>

          {/* BLOG DESCRIPTION */}
          <p
            className="text-lg text-gray-700 line-clamp-2"
            dangerouslySetInnerHTML={{
              __html: blog?.content,
            }}
          ></p>

          {/* BLOG AUTHOR */}
          <ul className="flex items-center gap-5 flex-wrap text-base mt-5 text-gray-600">
            <li className="flex items-center gap-2">
              <span>
                <FaUserAlt />
              </span>
              <p>
                By{' '}
                <Link href="#" className="text-primary hover:underline">
                  {blog?.author}
                </Link>
              </p>
            </li>

            {/* BLOG TAGs */}
            <li className="flex items-center gap-2">
              <span>
                <FaTag />
              </span>

              <ul className="flex items-center flex-wrap gap-1">
                {blog?.tags?.slice(0, 1)?.map((tag, i) => (
                  <li key={i}>
                    <Link href="#" className="text-primary hover:underline">
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <Link
            href={`/blog/${blog?.title?.toLowerCase()?.split(' ')?.join('-')}`}
            className="flex justify-between gap-3 items-center text-center px-6 py-2 text-gray-800 hover:bg-primary border hover:text-gray-100 hover:border-primary border-solid border-gray-400 rounded-md mt-4 font-medium bg-white text-lg transition-all duration-500 group"
          >
            Read More
            <span className="group-hover:-translate-x-4 transition-transform duration-500 text-2xl">
              <GoArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Blog;
