const BlogDescription = (props: any) => {
  const { date, author, position } = props;
  return (
    <div className="text-start">
      <h1 className="text-white mt-2 text-xl">{date}</h1>
      <h1 className="text-white mt-2 font-semibold text-xl ">
        <div>{author}</div>
        <div className="flex flex-row text-lg">
          <div> {position}</div> <p>,</p>
          <p className="ml-2 bg-gradient-to-b from-cyan-400 to-green-600 text-transparent bg-clip-text">
            IIITK.in
          </p>
        </div>
      </h1>
      <hr className="mt-2 border border-1 border-teal-600"></hr>
    </div>
  );
};
export default BlogDescription;
