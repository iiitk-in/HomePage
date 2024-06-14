import Navbar from "../components/Navbar";
import BlogCard from "./components/BlogCard";
import getPostMetadata from "./utils/getPostMetadata";

const Blog = () => {
  const postMetadata = getPostMetadata("app/blog/posts");
  return (
    <div className="h-screen overflow-auto bg-gradient-to-b from-neutral-900 to-slate-800">
      <div>
        <Navbar currentPage="Blog" />
      </div>
      <div>
        <div className="leading-tight mt-20 text-center text-6xl font-bold bg-gradient-to-b from-cyan-400 to-green-600 text-transparent bg-clip-text mb-2">
          <h1>Blog</h1>
        </div>
        <div>
          <h1 className="text-center text-3xl font-semibold text-white">
            The IIITK.in official blog.
          </h1>
        </div>
        <div className="mx-12 flex ml-4 mr-4 flex-col items-center justify-center mt-24 ">
          {postMetadata.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              date={post.date}
              description={post.description}
              author={post.author}
              avatar={post.avatar}
              slug={post.slug}
              position={post.position}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
