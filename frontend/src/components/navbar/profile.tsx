'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/'; 
    };

    return (
        <div
            className='relative'
            ref={dropdownRef}
        >
            <button
                type='button'
                className='text-primary cursor-pointer'
                onClick={() => setOpen((prev) => !prev)}
            >
                <Icon
                    icon='pajamas:profile'
                    width='26'
                    height='26'
                />
            </button>

            {open && (
                <div className='bg-secondary text-gray-600 p-3 space-y-1 rounded-sm text-xs w-32 flex flex-col absolute right-0 top-full mt-2 shadow z-50'>
                    <Link
                        href='/profile'
                        className='hover:underline mb-1'
                    >
                        Profile
                    </Link>
                    <button
                        type='button'
                        onClick={handleLogout}
                        className='text-left hover:underline cursor-pointer'
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
