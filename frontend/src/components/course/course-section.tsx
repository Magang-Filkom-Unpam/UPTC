'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { useCourses } from '@/hooks/useCourse';
import { formatCurrency } from '@/utils/formatCurrency';
import { slugify } from '@/utils/slugify';

const CourseSection = () => {
    const { data: courses, isLoading } = useCourses();

    // Grouping by category
    const groupedCourses = courses?.reduce((acc, course) => {
        course.categories.forEach((category) => {
            if (!acc[category]) acc[category] = [];
            acc[category].push(course);
        });
        return acc;
    }, {} as Record<string, typeof courses>);

    const renderSkeleton = () => (
        <SwiperSlide>
            <div className='w-full h-[400px] overflow-hidden rounded-lg shadow-lg border animate-pulse bg-gray-100 flex flex-col'>
                <div className='h-48 bg-gray-300 w-full' />
                <div className='p-4 space-y-2 flex-1'>
                    <div className='h-4 bg-gray-300 rounded w-3/4' />
                    <div className='h-3 bg-gray-200 rounded w-full' />
                    <div className='h-3 bg-gray-200 rounded w-5/6' />
                </div>
                <div className='p-4 mt-auto'>
                    <div className='h-4 bg-gray-300 rounded w-1/2' />
                </div>
            </div>
        </SwiperSlide>
    );

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
                                              {renderSkeleton()}
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
                                              <Link
                                                  href={`/course/${slugify(
                                                      course.title
                                                  )}-${course.id}`}
                                              >
                                                  <div className='w-full h-[380px] md:h-[420px] overflow-hidden rounded-lg shadow-lg border hover:bg-gray-100 transition-all duration-300 flex flex-col'>
                                                      <Image
                                                          src={course.image}
                                                          alt={course.title}
                                                          width={400}
                                                          height={200}
                                                          unoptimized
                                                          className='rounded-t-lg object-cover w-full h-48'
                                                      />
                                                      <div className='p-4 md:p-6 flex flex-col gap-2 flex-1'>
                                                          <h4 className='font-semibold text-xl'>
                                                              {course.title}
                                                          </h4>
                                                          <p className='text-sm text-gray-600 '>
                                                              {course.description}
                                                          </p>
                                                      </div>
                                                      <div className='p-4 md:p-6 mt-auto'>
                                                          <p className='font-medium'>
                                                              {formatCurrency(
                                                                  course.price
                                                              )}
                                                          </p>
                                                      </div>
                                                  </div>
                                              </Link>
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
