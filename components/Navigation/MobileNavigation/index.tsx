import Image from "next/image";
import Link from "next/link";
import { MobileNavigationStyled } from "./style";
import React from "react";
import NavigationMenu from "./NavigationMenu";
import HamburgerIcon from "@/components/UI/Iconography/HamburgerIcon";

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
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
                <HamburgerIcon setIsOpen={toggleMenu} />
            </div>
            <NavigationMenu isOpen={isOpen} setIsOpen={toggleMenu} />
        </MobileNavigationStyled>
    );
};

export default MobileNavigation;
