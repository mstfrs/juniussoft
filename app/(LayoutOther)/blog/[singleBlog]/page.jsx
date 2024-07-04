import BlogDetails from '@/components/blog-details';

const SingleBlog = ({ params }) => {
  const blogName = params?.singleBlog;

  return (
    <>
      <BlogDetails blogName={blogName} />
    </>
  );
};

export default SingleBlog;
