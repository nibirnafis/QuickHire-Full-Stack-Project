'use client'

import { useEffect, useState } from 'react';
import { IFeaturedJob } from '../types/types';
import FeaturedJob from './featuredJob';
import SectionTitle from './sectionTitle';

const FeaturedJobs = () => {
    

    const [ jobs, setJobs ] = useState([])


    useEffect(()=>{

        const loadData = async () => {
            const res =  await fetch('/data/featuredJobs.json', {next: { revalidate: 3600 }})
            const data =  await res.json()

            setJobs(data)
        }

        loadData()

    }, [])


    return (
        <>
        <section className=''>
            <div className='max-w-298 m-auto responsive'> 
                <div className="flex justify-between">
                    <SectionTitle t1='Featured ' t2='jobs'></SectionTitle>
                    <button className="hidden md:block">Show all jobs</button>
                </div>

                {
                    
                    jobs.length>0 ?
                    <div className="overflow-x-auto md:overflow-visible flex md:grid grid-cols-4 gap-8">
                        {
                            jobs.map((job: IFeaturedJob, key: number)=> <FeaturedJob job={job} key={key}></FeaturedJob>)
                        }
                    </div>
                    :
                    <p>No Job Available</p>
                }
                <button className="block md:hidden">Show all jobs</button>
            </div>
        </section>
        </>
    );
};

export default FeaturedJobs;