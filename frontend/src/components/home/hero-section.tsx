"use client";
import Image from "next/image";
import Link from "next/link";

import { useUser } from "@/hooks/useAuth";
import { homeImage } from "@/lib/constant";

const HeroSection = () => {
    const { data, isLoading } = useUser();

    return (
        <section className="responsive-px mt-8 flex h-[80vh] items-center justify-center md:mt-0">
            <div className="grid grid-cols-1 gap-8 md:gap-0 lg:grid-cols-2">
                <div className="order-2 flex flex-col gap-4 lg:order-1">
                    <p>Lorem ipsum dolor.</p>
                    <h1 className="text-primary text-4xl leading-12 font-bold tracking-wider">
                        MASTER YOUR SKILLS TO INFORMATICS PROFESSIONALLY
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corporis voluptatibus eligendi repudiandae
                        tempora.
                    </p>

                    <div className="flex items-center justify-start gap-2">
                        {isLoading ? (
                            <>
                                <div className="h-10 w-32 animate-pulse rounded bg-gray-200" />
                                <div className="h-10 w-40 animate-pulse rounded bg-gray-200" />
                            </>
                        ) : (
                            <>
                                <button className="bg-primary rounded-sm px-3 py-1.5 text-white">
                                    <Link
                                        href={
                                            data?.data?.user
                                                ? "course"
                                                : "login"
                                        }
                                    >
                                        Get Started
                                    </Link>
                                </button>

                                <button className="rounded-sm border bg-white px-3 py-1.5">
                                    <Link href="#latests-programs">
                                        Lihat Selengkapnya
                                    </Link>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <Image
                        src={homeImage}
                        alt="UPTC Filkom Unpam"
                        width={900}
                        height={900}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
