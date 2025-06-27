'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { ratings } from '@/lib/constant';
import { useRef } from 'react';
import { Icon } from '@iconify/react';

const RatingsSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='responsive-px py-8 md:py-16 bg-secondary'>
            <div className='space-y-1 md:space-y-4'>
                <div className='space-y-3'>
                    <h3 className='font-semibold text-primary text-3xl'>
                        Apa Kata Mereka?
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
                        esse eligendi, illum aut neque nisi quisquam facilis voluptate
                        quia facere.
                    </p>
                </div>

                <div className='flex flex-col space-y-2'>
                    <div className='ms-auto flex items-center gap-2 order-2 md:order-1'>
                        <button
                            type='button'
                            className='rounded-full border-2 cursor-pointer text-black p-2 flex items-center justify-center'
                            ref={prevRef}
                        >
                            <Icon
                                icon='humbleicons:arrow-left'
                                width='20'
                                height='20'
                            />
                        </button>
                        <button
                            type='button'
                            className='rounded-full border-2 cursor-pointer text-black p-2 flex items-center justify-center'
                            ref={nextRef}
                        >
                            <Icon
                                icon='humbleicons:arrow-right'
                                width='20'
                                height='20'
                            />
                        </button>
                    </div>

                    <div className='order-1 md:order-2 mt-2 md:mt-0'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={24}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            pagination={{
                                clickable: true,
                                el: '.custom-pagination',
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
                                const navigation = swiper.params.navigation as Partial<{
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
                                    <div className='h-full w-full rounded-xl bg-white p-6 shadow-md flex flex-col justify-between gap-4'>
                                        <div className='flex items-center gap-4'>
                                            <div className='w-12 h-12 rounded-full bg-gray-300' />
                                            <div>
                                                <h4 className='font-semibold'>
                                                    {data.name}
                                                </h4>
                                                <p className='text-sm text-gray-500'>
                                                    {data.role}
                                                </p>
                                            </div>
                                        </div>
                                        <p className='text-sm text-gray-600 italic'>
                                            &quot;{data.comment}&quot;
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='md:order-3'>
                        <div className='custom-pagination'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RatingsSection;
