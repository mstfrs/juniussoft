import Link from 'next/link';
import { IoAppsOutline } from 'react-icons/io5';

const BlogNavigation = ({ prevBlog, nextBlog }) => {
  return (
    <>
      {/* BLOG NAVIAGTION */}

      {/* PREVIOUES BLOG */}
      {prevBlog && nextBlog && (
        <ul
          className={`flex ${
            prevBlog && nextBlog ? 'justify-between' : 'justify-center'
          } gap-5 items-center p-8 border border-solid border-gray-300 rounded-md mt-10`}
        >
          {prevBlog && (
            <li>
              <p className="text-lg text-gray-600">Prev Post</p>
              <Link
                href={`/blog/${prevBlog?.title?.toLowerCase()?.split(' ')?.join('-')}`}
                className="max-w-[300px] line-clamp-2 text-2xl font-semibold hover:text-primary transition-all duration-500"
              >
                {prevBlog?.title}
              </Link>
            </li>
          )}

          {/* NEXT BLOG */}
          {nextBlog && prevBlog && (
            <li className="text-6xl text-primary">
              <IoAppsOutline />
            </li>
          )}

          {nextBlog && (
            <li>
              <p className="text-lg text-gray-600">Next Post</p>
              <Link
                href={`/blog/${nextBlog?.title?.toLowerCase()?.split(' ')?.join('-')}`}
                className="max-w-[300px] line-clamp-2 text-2xl font-semibold hover:text-primary transition-all duration-500"
              >
                {nextBlog?.title}
              </Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default BlogNavigation;
