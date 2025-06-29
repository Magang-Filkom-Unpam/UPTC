import { SwiperSlide } from "swiper/react";

const CourseSkeleton = () => (
    <SwiperSlide>
        <div className="bg-secondary flex h-[400px] w-full animate-pulse flex-col overflow-hidden rounded-lg border shadow-lg">
            <div className="bg-secondary h-48 w-full" />
            <div className="flex-1 space-y-2 p-4">
                <div className="bg-secondary h-4 w-3/4 rounded" />
                <div className="bg-secondary h-3 w-full rounded" />
                <div className="bg-secondary h-3 w-5/6 rounded" />
            </div>
            <div className="mt-auto p-4">
                <div className="bg-secondary h-4 w-1/2 rounded" />
            </div>
        </div>
    </SwiperSlide>
);

export default CourseSkeleton;
