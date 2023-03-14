import ApplicationsIcon from "@/components/UI/Iconography/ApplicationsIcon";
import CloseIcon from "@/components/UI/Iconography/CloseIcon";
import HomeIcon from "@/components/UI/Iconography/HomeIcon";
import LogoutIcon from "@/components/UI/Iconography/LogoutIcon";
import StudentsIcon from "@/components/UI/Iconography/StudentsIcon";
import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenuMainStyled,
    NavigationMenuOverlayStyled,
    NavigationMenuStyled,
} from "./style";

interface INavigationMenuProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const NavigationMenu = (props: INavigationMenuProps) => {
    const { isOpen, setIsOpen } = props;
    return (
        <NavigationMenuStyled>
            <NavigationMenuMainStyled isOpen={isOpen}>
                <div className="navigation-menu">
                    <div className="navigation-close">
                        <CloseIcon setIsOpen={setIsOpen} />
                    </div>
                    <div className="navigation-list">
                        <ul>
                            <li>
                                <Link href="/" className="active-link">
                                    <HomeIcon />
                                    Početna
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <StudentsIcon />
                                    Popis studenata
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <ApplicationsIcon />
                                    Popis prijava
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navigation-footer">
                    <div className="log-out">
                        <LogoutIcon />
                        <p>Odjavi se</p>
                    </div>
                    <div className="line" />
                    <div className="picture">
                        <Image
                            src="/images/logo.png"
                            alt="Veleri Logo"
                            width={134}
                            height={34}
                        />
                    </div>
                </div>
            </NavigationMenuMainStyled>
            <NavigationMenuOverlayStyled isOpen={isOpen} />
        </NavigationMenuStyled>
    );
};

export default NavigationMenu;
