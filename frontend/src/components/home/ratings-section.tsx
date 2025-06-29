"use client";

import { Icon } from "@iconify/react";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ratings } from "@/lib/constant";

const RatingsSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="responsive-px bg-secondary py-8 md:py-16">
            <div className="space-y-1 md:space-y-4">
                <div className="space-y-3">
                    <h3 className="text-primary text-3xl font-semibold">
                        Apa Kata Mereka?
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corporis esse eligendi, illum aut neque nisi
                        quisquam facilis voluptate quia facere.
                    </p>
                </div>

                <div className="flex flex-col space-y-2">
                    <div className="order-2 ms-auto flex items-center gap-2 md:order-1">
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

                    <div className="order-1 mt-2 md:order-2 md:mt-0">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={24}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            pagination={{
                                clickable: true,
                                el: ".custom-pagination",
                            }}
                            loop
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
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
                            modules={[Pagination, Autoplay, Navigation]}
                        >
                            {ratings.map((data, i) => (
                                <SwiperSlide key={i}>
                                    <div className="flex h-full w-full flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-gray-300" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    {data.name}
                                                </h4>
                                                <p className="text-sm text-gray-500">
                                                    {data.role}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 italic">
                                            &quot;{data.comment}&quot;
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="md:order-3">
                        <div className="custom-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RatingsSection;
