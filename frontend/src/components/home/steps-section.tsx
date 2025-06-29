import { Icon } from "@iconify/react";

import { steps } from "@/lib/constant";

const StepsSection = () => {
    return (
        <section className="responsive-px responsive-py">
            <div className="space-y-6">
                <div className="space-y-3">
                    <h3 className="text-primary text-3xl font-semibold">
                        Dapatkan Pengalaman Terbaik
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corporis esse eligendi, illum aut neque nisi
                        quisquam facilis voluptate quia facere.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                    {steps.map((data, i) => (
                        <div
                            key={i}
                            className="flex h-[200px] w-full flex-col items-center justify-center space-y-4 rounded-lg border border-black bg-white px-8 text-center shadow-md md:h-[280px] md:space-y-8"
                        >
                            <div>
                                <Icon
                                    icon={data.icon}
                                    className="size-10 md:size-14"
                                />
                            </div>
                            <p className="text-xs md:text-base">{data.field}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
