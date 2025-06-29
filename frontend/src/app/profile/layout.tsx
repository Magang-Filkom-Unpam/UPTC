"use client";

import { Icon } from "@iconify/react";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <>
            {/* Navbar */}
            <div className="fixed top-0 z-30 flex h-20 w-full items-center justify-between bg-white px-6 md:px-20 md:shadow-sm lg:px-24">
                <div className="flex items-center gap-2">
                    <h2 className="text-primary text-xl font-semibold tracking-widest">
                        <Link href="/profile">UPTC</Link>
                    </h2>
                    <span className="h-2 w-2 rounded-full bg-black"></span>
                </div>
                <button
                    className="inline-flex cursor-pointer items-center justify-center text-xl md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <Icon
                        icon={open ? "radix-icons:cross-2" : "tabler:menu-2"}
                        width="24"
                        height="24"
                    />
                </button>
            </div>

            {/* Overlay (hanya muncul di mobile saat sidebar terbuka) */}
            {open && (
                <div
                    className="fixed inset-0 z-20 bg-black/30 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            <div className="flex h-screen overflow-x-hidden overflow-y-auto pt-20">
                {/* Sidebar */}
                <div
                    className={clsx(
                        "bg-secondary z-30 h-full w-64 flex-shrink-0 px-4 py-8 text-gray-800 md:px-6",
                        "fixed top-20 left-0 flex flex-col transition-transform duration-300 ease-in-out md:static",
                        open
                            ? "translate-x-0"
                            : "-translate-x-full md:translate-x-0",
                    )}
                >
                    <nav className="flex flex-col space-y-4 text-sm">
                        <Link
                            href="/profile/update-account"
                            className="text-primary flex items-center gap-2 hover:underline"
                            onClick={() => setOpen(false)}
                        >
                            <Icon
                                icon="pajamas:profile"
                                width="26"
                                height="26"
                            />
                            <span>Pengaturan Akun</span>
                        </Link>
                        <Link
                            href="/profile/print-certificate"
                            className="text-primary flex items-center gap-2 hover:underline"
                            onClick={() => setOpen(false)}
                        >
                            <Icon
                                icon="ph:certificate"
                                width="26"
                                height="26"
                            />
                            <span>Cetak Sertifikat</span>
                        </Link>
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="text-primary flex cursor-pointer items-center gap-2 text-left hover:underline"
                        >
                            <Icon
                                icon="material-symbols:logout"
                                width="26"
                                height="26"
                            />
                            <span>Logout</span>
                        </button>
                        <Link
                            href="/"
                            className="text-primary mt-auto mb-22 flex items-center gap-2 hover:underline md:mb-0"
                            onClick={() => setOpen(false)}
                        >
                            <Icon
                                icon="material-symbols:arrow-back-rounded"
                                width="26"
                                height="26"
                            />
                            <span>Back</span>
                        </Link>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="w-full flex-1 overflow-y-auto px-6 pb-16 md:p-10 md:pb-0">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
