import React from 'react';
import { IFeaturedJob } from '../types/types';

const LatestJob = ({job}: {job: IFeaturedJob}) => {
    return (
        <div className='flex gap-8 p-8 bg-white'>

            <div className='flex justify-between items-center'>
                <img src={job.icon_url} alt="" />
            </div>

            <div className='flex flex-col'>
                <p className='text-[1.5rem] text-txt-1'>{job.title}</p>
                <p className='text-[1rem]'>{job.name} <span>{job.address}</span></p>
                <div className='flex'>
                {
                    job.tags.map((tag, key)=> <p key={key}>{tag}</p>)
                }
                </div>
            </div>
        </div>
    );
};

export default LatestJob;