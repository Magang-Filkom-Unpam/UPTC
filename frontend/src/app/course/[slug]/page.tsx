import { Metadata } from "next";
import Image from "next/image";

import ButtonRegisterCourse from "@/components/course/button-register-course";
import ExplanationSection from "@/components/course/explanation-section";
import RelatedCourse from "@/components/course/related-course";
import { getCourseById, getCourses } from "@/lib/api/course";
import { Course } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formateDate";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const id = slug.split("-").pop();
    const course = await getCourseById(id || "");

    if (!course) {
        return {
            title: "Course Not Found",
            description: "The course you are looking for does not exist.",
        };
    }

    return {
        title: `UPTC | Course | ${course.title}`,
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
            card: "summary_large_image",
            title: `UPTC | ${course.title}`,
            description: course.description?.slice(0, 160),
            images: [course.image],
        },
    };
}

const Page = async ({ params }: Props) => {
    const { slug } = await params;
    const id: string = slug.split("-").pop() || "";

    const course: Course = await getCourseById(id);
    const courses: Course[] = await getCourses();
    const relatedCourses: Course[] = courses?.filter(
        (item) =>
            item.id !== course.id &&
            item.categories.some((cat: string) =>
                course.categories.includes(cat),
            ),
    );

    return (
        <>
            <section className="responsive-px mx-auto max-w-7xl space-y-4 py-6 md:space-y-8 md:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="mx-auto w-full overflow-hidden rounded-xl lg:max-w-md">
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={600}
                            height={600}
                            unoptimized
                            priority
                            className="h-auto w-full rounded-md object-contain"
                        />
                    </div>

                    {/* Detail */}
                    <div className="mt-6 flex flex-col gap-3 lg:mt-0">
                        {/* Kategori */}
                        <div className="flex flex-wrap gap-2">
                            {course.categories.map((cat: string) => (
                                <span
                                    key={cat}
                                    className="bg-primary rounded-md px-3 py-1 text-[8px] tracking-wider text-white uppercase"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
                            {course.title}
                        </h1>
                        <p className="text-justify leading-relaxed text-gray-600">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nemo expedita fuga neque obcaecati, at omnis
                            {course.description}
                        </p>

                        {/* Harga */}
                        <div className="text-primary text-2xl font-semibold">
                            {formatCurrency(course.price)}
                        </div>

                        {/* Tombol daftar */}
                        <ButtonRegisterCourse id={id} />
                    </div>
                </div>

                <div className="border-t pt-6">
                    <ExplanationSection />
                </div>

                {/* Informasi Tambahan */}
                <div className="grid grid-cols-1 gap-6 border-t pt-6 text-sm text-gray-600 md:grid-cols-2">
                    <div className="space-y-2">
                        <p>
                            <strong className="text-gray-800">
                                📍 Lokasi:
                            </strong>{" "}
                            {course.place}
                        </p>
                        <p>
                            <strong className="text-gray-800">
                                📅 Jadwal:
                            </strong>{" "}
                            {formatDate(course.schedule)}
                        </p>
                        <p>
                            <strong className="text-gray-800">
                                ⏳ Deadline:
                            </strong>{" "}
                            {formatDate(course.deadline)}
                        </p>
                    </div>
                    {course.notes && (
                        <div className="space-y-2">
                            <p>
                                <strong className="text-gray-800">
                                    📝 Catatan:
                                </strong>{" "}
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
