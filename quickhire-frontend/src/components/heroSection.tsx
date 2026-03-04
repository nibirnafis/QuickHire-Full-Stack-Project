import Image from 'next/image';
import SearchBar from './searchBar';

const HeroSection = () => {
    return (

   <section className='bg-primary-3  beveled-rb'>

        <div className='flex justify-center items-center min-h-screen md:min-h-auto relative'>

            <div className='flex justify-between items-center max-w-298 absolute responsive'>
                <div className='flex flex-col gap-6'>
                    <p className='font-clashDisplay font-semibold text-txt-1 text-[3rem] md:text-[4.5rem] leading-12 md:leading-18'>Discover<br />more than<br /><span className='text-primary-2'>5000+ Jobs</span></p>
                    <Image 
                        src='/assets/penline.png'
                        width={455}
                        height={40}
                        alt='pic'>
                    </Image>
                    <p className='font-normal text-txt-2'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                    <SearchBar></SearchBar>
                    <p>Popular : UI Designer, UX Researcher, Android, Admin</p>
                </div>
                
                <Image 
                    className='hidden lg:block'
                    src='/assets/boy.png'
                    width={501}
                    height={707}
                    alt='pic'>
                </Image>
            </div>


            <div className='w-full flex justify-end'>
                <Image 
                    src="/assets/Pattern.png"
                    width = {860}
                    height= {794}
                    alt="picture of pattern"
                />
            </div>

        </div> 

    </section>
        
    );
};

export default HeroSection;

























