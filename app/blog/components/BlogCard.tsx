import Link from "next/link";

/* eslint-disable react/jsx-key */
const BlogCard = (props: any) => {
  const { title, description, date, tags, link } = props;
  return (
    <div className=" rounded-2xl sm:px-8 py-6 bg-gradient-to-t from-zinc-800 to-zinc-800 flex flex-col text-white justify-center sm:w-fit mb-8 border border-zinc-800 hover:border-1 hover:border-teal-600 transition-all-ease-in-out duration-300">
      <Link href={`/blog/${link}`}>
        <div className="flex mx-4">
          <h1 className="bg-gradient-to-b from-cyan-400 to-green-600 text-transparent bg-clip-text text-3xl font-bold leading-tight">
            {title}
          </h1>
        </div>
        <div className="mx-4 flex text-lg font-semibold mb-4">{date}</div>
        <div className="mx-4 w-fit flex break-word text-lg font-semibold md:w-[720px]">
          {description}
        </div>
      </Link>
      <div className="mt-4 mx-4">
        {tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="text-lg font-semibold bg-[#686868] text-white rounded-md px-2 py-1 mr-2 hover:cursor-pointer hover:bg-[#5A5A5A] transition transition-all-0.5s"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
