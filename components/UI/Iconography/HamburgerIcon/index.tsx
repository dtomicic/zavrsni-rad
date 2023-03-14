interface IHamburgerIconProps {
    setIsOpen: (value: boolean) => void;
}

const HamburgerIcon = (props: IHamburgerIconProps) => {
    const { setIsOpen } = props;
    return (
        <svg
            width="25"
            height="15"
            viewBox="0 0 25 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsOpen(true)}
        >
            <rect x="5" y="6" width="20" height="3" fill="#1B2E5A" />
            <rect y="12" width="25" height="3" fill="#1B2E5A" />
            <rect width="25" height="3" fill="#1B2E5A" />
        </svg>
    );
};

export default HamburgerIcon;
