"use client";

import Image from "next/image";

import { sponsors } from "@/lib/constant";

const SponsorSection = () => {
    return (
        <section className="responsive-px mt-10 md:-mt-8 lg:px-24">
            <div
                className="flex flex-wrap items-center justify-center gap-8"
                id="latests-programs"
            >
                {[...sponsors, ...sponsors].map((data, i) => (
                    <div key={i}>
                        <Image
                            src={data.image}
                            alt={data.title}
                            title={data.title}
                            width={data.width}
                            height={data.height}
                            className="w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SponsorSection;
