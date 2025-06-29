"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import CourseItem from "@/components/course/course-item";
import CourseSkeleton from "@/components/course/course-skeleton";
import { useCourses } from "@/hooks/useCourse";

const CourseSectionClient = () => {
    const { data: courses, isLoading } = useCourses();

    const groupedCourses = courses?.reduce(
        (acc, course) => {
            course.categories.forEach((category) => {
                if (!acc[category]) acc[category] = [];
                acc[category].push(course);
            });
            return acc;
        },
        {} as Record<string, typeof courses>,
    );

    return (
        <section className="responsive-px responsive-py">
            <div className="space-y-6">
                {isLoading
                    ? Array.from({ length: 2 }).map((_, i) => (
                          <div key={i} className="space-y-6">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div className="bg-secondary h-6 w-48 animate-pulse rounded" />
                                  <div className="bg-secondary h-5 w-24 animate-pulse rounded" />
                              </div>
                              <Swiper
                                  breakpoints={{
                                      768: { slidesPerView: 2 },
                                      1024: { slidesPerView: 4 },
                                  }}
                                  spaceBetween={16}
                                  className="w-full"
                              >
                                  {Array.from({ length: 4 }).map((_, i) => (
                                      <SwiperSlide key={i}>
                                          <CourseSkeleton />
                                      </SwiperSlide>
                                  ))}
                              </Swiper>
                          </div>
                      ))
                    : groupedCourses &&
                      Object.entries(groupedCourses).map(
                          ([category, courses]) => (
                              <div key={category} className="space-y-4">
                                  <div>
                                      <h3 className="text-xl font-semibold">
                                          {category}
                                      </h3>
                                      <div className="flex items-center gap-2">
                                          <div className="bg-primary h-0.5 flex-1" />
                                          <p className="bg-primary gap-1 rounded-md px-2 py-1 text-sm whitespace-nowrap text-white">
                                              {courses.length} course
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
                                      {courses.map((course) => (
                                          <SwiperSlide key={course.id}>
                                              <CourseItem course={course} />
                                          </SwiperSlide>
                                      ))}
                                  </Swiper>
                              </div>
                          ),
                      )}
            </div>
        </section>
    );
};

export default CourseSectionClient;
