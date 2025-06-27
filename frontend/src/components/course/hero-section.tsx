const HeroSection = () => {
    return (
        <section className='responsive-px bg-secondary h-[45vh] md:h-[30vh] lg:h-[45vh]'>
            <div className='flex flex-col items-center justify-center text-start md:text-center gap-3 h-full -mt-14 md:-mt-8'>
                <h1 className='font-bold text-primary text-4xl leading-12 tracking-wider'>
                    Mau Belajar Apa Nich?
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                    aspernatur nostrum, id odio ullam veritatis.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
