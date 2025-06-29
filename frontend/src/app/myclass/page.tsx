import { Metadata } from "next";

import CourseSection from "@/components/myclass/course-section";
import HeroSection from "@/components/myclass/hero-section";

export const metadata: Metadata = {
    title: "UPTC | My Class",
    description: "My Class Unpam Training Center",
};

const Page = () => {
    return (
        <>
            <HeroSection />
            <CourseSection />
        </>
    );
};

export default Page;
