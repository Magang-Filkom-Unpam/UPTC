"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Navlink from "./navlink";

const Navbar = () => {
    const pathname = usePathname();
    const showElement =
        pathname === "/login" ||
        pathname === "/register" ||
        pathname.startsWith("/profile");

    return (
        !showElement && (
            <header className="sticky top-0 z-20 flex h-20 w-full items-center justify-between bg-white px-6 md:px-20 md:shadow-sm lg:px-24">
                <div className="flex items-center gap-2">
                    <h2 className="text-primary text-xl font-semibold tracking-widest">
                        <Link href="/">UPTC</Link>
                    </h2>
                    <span className="h-2 w-2 rounded-full bg-black"></span>
                </div>
                <Navlink />
            </header>
        )
    );
};

export default Navbar;
