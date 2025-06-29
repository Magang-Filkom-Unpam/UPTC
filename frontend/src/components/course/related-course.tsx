"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import type { Course } from "@/types";

import CourseItem from "./course-item";

type RelatedCourseProps = {
    relatedCourses: Course[];
};

const RelatedCourse = ({ relatedCourses }: RelatedCourseProps) => {
    if (!relatedCourses || relatedCourses.length === 0) return null;

    return (
        <section className="responsive-px py-6 md:py-0 md:pb-6">
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Category Terkait</h3>
                    <div className="flex items-center gap-2">
                        <div className="bg-primary h-0.5 flex-1" />
                        <p className="bg-primary gap-1 rounded-md px-2 py-1 text-sm whitespace-nowrap text-white">
                            {relatedCourses.length} course
                        </p>
                    </div>
                </div>

                <Swiper
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    spaceBetween={16}
                    className="w-full"
                >
                    {relatedCourses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <CourseItem course={course} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RelatedCourse;
