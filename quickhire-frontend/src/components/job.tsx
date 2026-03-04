import React from 'react';

const Job = ({job}) => {
    const tagColor = (tag) => {
        if(tag === "Marketing"){
            return 'text-[#FFB836] bg-[#FFB836]/20 '
        }else if(tag === "Design"){
            return 'text-[#56CDAD] bg-[#56CDAD]/20 '
        }else if(tag === "Business"){
            return 'text-[#4640DE] bg-[#4640DE]/20 '
        }else if(tag === "Technology"){
            return 'text-[#FF6550] bg-[#FF6550]/20'
        }
    }

    return (
        <div className='flex flex-col gap-2 p-6 border-[#D6DDEB] border-[.5px] min-w-[320px] md:min-w-auto'>

            <div>
                <p className='font-semibold text-[18px] text-txt-1'>{job.title}</p>
                <p className='font-normal text-[1rem] text-txt-1'>{job.company} <span>{job.location}</span></p>
            </div>
            
            <p className='font-normal'>{job.description}</p>
            <p className='font-normal'>{job.created_at}</p>
            <div className='flex gap-2'>
            {
                job.category.map((tag, key: number)=> <p key={key} className={`${tagColor(tag)} py-2 px-4 rounded-full font-semibold`}>{tag}</p>)
            }
            </div>
        </div>
    );
};

export default Job;



//  title, company, location, category, description, created_at