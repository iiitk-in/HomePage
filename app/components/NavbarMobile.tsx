import { useState } from "react";
import NavbarButton from "./NavbarButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const NavbarMobile = (props: any) => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button
        className=" text-xl font-bold mx-5 flex text-center items-center px-[16px] py-[16px] border border-neutral-600 rounded-xl mt-2"
        onClick={toggleDisplay}
      >
        {display ? (
          <IoMdClose className="text-white text-xl" />
        ) : (
          <GiHamburgerMenu className="text-white" />
        )}
      </button>
      <div
        className={
          display
            ? "flex justify-center mt-2 w-screen translate-x-0 transition-transform"
            : "translate-x-[-1000%] transition-transform"
        }
      >
        <div className="rounded-xl px-2 mx-10 flex flex-row justify-start bg-[#292929]  h-[67px]">
          <NavbarButton text="Home" href="/" currentPage={props.currentPage} />
          <NavbarButton
            text="Projects"
            href="/projects"
            currentPage={props.currentPage}
          />
          <NavbarButton
            text="Blog"
            href="/blog"
            currentPage={props.currentPage}
          />
          <NavbarButton
            text="About"
            href="/about"
            currentPage={props.currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
