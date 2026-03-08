import Job from "@/src/components/job";
import SectionTitle from "@/src/components/sectionTitle"
import { IJob } from "@/src/types/types";




const categorizedJobs = async({params}:{params: Promise<{ category: string }> }) => {

    const { category } = await params
    console.log(category)
    
    const loadJobs = async () => {
      const res =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/category/${category}`, { cache: 'no-store' })
      const data =  await res.json()

      return data.res
  }

  const jobs = await loadJobs()

  return (

    <section className='container'>
        <div className='flex flex-col justify-center items-center max-w-298 m-auto responsive'> 

            <SectionTitle t1='All ' t2='Jobs'></SectionTitle>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              {
                jobs.length>0 ?
                jobs.map((job: IJob, key: number)=> <Job job={job} key={key}></Job>)
                :
                <p>No Job Available</p>
              }
            </div>
        </div>
    </section>

  )
};

export default categorizedJobs;