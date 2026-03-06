import Link from 'next/link';
import { IJob } from '../types/types';
import { categoryColor } from '../utilities/utils';

const Job = ({job}: {job: IJob}) => {



    return (
        
        <div className='flex flex-col gap-2 p-6 border-[#D6DDEB] border-[.5px] min-w-[320px] md:min-w-auto'>

            <div>
                <p className='font-semibold text-[18px] text-txt-1'>{job.title}</p>
                <p className='font-normal text-[1rem] text-txt-1'>{job.company} <span>{job.location}</span></p>
                <p className='font-light text-sm text-txt-2'>Job ID: {job._id}</p>
            </div>
            
            <p className='font-normal'>{job.description}</p>
            <p className='font-normal'>{job.createdAt}</p>
            <div className='flex justify-between items-center'>
                <p className={`${categoryColor(job.category)} py-2 px-4 rounded-full font-semibold`}>{job.category}</p>
                <Link href={`/jobs/${job._id}`}>View Detail</Link>
            </div>
            
        </div>  
    );
};

export default Job;



//  title, company, location, category, description, created_at