'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

const CourseSection = () => {
    return (
        <section className='responsive-px responsive-py'>
            <div className='space-y-6'>
                <div className='space-y-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-between flex-wrap gap-2'>
                            <h3 className='text-2xl font-semibold'>
                                Frontend Web Development
                            </h3>

                            <div className='flex items-center gap-3 flex-1'>
                                <div className='h-0.5 bg-primary flex-1' />
                                <p className='text-sm gap-1 px-2 py-1 bg-primary text-white rounded-md whitespace-nowrap'>
                                    3 course
                                </p>
                            </div>
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
                            {[1, 2, 3].map((i) => (
                                <SwiperSlide key={i}>
                                    <Link href={`/course/${i}`}>
                                        <div className='w-full h-[400px] overflow-hidden rounded-lg shadow-lg border hover:bg-gray-100 transition-all duration-300'>
                                            <div>
                                                <Image
                                                    src='https://placehold.co/300x200?text=React+Fundamentals'
                                                    alt='Lorem'
                                                    width={400}
                                                    height={400}
                                                    unoptimized
                                                    className='rounded-tl-lg rounded-tr-lg'
                                                />
                                            </div>
                                            <div className='p-4 md:p-6 flex flex-col gap-2'>
                                                <h4 className='font-semibold text-lg'>
                                                    React Fundamentals
                                                </h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur
                                                    adipisicing elit.
                                                </p>
                                            </div>
                                            <div className='p-4 md:p-6 mt-auto'>
                                                <p>Rp 200.000</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default CourseSection;
