'use client';

import Blog from '@/components/Blog';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/common/ScrollAnimation';

import { blogData } from '@/data/blogData';
import Loader from '@/components/common/Loader';
import useLoader from '@/hooks/useLoader';
import Pagination from './Pagination';

const Blogs = () => {
  const loading = useLoader();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const blogSectionRef = useRef(null);

  // Filter the data based on the current page and items per page
  useEffect(() => {
    const filteredBlogData = blogData?.slice((currentPage - 1) * 9, currentPage * 9);
    setFilteredBlogs(filteredBlogData);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    // Scroll to the top of the blog section
    blogSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Breadcrumb title="Our Blog" />

      <div className="py-24" ref={blogSectionRef}>
        <div className="container">
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-12">
            {filteredBlogs?.map((blog) => (
              <Reveal from={100} key={blog?.id}>
                <Blog blog={blog} />
              </Reveal>
            ))}
          </ul>

          <Pagination
            itemsPerPage={9}
            totalItems={blogData?.length}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
