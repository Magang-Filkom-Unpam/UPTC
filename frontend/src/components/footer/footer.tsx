'use client';

import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const showElement =
        pathname === '/login' ||
        pathname === '/register' ||
        pathname.startsWith('/profile');
    return (
        !showElement && (
            <footer>
                <p>footer</p>
            </footer>
        )
    );
};

export default Footer;
