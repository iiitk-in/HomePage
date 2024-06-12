type BlogSectionProps = {
  children: React.ReactNode;
};
import { BsDashLg } from "react-icons/bs";
const BlogListElement = ({ children }: BlogSectionProps) => {
  return (
    <ul className="text-xl text-white font-medium mt-6 ">
      <BsDashLg className="inline-block text-teal-600 text-2xl mr-2" />
      {children}
    </ul>
  );
};
export default BlogListElement;
