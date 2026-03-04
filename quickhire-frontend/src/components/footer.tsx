import React from 'react';
import Button from './ui/button';
import SocialMedia from './socialMedia';

const Footer = () => {

    const abouts = [ "Companies", "Pricing", "Terms", "Advice", "Privacy Policy" ]
    const resources = [ "Help Docs", "Guide", "Updates", "Contact Us" ]


    return (
        <div className="bg-txt-1 text-primary-3">

            <div className='max-w-298 m-auto flex flex-col  justify-between responsive py-16 gap-6 md:gap-22 '>


                <div className='flex flex-col md:flex-row gap-6 md:gap-22'>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <img src="/assets/Logo footer.png" alt="" />
                        </div>
                        <p className='font-normal'>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                    </div>



                    <div className='flex flex-col md:flex-row gap-6 md:gap-24 '>  

                        <div className='flex gap-24'>
                            <ul className='flex flex-col gap-4 font-semibold'>About
                                {
                                    abouts.map((li, key)=> <li className='font-normal' key={key}>{li}</li>)
                                }
                            </ul>
                        
                            <ul className='flex flex-col gap-4 font-semibold'>Resources
                                {
                                    resources.map((li, key)=> <li className='font-normal ' key={key}>{li}</li>)
                                }
                            </ul>
                        </div>
                        

                        <div className='flex flex-col gap-4'>
                            <p className='font-semibold'>Get job notifications</p>
                            <p className='font-normal'>The latest job news, articles, sent to your inbox weekly.</p>
                            <div>
                                <form className='flex flex-col md:flex-row'>
                                    <input className='bg-white text-txt-2' type="text" placeholder='Email Address'/>
                                    <div>
                                        <Button title='Subscribe' bg='bg-primary-1' text='text-white'></Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='flex flex-col md:flex-row justify-between items-center md:items-between gap-6'>
                    <p>2021 @ QuickHire. All rights reserved.</p>
                    <SocialMedia></SocialMedia>
                </div>


            </div>
        </div>
    );
};

export default Footer;