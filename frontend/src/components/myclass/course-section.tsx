// components/CourseSection.tsx
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

import CourseSectionClient from "@/components/myclass/course-section-client";
import { getRegisteredCourses } from "@/lib/api/course";

const CourseSection = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["registered-courses"],
        queryFn: getRegisteredCourses,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CourseSectionClient />
        </HydrationBoundary>
    );
};

export default CourseSection;
