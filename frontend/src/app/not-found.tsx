import Link from 'next/link';
import { Icon } from '@iconify/react';

const NotFound = () => {
    return (
        <section className='min-h-screen flex items-center justify-center bg-secondary px-4'>
            <div className='text-center space-y-6 max-w-lg'>
                <h1 className='text-6xl font-bold text-primary'>404</h1>
                <p className='text-xl font-semibold'>Oops! Halaman tidak ditemukan.</p>
                <p className='text-gray-600'>
                    Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
                </p>
                <Link
                    href='/'
                    className='inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all'
                >
                    <Icon
                        icon='mdi:arrow-left'
                        width={20}
                        height={20}
                    />
                    Kembali ke Beranda
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
