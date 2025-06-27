'use client';

import type { Course } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slugify } from '@/utils/slugify';
import Image from 'next/image';
import Link from 'next/link';

type RelatedCourseProps = {
    relatedCourses: Course[];
};

const RelatedCourse = ({ relatedCourses }: RelatedCourseProps) => {
    if (!relatedCourses || relatedCourses.length === 0) return null;

    return (
        <section className='responsive-px'>
            <div className='space-y-4'>
                <div>
                    <h3 className='text-xl font-semibold'>Category Terkait</h3>
                    <div className='flex items-center gap-2'>
                        <div className='h-0.5 bg-primary flex-1' />
                        <p className='text-sm gap-1 px-2 py-1 bg-primary text-white rounded-md whitespace-nowrap'>
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
                    className='w-full'
                >
                    {relatedCourses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <Link href={`/course/${slugify(course.title)}-${course.id}`}>
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
                                            {formatCurrency(course.price)}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RelatedCourse;
