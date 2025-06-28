'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRegisteredCourses } from '@/hooks/useCourse';
import CourseSkeleton from '../course/course-skeleton';
import { Course } from '@/types';
import CourseItem from '../course/course-item';

const CourseSection = () => {
    const { data: courses, isLoading } = useRegisteredCourses();

    // Grouping by category
    const groupedCourses = courses?.reduce((acc, reg) => {
        const course = reg.course;

        course.categories.forEach((category) => {
            if (!acc[category]) acc[category] = [];
            acc[category].push(course);
        });

        return acc;
    }, {} as Record<string, Course[]>);

    return (
        <section className='responsive-px responsive-py'>
            <div className='space-y-6'>
                {isLoading
                    ? // Show 2 fake categories with 4 skeletons each
                      Array.from({ length: 2 }).map((_, i) => (
                          <div
                              key={i}
                              className='space-y-6'
                          >
                              <div className='flex items-center justify-between flex-wrap gap-2'>
                                  <div className='h-6 w-48 bg-gray-200 rounded animate-pulse' />
                                  <div className='h-5 w-24 bg-gray-300 rounded animate-pulse' />
                              </div>
                              <div className='w-full'>
                                  <Swiper
                                      breakpoints={{
                                          768: { slidesPerView: 2 },
                                          1024: { slidesPerView: 4 },
                                      }}
                                      spaceBetween={16}
                                      className='w-full'
                                  >
                                      {Array.from({ length: 4 }).map((_, i) => (
                                          <SwiperSlide key={i}>
                                              <CourseSkeleton />
                                          </SwiperSlide>
                                      ))}
                                  </Swiper>
                              </div>
                          </div>
                      ))
                    : groupedCourses &&
                      Object.entries(groupedCourses).map(([category, courses]) => (
                          <div
                              key={category}
                              className='space-y-4'
                          >
                              <div>
                                  <h3 className='text-xl font-semibold'>{category}</h3>
                                  <div className='flex items-center gap-2'>
                                      <div className='h-0.5 bg-primary flex-1' />
                                      <p className='text-sm gap-1 px-2 py-1 bg-primary text-white rounded-md whitespace-nowrap'>
                                          {courses.length} course
                                      </p>
                                  </div>
                              </div>

                              <div className='w-full'>
                                  <Swiper
                                      breakpoints={{
                                          768: { slidesPerView: 2 },
                                          1024: { slidesPerView: 4 },
                                      }}
                                      spaceBetween={16}
                                      className='w-full'
                                  >
                                      {courses.map((course) => (
                                          <SwiperSlide key={course.id}>
                                              <CourseItem course={course} />
                                          </SwiperSlide>
                                      ))}
                                  </Swiper>
                              </div>
                          </div>
                      ))}
            </div>
        </section>
    );
};

export default CourseSection;
