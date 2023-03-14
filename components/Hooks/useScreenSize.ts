import { useState, useEffect } from 'react';

const DESKTOP_BREAKPOINT = 992;

const useScreenSize = () => {
    const [width, setWidth] = useState<null | number>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    if (!width) {
        return null;
    }

    return {
        width,
        isDesktop: width >= DESKTOP_BREAKPOINT,
    };
};

export default useScreenSize;
