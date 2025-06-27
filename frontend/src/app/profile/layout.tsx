'use client';

import { Icon } from '@iconify/react';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            {/* Navbar */}
            <div className='w-full flex bg-white items-center justify-between fixed top-0 md:shadow-sm z-30 h-20 px-6 md:px-20 lg:px-24'>
                <div className='flex items-center gap-2'>
                    <h2 className='font-semibold tracking-widest text-xl text-primary'>
                        <Link href='/profile'>UPTC</Link>
                    </h2>
                    <span className='w-2 h-2 bg-black rounded-full'></span>
                </div>
                <button
                    className='inline-flex items-center justify-center text-xl cursor-pointer md:hidden'
                    onClick={() => setOpen(!open)}
                >
                    <Icon
                        icon={open ? 'radix-icons:cross-2' : 'tabler:menu-2'}
                        width='24'
                        height='24'
                    />
                </button>
            </div>

            {/* Overlay (hanya muncul di mobile saat sidebar terbuka) */}
            {open && (
                <div
                    className='fixed inset-0 bg-black/30 z-20 md:hidden'
                    onClick={() => setOpen(false)}
                />
            )}

            <div className='flex pt-20 h-screen overflow-x-hidden overflow-y-auto'>
                {/* Sidebar */}
                <div
                    className={clsx(
                        'bg-secondary text-gray-800 w-64 flex-shrink-0 h-full z-30 px-4 md:px-6 py-8',
                        'fixed md:static top-20 left-0 transition-transform duration-300 ease-in-out flex flex-col',
                        open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                    )}
                >
                    <nav className='flex flex-col space-y-4 text-sm'>
                        <Link
                            href='/profile/update-account'
                            className='hover:underline flex items-center gap-2 text-primary'
                            onClick={() => setOpen(false)}
                        >
                            <Icon
                                icon='pajamas:profile'
                                width='26'
                                height='26'
                            />
                            <span>Pengaturan Akun</span>
                        </Link>
                        <Link
                            href='/profile/print-certificate'
                            className='hover:underline flex items-center gap-2 text-primary'
                            onClick={() => setOpen(false)}
                        >
                            <Icon
                                icon='ph:certificate'
                                width='26'
                                height='26'
                            />
                            <span>Cetak Sertifikat</span>
                        </Link>
                    </nav>
                    <Link
                        href='/'
                        className='hover:underline flex items-center gap-2 text-primary mt-auto'
                        onClick={() => setOpen(false)}
                    >
                        <Icon
                            icon='humbleicons:arrow-left'
                            width='26'
                            height='26'
                        />
                    </Link>
                </div>

                {/* Main Content */}
                <div className='flex-1 overflow-y-auto px-6 md:p-10 w-full'>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
