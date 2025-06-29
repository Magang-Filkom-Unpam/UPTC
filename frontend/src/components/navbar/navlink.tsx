"use client";

import { Icon } from "@iconify/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useUser } from "@/hooks/useAuth";
import { navigations } from "@/lib/constant";

import Profile from "./profile";

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
                className="inline-flex cursor-pointer items-center justify-center text-xl md:hidden"
                onClick={() => setOpen(!open)}
            >
                <Icon
                    icon={clsx(open ? "radix-icons:cross-2" : "tabler:menu-2")}
                    width="24"
                    height="24"
                />
            </button>

            {/* mobile */}
            <div
                className={clsx(
                    "absolute top-full right-0 left-0 z-20 w-full origin-top transform space-y-4 bg-white px-6 pb-6 shadow-sm transition-all duration-300 ease-in-out md:hidden",
                    open ? "h-auto opacity-100" : "h-0 opacity-0",
                )}
            >
                <nav>
                    <ul className="flex flex-col gap-4">
                        {navigations.map(({ label, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={clsx(
                                        "transition-colors",

                                        pathname === href
                                            ? "text-primary"
                                            : " ",
                                    )}
                                    onClick={() =>
                                        setTimeout(() => {
                                            setOpen(false);
                                        }, 200)
                                    }
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    {!isClient || isLoading ? (
                        <div className="bg-secondary h-8 w-14 animate-pulse rounded"></div>
                    ) : data?.data?.user ? (
                        <div className="space-y-2">
                            <Link href="/profile" className="text-primary">
                                Profile
                            </Link>
                        </div>
                    ) : (
                        <Link href="/login" className="text-primary">
                            Login
                        </Link>
                    )}
                </div>
            </div>

            {/* desktop nav */}
            <nav className="hidden md:block">
                <ul className="flex flex-col gap-6 md:flex-row">
                    {!isClient || isLoading
                        ? Array.from({ length: 3 }).map((_, i) => (
                              <li key={i}>
                                  <div className="bg-secondary h-4 w-14 animate-pulse rounded" />
                              </li>
                          ))
                        : navigations.map(({ label, href }) => (
                              <li key={href}>
                                  <Link
                                      href={href}
                                      className={clsx(
                                          "transition-colors",
                                          pathname === href
                                              ? "text-primary"
                                              : "",
                                      )}
                                  >
                                      {label}
                                  </Link>
                              </li>
                          ))}
                </ul>
            </nav>

            <div className="hidden md:block">
                {!isClient || isLoading ? (
                    <div className="bg-secondary h-6 w-6 animate-pulse rounded"></div>
                ) : data?.data?.user ? (
                    <Profile />
                ) : (
                    <Link href="/login" className="text-primary">
                        Login
                    </Link>
                )}
            </div>
        </>
    );
};

export default Navlink;
