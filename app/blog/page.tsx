import Navbar from "../components/Navbar";
import BlogCard from "./components/BlogCard";

const Blog = () => {
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
          <BlogCard
            title="Cloud: Why we did what we did"
            date="13 June 2024"
            description="The thought process of deciding how we would eventually get IIITK.in up."
            tags={["IIITK.in", "DevOps"]}
            avatar="https://avatars.githubusercontent.com/u/71581580?v=2"
            author="Proximus"
            link="Cloud:Why-we-did-what-we-did"
          />
          <BlogCard
            title="Storing without Knowing: Inside Port0"
            date="26 April 2024"
            description="How Port0's Zero Trust Architecture ensures only you have access to your data"
            tags={["Port0"]}
            avatar="https://avatars.githubusercontent.com/u/81463636?v=2"
            author="NotAProton"
            link="Storing-without-knowing:Inside-Port0"
          />
        </div>
      </div>
    </div>
  );
};
export default Blog;
