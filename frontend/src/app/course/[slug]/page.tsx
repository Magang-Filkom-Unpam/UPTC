import { Metadata } from 'next';
import { getCourseById, getCourses } from '@/lib/api/course';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formateDate';
import Image from 'next/image';
import RelatedCourse from '@/components/course/related-course';
import ButtonRegisterCourse from '@/components/course/button-register-course';
import { Course } from '@/types';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const id = slug.split('-').pop();
    const course = await getCourseById(id || '');

    if (!course) {
        return {
            title: 'Course Not Found',
            description: 'The course you are looking for does not exist.',
        };
    }

    return {
        title: `UPTC | ${course.title}`,
        description: course.description?.slice(0, 160),
        openGraph: {
            title: `UPTC | ${course.title}`,
            description: course.description?.slice(0, 160),
            images: [
                {
                    url: course.image,
                    width: 800,
                    height: 600,
                    alt: course.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `UPTC | ${course.title}`,
            description: course.description?.slice(0, 160),
            images: [course.image],
        },
    };
}

const Page = async ({ params }: Props) => {
    const { slug } = await params;
    const id: string = slug.split('-').pop() || '';

    const course: Course = await getCourseById(id);
    const courses: Course[] = await getCourses();
    const relatedCourses: Course[] = courses?.filter(
        (item) =>
            item.id !== course.id &&
            item.categories.some((cat: string) => course.categories.includes(cat))
    );

    return (
        <>
            <section className='responsive-px py-6 md:py-10 max-w-7xl mx-auto space-y-4 md:space-y-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* Image */}
                    <div className='rounded-xl overflow-hidden w-full lg:max-w-md mx-auto'>
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={600}
                            height={600}
                            unoptimized
                            priority
                            className='rounded-md object-contain w-full h-auto'
                        />
                    </div>

                    {/* Detail */}
                    <div className='flex flex-col gap-3 mt-6 lg:mt-0'>
                        {/* Kategori */}
                        <div className='flex flex-wrap gap-2'>
                            {course.categories.map((cat: string) => (
                                <span
                                    key={cat}
                                    className='bg-primary text-white text-[8px] px-3 py-1 rounded-md uppercase tracking-wider'
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>

                        <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
                            {course.title}
                        </h1>
                        <p className='text-gray-600 leading-relaxed text-justify'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                            expedita fuga neque obcaecati, at omnis
                            {course.description}
                        </p>

                        {/* Harga */}
                        <div className='text-2xl font-semibold text-primary'>
                            {formatCurrency(course.price)}
                        </div>

                        {/* Tombol daftar */}
                        <ButtonRegisterCourse id={id} />
                    </div>
                </div>

                {/* Informasi Tambahan */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 border-t pt-8'>
                    <div className='space-y-2'>
                        <p>
                            <strong className='text-gray-800'>📍 Lokasi:</strong>{' '}
                            {course.place}
                        </p>
                        <p>
                            <strong className='text-gray-800'>📅 Jadwal:</strong>{' '}
                            {formatDate(course.schedule)}
                        </p>
                        <p>
                            <strong className='text-gray-800'>⏳ Deadline:</strong>{' '}
                            {formatDate(course.deadline)}
                        </p>
                    </div>
                    {course.notes && (
                        <div className='space-y-2'>
                            <p>
                                <strong className='text-gray-800'>📝 Catatan:</strong>{' '}
                                {course.notes}
                            </p>
                        </div>
                    )}
                </div>
            </section>
            <RelatedCourse relatedCourses={relatedCourses} />
        </>
    );
};

export default Page;
