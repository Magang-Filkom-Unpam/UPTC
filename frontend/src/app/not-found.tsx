import { Icon } from "@iconify/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <section className="bg-secondary flex min-h-screen items-center justify-center px-4">
            <div className="max-w-lg space-y-6 text-center">
                <h1 className="text-primary text-6xl font-bold">404</h1>
                <p className="text-xl font-semibold">
                    Oops! Halaman tidak ditemukan.
                </p>
                <p className="text-gray-600">
                    Maaf, halaman yang kamu cari tidak tersedia atau telah
                    dipindahkan.
                </p>
                <Link
                    href="/"
                    className="bg-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition-all"
                >
                    <Icon icon="mdi:arrow-left" width={20} height={20} />
                    Kembali ke Beranda
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
