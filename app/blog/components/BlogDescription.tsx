/* eslint-disable @next/next/no-img-element */
const BlogDescription = (props: any) => {
  const { date, author, position, avatar } = props;
  return (
    <div className="text-start">
      <h1 className="text-white mt-2 text-xl">{date}</h1>
      <h1 className="text-white mt-2 font-semibold text-xl ">
        <div className="flex flex-row items-center mb-1">
          <img
            src={avatar}
            className="h-8 w-8 rounded-full inline-block mr-2 "
            alt="author"
          />
          <div>{author}</div>
        </div>
        <div className="flex flex-row text-lg">
          <div> {position}</div>
        </div>
      </h1>
      <hr className="mt-2 border border-1 border-teal-600"></hr>
    </div>
  );
};
export default BlogDescription;
