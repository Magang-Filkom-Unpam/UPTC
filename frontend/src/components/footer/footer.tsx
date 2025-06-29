"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    const showElement =
        pathname === "/login" ||
        pathname === "/register" ||
        pathname.startsWith("/profile");

    if (showElement) return null;

    return (
        <footer className="responsive-px border-t border-gray-200 bg-white py-10 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Logo & Brand */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <h2 className="text-primary text-xl font-semibold tracking-widest">
                            <Link href="/">UPTC</Link>
                        </h2>
                        <span className="h-2 w-2 rounded-full bg-black"></span>
                    </div>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Placeat rerum obcaecati reiciendis dolor suscipit
                    </p>
                </div>

                {/* Navigasi */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold">Navigasi</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:underline">
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link href="/courses" className="hover:underline">
                                Kursus
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Sosial Media */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold">Ikuti Kami</h3>
                    <div className="flex gap-4 text-xl">
                        <Link href="#" className="hover:text-primary">
                            <Icon icon="mdi:facebook" />
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <Icon icon="mdi:instagram" />
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <Icon icon="mdi:twitter" />
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <Icon icon="mdi:youtube" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} UPTC. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
