import Image from 'next/image';
import HeroSection from './heroSection';



const Main = ({children}: Readonly<{ children: React.ReactNode;}>) => {
    return (
        <div className='max-w-360 m-auto'>

            <div className='flex justify-center'>

                <div className='w-298 absolute'>
                    <HeroSection></HeroSection>
                </div>

                <div className='w-full flex justify-end bg-[#F8F8FD]'>
                    <Image 
                        src="/assets/Pattern.png"
                        width = {860}
                        height= {794}
                        alt="picture of pattern"
                    />
                </div>

            </div>

            {children}


        </div>
    );
};

export default Main;