import { homeImage } from '@/lib/constant';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className='responsive-px flex items-center justify-center h-[80vh] mt-8 md:mt-0'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 md:gap-0'>
                <div className='flex flex-col gap-4 lg:order-1 order-2'>
                    <p>Lorem ipsum dolor.</p>
                    <h1 className='font-bold text-primary text-4xl leading-12 tracking-wider'>
                        MASTER YOUR SKILLS TO INFORMATICS PROFESSIONALLY
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
                        voluptatibus eligendi repudiandae tempora.
                    </p>

                    <div className='flex items-center justify-start gap-2'>
                        <button className='bg-primary text-white px-3 py-1.5 rounded-sm'>
                            <Link href=''>Get Started</Link>
                        </button>
                        <button className='bg-white border px-3 py-1.5 rounded-sm'>
                            <Link href=''>Get Started</Link>
                        </button>
                    </div>
                </div>

                <div className='order-1 lg:order-2'>
                    <Image
                        src={homeImage}
                        alt='UPTC Filkom Unpam'
                        width={900}
                        height={900}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
