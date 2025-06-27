'use client';

import { sponsors } from '@/lib/constant';
import Image from 'next/image';

const SponsorSection = () => {
    return (
        <section className='responsive-px lg:px-24 mt-10 md:-mt-8'>
            <div className='flex items-center justify-center gap-8 flex-wrap'>
                {[...sponsors, ...sponsors].map((data, i) => (
                    <div key={i}>
                        <Image
                            src={data.image}
                            alt={data.title}
                            title={data.title}
                            width={data.width}
                            height={data.height}
                            className='object-contain w-auto'
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SponsorSection;
