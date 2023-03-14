interface ICloseIconProps {
    setIsOpen: (value: boolean) => void;
}

const CloseIcon = (props: ICloseIconProps) => {
    const { setIsOpen } = props;
    return (
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
    );
};

export default CloseIcon;
