import Link from "next/link";

const NavbarButton = ({ ...props }) => {
  const { text, href, currentPage } = props;
  const link_selected = "text-teal-500 bg-[#202020]";
  const link_unselected = "text-white bg-[#393939]";
  const navbarButton =
    "text-base sm:text-xl font-bold sm:mx-2 mx-1 flex text-center items-center px-[16px] py-[6px] border border-neutral-600 rounded-xl my-auto";
  return (
    <Link
      href={href}
      className={
        currentPage === text
          ? `${navbarButton} ${link_selected}`
          : `${navbarButton} ${link_unselected}`
      }
    >
      {text}
    </Link>
  );
};

export default NavbarButton;
