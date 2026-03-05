'use client'

import { useEffect, useState } from 'react';
import { IFeaturedJob } from '../types/types';
import LatestJob from './latestJob';
import SectionTitle from './sectionTitle';

const LatestJobs = () => {

    const [ jobs, setJobs ] = useState([])

    useEffect(()=>{
        const loadData = async () => {
            const res = await  fetch('/data/latestJobs.json')
            const data = await res.json()

            setJobs(data)
        }
        
        loadData()
    }, [])

    return (
        <>
        <section className='py-18 bg-primary-3 beveled-lt'>
            <div className='max-w-298 m-auto responsive'>
                <div className="flex justify-between mb-12">
                    <SectionTitle t1='Latest ' t2='jobs open'></SectionTitle>
                    <button className="hidden md:block">Show all jobs</button>
                </div>

                {
                    
                    jobs.length>0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {
                            jobs.map((job: IFeaturedJob, key: number)=> <LatestJob job={job} key={key}></LatestJob>)
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

export default LatestJobs;