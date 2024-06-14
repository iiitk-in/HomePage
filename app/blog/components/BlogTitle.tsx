const BlogTitle = (props: any) => {
  const { title } = props;
  return (
    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-600 text-transparent bg-clip-text">
      <h1>{title}</h1>
    </div>
  );
};

export default BlogTitle;
