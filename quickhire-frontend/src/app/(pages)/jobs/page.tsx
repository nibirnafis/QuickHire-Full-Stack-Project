import Job from "@/src/components/job"
import SectionTitle from "@/src/components/sectionTitle"


export default async function Jobs() {


  const loadJobs = async () => {
      // const res =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs`, {next: { revalidate: 3600 }})
      const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/jobs.json`, {next: { revalidate: 3600 }})
      const data =  await res.json()

      return data
  }

  const jobs = await loadJobs()

  return (

    <section className=''>
        <div className='flex flex-col justify-center items-center max-w-298 m-auto responsive'> 

            <SectionTitle t1='All ' t2='Jobs'></SectionTitle>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              {
                jobs.length>0 ?
                jobs.map((job, key: number)=> <Job job={job} key={key}></Job>)
                :
                <p>No Job Available</p>
              }
            </div>
        </div>
    </section>

  );
}




