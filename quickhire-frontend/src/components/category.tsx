import React from 'react';
import { ICategory } from '../types/types';

const Category = ({category}:{category: ICategory}) => {
    return (
        <div className='flex flex-row md:flex-col p-8 gap-8 border-[#D6DDEB] border-[.5px]'>
            <div>
                <img className='' src={category.icon_url} alt="" />
            </div>
            <div className=''>
                <p className='font-clashDisplay text-2xl text-txt-1 '>{category.title}</p>
                <p>{category.available} jobs available</p>
            </div>
        </div>
    );
};

export default Category;