'use client';

/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

import { Breadcrumb } from '@/components/common/Breadcrumb';
import Reveal from '@/components/common/ScrollAnimation';
import Loader from '@/components/common/Loader';

import { BiSearch } from 'react-icons/bi';

import { blogData } from '@/data/blogData';
import useLoader from '@/hooks/useLoader';

import BlogDetail from './BlogDetail';
import BlogCategories from './BlogCategories';
import BlogRelatedPost from './BlogRelatedPost';
import LatestPortfolios from './LatestPortfolios';
import BlogNavigation from './BlogNavigation';

const BlogDetails = ({ blogName }) => {
  const loading = useLoader();

  // State to handle previous, current, and next blog
  const [blogNeighbors, setBlogNeighbors] = useState({
    prevBlog: undefined,
    currentBlog: undefined,
    nextBlog: undefined,
  });

  useEffect(() => {
    if (blogData) {
      const currentBlogIndex = blogData.findIndex(
        (blog) => blog?.title?.toLowerCase() === blogName?.split('-').join(' ')
      );

      if (currentBlogIndex !== -1) {
        const prevBlog = currentBlogIndex > 0 ? blogData[currentBlogIndex - 1] : undefined;
        const currentBlog = blogData[currentBlogIndex];
        const nextBlog =
          currentBlogIndex < blogData.length - 1 ? blogData[currentBlogIndex + 1] : undefined;

        setBlogNeighbors({ prevBlog, currentBlog, nextBlog });
      }
    }
  }, [blogName]);

  if (loading) {
    return <Loader />;
  }

  if (!blogNeighbors?.currentBlog) {
    return notFound();
  }

  return (
    <div>
      <Breadcrumb title={blogName?.split('-').join(' ')} />

      <div className="py-24">
        <div className="container">
          <div className="flex gap-10 flex-col lg:flex-row">
            {/* LEFT SIDE */}
            <BlogDetail currentBlog={blogNeighbors?.currentBlog} />
            {/* LEFT SIDE */}

            {/* RIGHT SIDE */}
            <div className="lg:w-[30%]">
              {/* SEARCH INPUT */}
              <Reveal from={50}>
                <form className="relative mb-12" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Keyword..."
                    className="w-full px-5 py-3 bg-white border border-solid border-gray-300 rounded-lg text-lg block"
                  />
                  <button
                    type="submit"
                    className="w-14 h-full rounded-r-md grid place-items-center bg-primary text-white text-3xl absolute right-0 top-0"
                  >
                    <BiSearch />
                  </button>
                </form>
              </Reveal>
              {/* SEARCH INPUT */}

              <BlogCategories />
              <BlogRelatedPost relatedPosts={blogNeighbors?.currentBlog?.relatedPosts} />
              <LatestPortfolios />
            </div>
            {/* RIGHT SIDE */}
          </div>

          {/* NAVIGATION */}
          <BlogNavigation prevBlog={blogNeighbors?.prevBlog} nextBlog={blogNeighbors?.nextBlog} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
