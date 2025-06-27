import { steps } from '@/lib/constant';
import { Icon } from '@iconify/react';

const StepsSection = () => {
    return (
        <section className='responsive-px responsive-py'>
            <div className='space-y-6'>
                <div className='space-y-3 '>
                    <h3 className='font-semibold text-primary text-3xl'>
                        Dapatkan Pengalaman Terbaik
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
                        esse eligendi, illum aut neque nisi quisquam facilis voluptate
                        quia facere.
                    </p>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4'>
                    {steps.map((data, i) => (
                        <div
                            key={i}
                            className='flex flex-col text-center items-center justify-center w-full h-[200px] md:h-[280px] shadow-md rounded-lg bg-white space-y-4 md:space-y-8 px-8 border border-black'
                        >
                            <div>
                                <Icon
                                    icon={data.icon}
                                    className='size-10 md:size-14'
                                />
                            </div>
                            <p className='text-xs md:text-base'>{data.field}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
