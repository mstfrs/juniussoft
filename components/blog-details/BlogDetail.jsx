import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaFacebook, FaLinkedin, FaTag, FaUserAlt } from 'react-icons/fa';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import Reveal from '@/components/common/ScrollAnimation';
import { blogData } from '@/data/blogData';

const BlogDetail = ({ currentBlog }) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <div className="lg:w-[70%]">
      {/* BLOG DETAILS */}
      <Reveal from={50}>
        {/* BLOG IMAGE */}
        <div className="image">
          <Image
            src={currentBlog?.image}
            alt="Blog Image"
            width={1000}
            height={500}
            priority
            className="w-full object-cover max-h-[500px] object-bottom rounded-xl bg-gray-200"
          />
        </div>
      </Reveal>

      <ul className="flex items-center gap-5 flex-wrap text-base mt-5 text-gray-600">
        {/* BLOG AUTHOR */}
        <li className="flex items-center gap-2">
          <span>
            <FaUserAlt />
          </span>
          <p>
            By{' '}
            <Link href="#" className="text-primary hover:underline">
              {currentBlog?.author}
            </Link>
          </p>
        </li>

        {/* BLOG Data */}
        <li className="flex items-center gap-2">
          <span>
            <FaCalendarAlt />
          </span>
          <p className="text-primary">
            {currentBlog?.date &&
              new Intl.DateTimeFormat('en-US', options).format(new Date(currentBlog?.date))}
          </p>
        </li>

        {/* BLOG TAGS */}
        <li className="flex items-center gap-2">
          <span>
            <FaTag />
          </span>

          {currentBlog?.tags && (
            <ul className="flex items-center flex-wrap gap-1">
              {currentBlog?.tags?.map((tag, i) => (
                <li key={i}>
                  <Link href="#" className="text-primary hover:underline">
                    {tag}
                    {', '}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>

      <h3 className="text-4xl font-semibold  my-3">{currentBlog?.title}</h3>

      {/* BLOG CONTENT */}
      <p
        className="text-lg text-gray-600 text-justify"
        dangerouslySetInnerHTML={{
          __html: currentBlog?.content,
        }}
      />

      {/* IMages */}
      <ul className="grid md:grid-cols-2 gap-8 my-12">
        {currentBlog?.images?.map((image, i) => (
          <Reveal from={50} key={i}>
            <li className="image">
              <Image
                src={image}
                alt="Image"
                width={500}
                height={500}
                priority
                className="rounded-md bg-gray-200 w-full object-cover h-[300px]"
              />
            </li>
          </Reveal>
        ))}
      </ul>

      {/* SOCIAL SHARE */}
      <div className="mt-10 flex justify-between gap-10">
        <div>
          <h3 className="text-2xl text-gray-700 mb-3">Related Tags</h3>

          <ul className="flex flex-wrap gap-3">
            {blogData
              ?.flatMap((blog) => blog?.tags)
              ?.slice(0, 3)
              ?.map((category, i) => (
                <li key={i} className="bg-gray-50 border border-solid border-gray-200 rounded-md">
                  <Link href="#" className="px-4 py-2 inline-block">
                    {category}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl text-gray-700 mb-3 text-right">Social Share</h3>
          <ul className="flex items-center gap-4">
            <li>
              <FacebookShareButton
                url={`https://techwizard-template.vercel.app/blog/${currentBlog?.title
                  ?.toLowerCase()
                  ?.split(' ')
                  ?.join('-')}`}
              >
                <FaFacebook className="text-3xl text-[#2374E1]" />
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton
                url={`https://techwizard-template.vercel.app/blog/${currentBlog?.title
                  ?.toLowerCase()
                  ?.split(' ')
                  ?.join('-')}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </TwitterShareButton>
            </li>

            <li>
              <LinkedinShareButton
                url={`https://techwizard-template.vercel.app/blog/${currentBlog?.title
                  ?.toLowerCase()
                  ?.split(' ')
                  ?.join('-')}`}
              >
                <FaLinkedin className="text-3xl text-[#0a66c2]" />
              </LinkedinShareButton>
            </li>
          </ul>
        </div>
      </div>
      {/* SOCIAL SHARE */}
    </div>
  );
};

export default BlogDetail;
