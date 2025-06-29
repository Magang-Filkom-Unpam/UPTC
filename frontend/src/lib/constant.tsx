import type { Navigation, Rating, Sponsor, Steps } from "@/types";

// sponsors images
import sponsor1 from "../../public/sponsors/sponsor-1.png";
import sponsor2 from "../../public/sponsors/sponsor-2.png";
import sponsor3 from "../../public/sponsors/sponsor-3.png";
import sponsor4 from "../../public/sponsors/sponsor-4.png";

// images
export { default as courseImage } from "../../public/course-hero.png";
export { default as homeImage } from "../../public/home-hero.png";
export { default as latestProgramImage } from "../../public/latest-program.png";

export const navigations: Navigation[] = [
    { label: "Home", href: "/" },
    { label: "Course", href: "/course" },
    { label: "My Class", href: "/myclass" },
];

export const sponsors: Sponsor[] = [
    {
        title: "filkom universitas pamulang",
        image: sponsor1,
        width: 64,
        height: 62,
    },
    {
        title: "kampus merdeka",
        image: sponsor2,
        width: 120,
        height: 62,
    },
    {
        title: "sasmita jaya tv",
        image: sponsor3,
        width: 85,
        height: 85,
    },
    {
        title: "yayasan sasmita jaya",
        image: sponsor4,
        width: 150,
        height: 85,
    },
];

export const steps: Steps[] = [
    {
        icon: "oui:ml-create-multi-metric-job",
        field: "Create Account with Login/SignIn",
    },
    {
        icon: "icon-park-outline:doc-search",
        field: "Choose Course/Certificate",
    },
    {
        icon: "hugeicons:payment-02",
        field: "Pay, Pay, Pay",
    },
    {
        icon: "ph:certificate",
        field: "Check & Download Your Certificate",
    },
];

export const ratings: Rating[] = [
    {
        name: "Raka Pratama",
        role: "Web Developer",
        comment:
            "Pelayanan sangat memuaskan dan instruktur sangat profesional. Materi mudah dipahami!",
    },
    {
        name: "Dina Ayu",
        role: "UI/UX Designer",
        comment:
            "Saya sangat terbantu dengan pelatihannya, sekarang lebih percaya diri dalam pekerjaan.",
    },
    {
        name: "Bagas Saputra",
        role: "IT Support",
        comment:
            "Materi lengkap dan penyampaian sangat jelas. Recommended banget!",
    },
    {
        name: "Siti Nurhaliza",
        role: "Product Manager",
        comment:
            "Sesi pelatihan sangat terstruktur dan memberikan insight yang bermanfaat dalam pekerjaan saya.",
    },
    {
        name: "Rizky Maulana",
        role: "Frontend Developer",
        comment:
            "Instruktur sangat ramah dan mampu menjelaskan materi teknis dengan cara yang mudah dimengerti.",
    },
    {
        name: "Andini Cahya",
        role: "Digital Marketer",
        comment:
            "Pelatihan ini membuka wawasan baru saya dalam bidang digital marketing. Sangat direkomendasikan!",
    },
];
