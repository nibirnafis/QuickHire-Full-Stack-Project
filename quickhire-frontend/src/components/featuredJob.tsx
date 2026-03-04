import React from 'react';

const FeaturedJob = ({job}) => {

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
        <div className='flex flex-col gap-4 p-8 border-[#D6DDEB] border-[.5px] min-w-[320px] md:min-w-auto'>

            <div className='flex justify-between items-center'>
                <img src={job.icon_url} alt="" />
                <p className='border-primary-1 text-primary-1 border-[.5px] py-1 px-3'>{job.type}</p>
            </div>

            <div>
                <p className='font-semibold text-[18px] text-txt-1'>{job.title}</p>
                <p className='font-normal text-[1rem] text-txt-1'>{job.name} <span>{job.address}</span></p>
            </div>
            
            <p className='font-normal'>{job.detail}</p>
            <div className='flex gap-2'>
            {
                job.tags.map((tag, key)=> <p key={key} className={`${tagColor(tag)} py-2 px-4 rounded-full font-semibold`}>{tag}</p>)
            }
            </div>
        </div>
    );
};

export default FeaturedJob;