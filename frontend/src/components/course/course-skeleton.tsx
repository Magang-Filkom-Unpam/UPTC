import { SwiperSlide } from 'swiper/react';

const CourseSkeleton = () => (
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

export default CourseSkeleton;
