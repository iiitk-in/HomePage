type BlogBodyProps = {
  children: React.ReactNode;
};

const BlogBody = ({ children }: BlogBodyProps) => {
  return <div className="text-xl text-white font-medium my-12">{children}</div>;
};
export default BlogBody;
