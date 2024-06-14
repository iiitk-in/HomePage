import { MdArrowOutward } from "react-icons/md";
const BlogLink = (props: any) => {
  const { link, children } = props;
  return (
    <span className="ml-1">
      <a href={link}>
        <span className="underline hover:no-underline hover:cursor-pointer">
          {children}
        </span>
        <sup>
          <MdArrowOutward className="inline-block mr-2" />
        </sup>
      </a>
    </span>
  );
};
export default BlogLink;
