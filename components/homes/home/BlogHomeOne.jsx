import Blog from '@/components/Blog';
import Reveal from '@/components/common/ScrollAnimation';
import Title from '@/components/common/Title';
import { blogData } from '@/data/blogData';

const BlogHomeOne = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container">
        <Title
          subTitle="Latest Blogs"
          title="Get the Latest Tech Tips and Trends Here"
          primary={true}
          titleBlack={false}
        />

        {/* BLOGS */}
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-12">
          {blogData?.slice(0, 3)?.map((blog) => (
            <Reveal from={100} key={blog?.id}>
              <Blog blog={blog} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogHomeOne;
