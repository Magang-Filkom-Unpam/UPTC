import { Metadata } from "next";

import CourseSection from "@/components/course/course-section";
import ExplanationSection from "@/components/course/explanation-section";
import HeroSection from "@/components/course/hero-section";

export const metadata: Metadata = {
    title: "UPTC | Course",
    description: "Course Unpam Training Center",
};

const Page = () => {
    return (
        <>
            <HeroSection />
            <ExplanationSection isCourse />
            <CourseSection />
        </>
    );
};

export default Page;
