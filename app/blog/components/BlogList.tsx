type BlogSectionProps = {
  children: React.ReactNode;
};

const BlogList = ({ children }: BlogSectionProps) => {
  return (
    <li className="text-xl text-white font-medium mt-6 ml-4 list-none">
      {children}
    </li>
  );
};

export default BlogList;
