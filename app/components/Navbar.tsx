"use client";
import NavbarButton from "./NavbarButton";
import NavbarMobile from "./NavbarMobile";
import NavbarPC from "./NavbarPC";
import { useScreenDetector } from "./useScreenDetector";

const Navbar = (props: any) => {
  const { currentPage } = props;
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
  return (
    <div>
      {(isMobile || isTablet) && <NavbarMobile currentPage={currentPage} />}
      {isDesktop && <NavbarPC currentPage={currentPage} />}
    </div>
  );
};
export default Navbar;
