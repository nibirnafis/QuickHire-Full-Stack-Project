'use client'
import React from 'react';
import Button from './ui/button';
import { searchJob } from '../utilities/utils';
import { useRouter } from 'next/navigation';



const SearchBar = () => {


    const router = useRouter()


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const title = form.get('title') as string
        const location = form.get('location') as string


        router.push(`/jobs/search/${title}/${location}`)
    }


    return (
        <div>
            <form onSubmit={handleSearch} className='flex flex-col md:flex-row bg-white p-4 gap-6'>
                <input type="text" name='title' placeholder='Job title or keyword'/>
                <input type="text" name='location' placeholder='Florence, Italy'/>
                <button type='submit'>
                    <Button title='Search my job' bg='bg-primary-1' text='text-white'></Button>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;