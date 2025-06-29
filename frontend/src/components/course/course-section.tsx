// app/CourseSection.tsx
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

import { getCourses } from "@/lib/api/course";

import CourseSectionClient from "./course-section-client";

const CourseSection = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["courses"],
        queryFn: getCourses,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CourseSectionClient />
        </HydrationBoundary>
    );
};

export default CourseSection;
