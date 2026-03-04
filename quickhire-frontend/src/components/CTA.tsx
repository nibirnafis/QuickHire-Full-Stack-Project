import React from 'react';
import Button from './ui/button';
import Image from 'next/image';

const CTA = () => {
    return (
        <section className="beveled-ltrb">
            <div className="max-w-298 m-auto responsive flex flex-col md:flex-row justify-between bg-primary-1 px-18 pt-17 gap-6">
                <div className='flex flex-col items-center md:items-start gap-6'>
                    <p className='text-white font-clashDisplay font-semibold text-[2rem] md:text-[3rem] text-center md:text-left'>Start posting <br /> jobs today</p>
                    <p className='text-[1rem] text-white'>Start posting jobs for only $10.</p>
                    <Button title='Sign Up For Free' bg='bg-white' text='text-primary-1'></Button>
                </div>

                <img src="/assets/Dashboard.jpg" alt="" />
            </div>

            
        </section>
    );
};

export default CTA;