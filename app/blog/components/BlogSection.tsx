type BlogSectionProps = {
  children: React.ReactNode;
};

const BlogSection = ({ children }: BlogSectionProps) => {
  return (
    <section className="my-6">
      &emsp;&emsp;
      <span>{children}</span>
    </section>
  );
};
export default BlogSection;
