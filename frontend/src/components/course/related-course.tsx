'use client';

import type { Course } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import CourseItem from './course-item';

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
                            <CourseItem course={course} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RelatedCourse;
