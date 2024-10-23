import dynamic from 'next/dynamic';

// Dynamically import the BlogHome component from the blog app
const BlogHome = dynamic(() => import('blog/BlogHome'), { ssr: false });

const BlogPage = () => {
  return (
    <div>
      <BlogHome />
    </div>
  );
};

export default BlogPage;
