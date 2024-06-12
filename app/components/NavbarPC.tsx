import { useState, useEffect } from "react";
import NavbarButton from "./NavbarButton";

const NavbarPC = (props: any) => {
  const { currentPage } = props;
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass("stickyCSSClass")
        : setStickyClass("relative");
    }
  };
  return (
    <div>
      <div className={`${stickyClass} w-screen mt-4`}>
        <div className="rounded-xl px-2 mx-10 flex flex-row justify-between bg-[#292929]  h-[67px]">
          <div className="flex flex-row ">
            <NavbarButton text="Home" href="/" currentPage={currentPage} />
            <NavbarButton
              text="Projects"
              href="/projects"
              currentPage={currentPage}
            />
            <NavbarButton text="Blog" href="/blog" currentPage={currentPage} />
          </div>
          <div className="flex flex-row ">
            <NavbarButton
              text="About"
              href="/about"
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarPC;
