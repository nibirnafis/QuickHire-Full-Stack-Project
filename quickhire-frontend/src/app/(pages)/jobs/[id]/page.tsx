import SectionTitle from "@/src/components/sectionTitle"
import Link from "next/link";

const JobDetail = async({params}:{params: Promise<{ id: string }> }) => {

    const { id } = await params
    
    const loadJobs = async () => {
        const res =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/${id}`, {next: { revalidate: 3600 }})
        // const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/jobs.json`, {next: { revalidate: 3600 }})
        const data =  await res.json()

        return data.res
    }

    const job = await loadJobs()



    const categoryColor = (category: string) => {
        if(category === "Marketing"){
            return 'text-[#FFB836] bg-[#FFB836]/20 '
        }else if(category === "Design"){
            return 'text-[#56CDAD] bg-[#56CDAD]/20 '
        }else if(category === "Business"){
            return 'text-[#4640DE] bg-[#4640DE]/20 '
        }else if(category === "Technology"){
            return 'text-[#FF6550] bg-[#FF6550]/20'
        }
    }



    return (


        <section className='container'>
            <div className='flex flex-col justify-center items-center max-w-298 m-auto responsive'> 

                <SectionTitle t1='Job ' t2='Detail'></SectionTitle>

                <div className='flex flex-col gap-2 p-6 border-[#D6DDEB] border-[.5px]'>

                    <div>
                        <p className='font-semibold text-[18px] text-txt-1'>{job.title}</p>
                        <p className='font-normal text-[1rem] text-txt-1'>{job.company} <span>{job.location}</span></p>
                    </div>
                    
                    <p className='font-normal'>{job.description}</p>
                    <p className='font-normal'>{job.created_at}</p>
                    <div className='flex justify-between items-center'>
                        <p className={`${categoryColor(job.category)} py-2 px-4 rounded-full font-semibold`}>{job.category}</p>
                        <Link href={`/jobs/apply/${job._id}/${job.title}`}>Apply</Link>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default JobDetail;