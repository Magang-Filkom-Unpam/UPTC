"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Profile = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                className="text-primary cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            >
                <Icon icon="pajamas:profile" width="26" height="26" />
            </button>

            {open && (
                <div className="bg-secondary absolute top-full right-0 z-50 mt-2 flex w-32 flex-col space-y-1 rounded-sm p-3 text-xs text-gray-600 shadow">
                    <Link href="/profile" className="mb-1 hover:underline">
                        Profile
                    </Link>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="cursor-pointer text-left hover:underline"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
