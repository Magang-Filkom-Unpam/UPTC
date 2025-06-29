import Image from "next/image";
import Link from "next/link";

import { Course } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import { slugify } from "@/utils/slugify";

const CourseItem = ({ course }: { course: Course }) => {
    return (
        <Link href={`/course/${slugify(course.title)}-${course.id}`}>
            <div className="flex h-[380px] w-full flex-col overflow-hidden rounded-lg border shadow-lg transition-all duration-300 hover:bg-gray-100 md:h-[420px]">
                <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
                    unoptimized
                    priority
                    className="h-48 w-full rounded-t-lg object-cover"
                />
                <div className="flex flex-1 flex-col gap-2 p-4 md:p-6">
                    <h4 className="text-xl font-semibold">{course.title}</h4>
                    <p className="text-sm text-gray-600">
                        {course.description}
                    </p>
                </div>
                <div className="mt-auto p-4 md:p-6">
                    <p className="font-medium">
                        {formatCurrency(course.price)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CourseItem;
