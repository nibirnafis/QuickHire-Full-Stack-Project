'use client'
import { useState } from 'react';
import Button from './ui/button';
import Link from 'next/link';

const Navbar = () => {

    const [ isDisplayed, setIsdisplayed ] = useState(false)

    const handleDisplay = () => {
        setIsdisplayed(!isDisplayed)
    }

    return (
        <div className='bg-primary-3 z-1'>
            <div className='max-w-298 m-auto flex justify-between items-center py-2 responsive'>
                <div className='flex  justify-center items-center gap-12'>
                    <Link href={'http://localhost:3000'}>
                        <img src="/assets/Logo.png" alt="" />
                    </Link>
                    <div className='hidden md:flex gap-4'>
                        <Link className='text-txt-2 font-normal' href={`${process.env.NEXT_PUBLIC_BASE_URL}/jobs`}>Jobs</Link>
                        <Link className='text-txt-2 font-normal' href={`${process.env.NEXT_PUBLIC_BASE_URL}/admin`}>Admin Pannel</Link>
                    </div>
                </div>

                <div className='md:hidden flex flex-col items-end relative'>
                    <div className=''>
                        <img onClick={handleDisplay} src="/assets/Frame 1261.svg" alt="" />
                    </div>
                    <div className={`${!isDisplayed ? 'hidden' : 'flex'} flex-col justify-center items-center absolute top-8 right-8 bg-primary-1 min-w-50` }>
                        <Link className='text-white py-3 px-6' href={`${process.env.NEXT_PUBLIC_BASE_URL}/jobs`}>Jobs</Link>
                        <Link className='text-white py-3 px-6' href={`${process.env.NEXT_PUBLIC_BASE_URL}/jobs`}>Admin Pannel</Link>
                        <Button title='Login' bg='bg-none' text='text-primary-3'></Button>
                        <Button title='Sign Up' bg='bg-primary-1' text='text-white'></Button>
                    </div>
                </div>

                <div className='hidden md:flex'>
                    <Button title='Login' bg='bg-none' text='text-primary-1'></Button>
                    <Button title='Sign Up' bg='bg-primary-1' text='text-white'></Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;