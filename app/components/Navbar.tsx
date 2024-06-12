"use client";
import NavbarButton from "./NavbarButton";
import NavbarMobile from "./NavbarMobile";
import NavbarPC from "./NavbarPC";
import { useScreenDetector } from "./useScreenDetector";

const Navbar = (props: any) => {
  const { currentPage } = props;
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
  if (isDesktop) {
    return <NavbarPC currentPage={currentPage} />;
  }
  if (isMobile || isTablet) {
    return <NavbarMobile currentPage={currentPage} />;
  }
};
export default Navbar;
