import HeroSection from "@/components/home/hero-section";
import LatestProgramSection from "@/components/home/latest-program-section";
import RatingsSection from "@/components/home/ratings-section";
import SponsorSection from "@/components/home/sponsors-section";
import StepsSection from "@/components/home/steps-section";

export default async function Home({}) {
    return (
        <>
            <HeroSection />
            <SponsorSection />
            <LatestProgramSection />
            <StepsSection />
            <RatingsSection />
        </>
    );
}
