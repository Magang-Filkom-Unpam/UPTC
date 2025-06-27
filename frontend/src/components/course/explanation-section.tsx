'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

const ExplanationSection = () => {
    return (
        <section className='responsive-px'>
            <div className='w-full -mt-16 md:-mt-20 lg:-mt-14'>
                <Swiper
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    spaceBetween={16}
                    className='w-full'
                >
                    {['Materi', 'Benefit', 'Praktik', 'Persyaratan'].map((field, i) => (
                        <SwiperSlide key={i}>
                            <div className='p-4 bg-white w-full h-48 border rounded-lg cursor-context-menu'>
                                <h2 className='font-semibold text-lg'>{field}</h2>
                                <div className='w-8 h-1 bg-primary rounded-md mt-1 mb-3'></div>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Odio minima sed cumque nostrum quisquam
                                    aspernatur quia dolorum ut assumenda a?
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ExplanationSection;
