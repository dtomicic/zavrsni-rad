import ApplicationsIcon from "@/components/UI/Iconography/ApplicationsIcon";
import HomeIcon from "@/components/UI/Iconography/HomeIcon";
import LogoutIcon from "@/components/UI/Iconography/LogoutIcon";
import StudentsIcon from "@/components/UI/Iconography/StudentsIcon";
import Image from "next/image";
import Link from "next/link";
import { DesktopNavigationStyled } from "./style";

const DesktopNavigation = () => {
  return (
    <DesktopNavigationStyled>
      <div className="logo">
        <Image src="/images/logo.png" width={134} height={34} alt="Logo" />
      </div>
      <div className="links">
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
      <div className="line" />
      <div className="log-out">
        <LogoutIcon />
        <p>Odjava</p>
      </div>
    </DesktopNavigationStyled>
  );
};

export default DesktopNavigation;
