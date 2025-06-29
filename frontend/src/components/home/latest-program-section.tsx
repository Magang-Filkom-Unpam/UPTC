"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { latestProgramImage } from "@/lib/constant";

const LatestProgramSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="responsive-px bg-secondary mt-8 grid w-full grid-cols-1 items-center justify-center gap-4 py-8 md:py-16">
            <div className="space-y-3">
                <h3 className="text-primary text-3xl font-semibold">
                    Program Terbaru Kami
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis esse eligendi, illum aut neque nisi quisquam
                    facilis voluptate quia facere.
                </p>
            </div>

            <div className="flex flex-col space-y-2">
                <div className="order-2 ms-auto mt-2 flex items-center gap-2 md:order-1 md:mt-0">
                    <button
                        type="button"
                        className="flex cursor-pointer items-center justify-center rounded-full border-2 p-2 text-black"
                        ref={prevRef}
                    >
                        <Icon
                            icon="humbleicons:arrow-left"
                            width="20"
                            height="20"
                        />
                    </button>
                    <button
                        type="button"
                        className="flex cursor-pointer items-center justify-center rounded-full border-2 p-2 text-black"
                        ref={nextRef}
                    >
                        <Icon
                            icon="humbleicons:arrow-right"
                            width="20"
                            height="20"
                        />
                    </button>
                </div>

                <div className="order-1 rounded-md bg-white p-4 md:order-2">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            const navigation = swiper.params
                                .navigation as Partial<{
                                prevEl: HTMLElement | null;
                                nextEl: HTMLElement | null;
                            }>;

                            navigation.prevEl = prevRef.current;
                            navigation.nextEl = nextRef.current;
                        }}
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {[1, 2, 3].map((i) => (
                            <SwiperSlide key={i}>
                                <div className="flex flex-col items-center justify-start gap-4 pb-2 md:flex-row md:pb-0">
                                    <Image
                                        src={latestProgramImage}
                                        alt="Program Terbaru Kami"
                                        width={400}
                                        height={400}
                                        className="object-contain"
                                    />

                                    <div>
                                        <span className="text-xs">
                                            Lorem ipsum dolor sit amet.
                                        </span>
                                        <h4 className="mt-1 mb-1 text-xl font-semibold md:text-2xl lg:text-3xl">
                                            UPTC Training Center 2025
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Similique facere aut sed deserunt,
                                            tenetur voluptate.
                                        </p>
                                        <div className="mt-4">
                                            <Link
                                                href="/"
                                                className="text-primary text-sm italic hover:underline"
                                            >
                                                Lihat Selengkapnya
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default LatestProgramSection;
