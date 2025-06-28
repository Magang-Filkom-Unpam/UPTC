import { Course } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';
import { slugify } from '@/utils/slugify';
import Image from 'next/image';
import Link from 'next/link';

const CourseItem = ({ course }: { course: Course }) => {
    return (
        <Link href={`/course/${slugify(course.title)}-${course.id}`}>
            <div className='w-full h-[380px] md:h-[420px] overflow-hidden rounded-lg shadow-lg border hover:bg-gray-100 transition-all duration-300 flex flex-col'>
                <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
                    unoptimized
                    priority
                    className='rounded-t-lg object-cover w-full h-48'
                />
                <div className='p-4 md:p-6 flex flex-col gap-2 flex-1'>
                    <h4 className='font-semibold text-xl'>{course.title}</h4>
                    <p className='text-sm text-gray-600 '>{course.description}</p>
                </div>
                <div className='p-4 md:p-6 mt-auto'>
                    <p className='font-medium'>{formatCurrency(course.price)}</p>
                </div>
            </div>
        </Link>
    );
};

export default CourseItem;
