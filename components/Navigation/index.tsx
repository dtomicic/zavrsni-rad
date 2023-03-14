import useScreenSize from "../Hooks/useScreenSize"
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { NavigationStyled } from "./style";

const Navigation = () => {
    const screen = useScreenSize();

    const navigationMenu = screen?.isDesktop ? (
        <DesktopNavigation />
    ) : (
        <MobileNavigation />
    )

    return (
        <NavigationStyled>
            {navigationMenu}
        </NavigationStyled>
    )
}

export default Navigation;