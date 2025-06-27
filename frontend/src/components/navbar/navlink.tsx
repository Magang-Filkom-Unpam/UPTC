'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { navigations } from '@/lib/constant';
import { useUser } from '@/hooks/useAuth';
import Profile from './profile';

const Navlink = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { data, isLoading } = useUser();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <button
                className='inline-flex items-center justify-center text-xl md:hidden cursor-pointer'
                onClick={() => setOpen(!open)}
            >
                <Icon
                    icon={clsx(open ? 'radix-icons:cross-2' : 'tabler:menu-2')}
                    width='24'
                    height='24'
                />
            </button>

            {/* mobile */}
            <div
                className={clsx(
                    'px-6 pb-6 space-y-4 w-full bg-white shadow-sm md:hidden absolute top-full left-0 right-0 z-20 origin-top transition-all duration-300 ease-in-out transform',
                    open ? 'h-auto opacity-100' : 'h-0 opacity-0'
                )}
            >
                <nav>
                    <ul className='flex flex-col gap-4 '>
                        {navigations.map(({ label, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={clsx(
                                        'transition-colors',
                                        pathname === href ? 'text-primary ' : ' '
                                    )}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    {!isClient || isLoading ? (
                        <div className='w-14 h-8 bg-secondary rounded animate-pulse'></div>
                    ) : data?.user ? (
                        <Profile />
                    ) : (
                        <Link
                            href='/login'
                            className='text-primary'
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>

            {/* desktop */}
            <nav className='hidden md:block'>
                <ul className='flex flex-col md:flex-row gap-6'>
                    {navigations.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={clsx(
                                    'transition-colors',
                                    pathname === href ? 'text-primary ' : ' '
                                )}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className='hidden md:block'>
                {!isClient || isLoading ? (
                    <div className='w-14 h-8 bg-secondary rounded animate-pulse'></div>
                ) : data?.user ? (
                    <Profile />
                ) : (
                    <Link
                        href='/login'
                        className='text-primary'
                    >
                        Login
                    </Link>
                )}
            </div>
        </>
    );
};

export default Navlink;
