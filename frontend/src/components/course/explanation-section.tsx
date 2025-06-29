"use client";

import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";

const ExplanationSection = ({ isCourse }: { isCourse?: boolean }) => {
    return (
        <section className={clsx(isCourse ? "responsive-px" : "")}>
            <div
                className={clsx(
                    isCourse ? "-mt-16 w-full md:-mt-20 lg:-mt-14" : "",
                )}
            >
                <Swiper
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    spaceBetween={16}
                    className="w-full"
                >
                    {["Materi", "Benefit", "Praktik", "Persyaratan"].map(
                        (field, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-48 w-full cursor-context-menu rounded-lg border bg-white p-4">
                                    <h2 className="text-lg font-semibold">
                                        {field}
                                    </h2>
                                    <div className="bg-primary mt-1 mb-3 h-1 w-8 rounded-md"></div>
                                    <p className="text-sm">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Odio minima sed cumque
                                        nostrum quisquam aspernatur quia dolorum
                                        ut assumenda a?
                                    </p>
                                </div>
                            </SwiperSlide>
                        ),
                    )}
                </Swiper>
            </div>
        </section>
    );
};

export default ExplanationSection;
