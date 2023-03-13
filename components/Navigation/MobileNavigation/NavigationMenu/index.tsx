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
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsOpen(false)}
            >
              <rect
                x="0.600586"
                y="18.2782"
                width="25"
                height="3"
                transform="rotate(-45 0.600586 18.2782)"
                fill="#1B2E5A"
              />
              <rect
                x="2.71875"
                y="0.600525"
                width="25"
                height="3"
                transform="rotate(45 2.71875 0.600525)"
                fill="#1B2E5A"
              />
            </svg>
          </div>
          <div className="navigation-list">
            <ul>
              <li>
                <Link href="/" className="active-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                  </svg>
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                  Popis studenata
                </Link>
              </li>
              <li>
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z"
                    />
                  </svg>
                  Popis prijava
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation-footer">
          <div className="log-out">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_123_167)">
                <path
                  d="M10.24 0C13.385 0 16.297 1.395 18.228 3.744C18.283 3.81059 18.3241 3.88756 18.3487 3.97033C18.3734 4.05311 18.3811 4.14 18.3715 4.22583C18.3619 4.31167 18.3351 4.39469 18.2928 4.46997C18.2504 4.54524 18.1934 4.61123 18.125 4.664C17.9858 4.7731 17.8096 4.82368 17.6337 4.80501C17.4579 4.78634 17.2962 4.69989 17.183 4.564C16.3386 3.54122 15.2778 2.71863 14.0769 2.15557C12.8761 1.59251 11.5653 1.30302 10.239 1.308C5.324 1.308 1.339 5.2 1.339 10C1.339 14.8 5.324 18.692 10.239 18.692C11.5844 18.6971 12.9137 18.3993 14.1282 17.8206C15.3428 17.2419 16.4115 16.3971 17.255 15.349C17.3663 15.2117 17.5266 15.1231 17.7021 15.102C17.8776 15.0809 18.0544 15.129 18.195 15.236C18.264 15.2879 18.3218 15.3531 18.3651 15.4277C18.4084 15.5024 18.4362 15.585 18.4469 15.6706C18.4577 15.7563 18.4511 15.8432 18.4275 15.9262C18.404 16.0093 18.364 16.0867 18.31 16.154C16.382 18.564 13.431 20 10.24 20C4.583 20 0 15.523 0 10C0 4.477 4.584 0 10.24 0ZM17.098 7.16L19.804 9.867C20.066 10.128 20.071 10.547 19.816 10.803L17.172 13.446C17.0465 13.5688 16.8775 13.6367 16.7019 13.6348C16.5264 13.6329 16.3588 13.5614 16.236 13.436C16.1737 13.3752 16.124 13.3028 16.0897 13.2228C16.0554 13.1428 16.0372 13.0568 16.0362 12.9698C16.0352 12.8827 16.0513 12.7964 16.0837 12.7156C16.1161 12.6348 16.1641 12.5612 16.225 12.499L17.772 10.952H7.462C7.37506 10.9531 7.28877 10.937 7.20805 10.9047C7.12733 10.8724 7.05375 10.8245 6.99154 10.7638C6.92932 10.703 6.87968 10.6307 6.84544 10.5507C6.8112 10.4708 6.79304 10.3849 6.792 10.298C6.792 9.936 7.092 9.643 7.462 9.643H17.731L16.173 8.085C16.0474 7.96232 15.9758 7.7948 15.9737 7.61928C15.9716 7.44375 16.0394 7.27459 16.162 7.149C16.2876 7.02636 16.4568 6.95863 16.6323 6.96069C16.8078 6.96275 16.9753 7.03444 17.098 7.16Z"
                  fill="#414141"
                />
              </g>
              <defs>
                <clipPath id="clip0_123_167">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
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
