'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Navlink from './navlink';

const Navbar = () => {
    const pathname = usePathname();
    const showElement = pathname === '/login' || pathname === '/register' || pathname.startsWith('/profile');

    return (
        !showElement && (
            <header className='w-full flex bg-white items-center justify-between sticky top-0 md:shadow-sm z-20 h-20 px-6 md:px-20 lg:px-24 '>
                <div className='flex items-center gap-2'>
                    <h2 className='font-semibold tracking-widest text-xl text-primary'>
                        <Link href='/'>UPTC</Link>
                    </h2>
                    <span className='w-2 h-2 bg-black rounded-full'></span>
                </div>
                <Navlink />
            </header>
        )
    );
};

export default Navbar;
