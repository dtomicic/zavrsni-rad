import Image from "next/image";
import Link from "next/link";
import { MobileNavigationStyled } from "./style";
import React from "react";
import NavigationMenu from "./NavigationMenu";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <MobileNavigationStyled>
      <div className="mobile-navigation">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Veleri Logo"
            width={134}
            height={34}
          />
        </Link>
        <svg
          width="25"
          height="15"
          viewBox="0 0 25 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenu}
        >
          <rect x="5" y="6" width="20" height="3" fill="#1B2E5A" />
          <rect y="12" width="25" height="3" fill="#1B2E5A" />
          <rect width="25" height="3" fill="#1B2E5A" />
        </svg>
      </div>
      <NavigationMenu isOpen={isOpen} setIsOpen={toggleMenu} />
    </MobileNavigationStyled>
  );
};

export default MobileNavigation;
