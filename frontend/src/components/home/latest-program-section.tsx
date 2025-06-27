'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { latestProgramImage } from '@/lib/constant';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const LatestProgramSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className=' mt-8 w-full responsive-px py-8 md:py-16 bg-secondary grid grid-cols-1 gap-4 items-center justify-center'>
            <div className='space-y-3 '>
                <h3 className='font-semibold text-primary text-3xl'>
                    Program Terbaru Kami
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
                    esse eligendi, illum aut neque nisi quisquam facilis voluptate quia
                    facere.
                </p>
            </div>

            <div className='flex flex-col space-y-2 '>
                <div className='ms-auto flex items-center gap-2 order-2 md:order-1 mt-2 md:mt-0'>
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

                <div className='bg-white rounded-md p-4 order-1 md:order-2'>
                    <Swiper
                        modules={[Navigation, Autoplay]}
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
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {[1, 2, 3].map((i) => (
                            <SwiperSlide key={i}>
                                <div className='flex flex-col md:flex-row items-center justify-start gap-4 pb-2 md:pb-0'>
                                    <Image
                                        src={latestProgramImage}
                                        alt='Program Terbaru Kami'
                                        width={400}
                                        height={400}
                                        className='object-contain'
                                    />

                                    <div>
                                        <span className='text-xs'>
                                            Lorem ipsum dolor sit amet.
                                        </span>
                                        <h4 className='font-semibold mt-1 mb-1 text-xl md:text-2xl lg:text-3xl'>
                                            UPTC Training Center 2025
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Similique facere aut sed
                                            deserunt, tenetur voluptate.
                                        </p>
                                        <div className='mt-4'>
                                            <Link
                                                href='/'
                                                className='italic text-primary text-sm hover:underline'
                                            >
                                                Lihat Selengkapnya
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default LatestProgramSection;
