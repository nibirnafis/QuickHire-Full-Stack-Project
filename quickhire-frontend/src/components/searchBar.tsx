import React from 'react';
import Button from './ui/button';

const SearchBar = () => {
    return (
        
        <div className=''>
            <form className='flex flex-col md:flex-row bg-white p-4 gap-6'>
                <input type="text" placeholder='Job title or keyword'/>
                <input type="text" placeholder='Florence, Italy'/>
                <Button title='Search my job' bg='bg-primary-1' text='text-white'></Button>
            </form>
        </div>
        
    );
};

export default SearchBar;