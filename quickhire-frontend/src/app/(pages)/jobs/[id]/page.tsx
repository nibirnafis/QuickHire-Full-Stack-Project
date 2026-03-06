import ApplyForm from "@/src/components/applyForm";
import SectionTitle from "@/src/components/sectionTitle"
import { categoryColor } from "@/src/utilities/utils";

const JobDetail = async({params}:{params: Promise<{ id: string }> }) => {

    const { id } = await params
    
    const loadJobs = async () => {
        const res =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/${id}`, {next: { revalidate: 3600 }})
        const data =  await res.json()

        return data.res
    }

    const job = await loadJobs()



    return (

        <section className='container'>
            <div className='flex flex-col justify-center items-center max-w-298 m-auto responsive'> 

                <SectionTitle t1='Job ' t2='Detail'></SectionTitle>

                <div className='flex flex-col gap-2 p-6 border-[#D6DDEB] border-[.5px]'>

                    <div>
                        <p className='font-semibold text-[18px] text-txt-1'>{job.title}</p>
                        <p className='font-normal text-[1rem] text-txt-1'>{job.company} <span>{job.location}</span></p>
                        <p className='font-light text-sm text-txt-2'>Job ID: {job._id}</p>
                    </div>
                    
                    <p className='font-normal'>{job.description}</p>
                    <p className='font-normal'>{job.created_at}</p>
                    <div className='flex justify-between items-center'>
                        <p className={`${categoryColor(job.category)} py-2 px-4 rounded-full font-semibold`}>{job.category}</p>
                    </div>
                    
                    <ApplyForm id={id}></ApplyForm>

                </div>

            </div>

        </section>
    );
};

export default JobDetail;