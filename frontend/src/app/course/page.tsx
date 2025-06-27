import { Metadata } from 'next';
import HeroSection from '@/components/course/hero-section';
import ExplanationSection from '@/components/course/explanation-section';
import CourseSection from '@/components/course/course-section';

export const metadata: Metadata = {
    title: 'UPTC | Course',
    description: 'Course Unpam Training Center',
};

const Page = () => {
    return (
        <>
            <HeroSection />
            <ExplanationSection />
            <CourseSection />
        </>
    );
};

export default Page;
