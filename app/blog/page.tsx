import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div className="h-screen overflow-auto bg-gradient-to-b from-neutral-900 to-slate-800">
      <div>
        <Navbar currentPage="Blog" />
      </div>
      <div>
        <div className="leading-tight mt-20 text-center text-6xl font-bold bg-gradient-to-b from-cyan-400 to-green-600 text-transparent bg-clip-text">
          <h1>Blog</h1>
        </div>
      </div>
    </div>
  );
};
export default Blog;
