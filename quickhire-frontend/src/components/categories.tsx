 'use client'

import { useEffect, useState } from "react";
import { ICategory } from "../types/types";
import Category from "./category";
import SectionTitle from "./sectionTitle";

function Categories(){

    const [ categories, setCategories ] = useState([])
    
        useEffect(()=>{
            const loadData = async () => {
                const res = await  fetch('/data/categories.json')
                const data = await res.json()
    
                setCategories(data)
            }
            
            loadData()
        }, [])


    return (
        <>
        <section className="">
            <div className="max-w-298 m-auto responsive">
                <div className="flex justify-between mb-12">
                    <SectionTitle t1='Explore by ' t2='category'></SectionTitle>
                    <button className="hidden md:block">Show all jobs</button>
                </div>

                {
                    
                    categories.length>0 ?
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        {
                        categories.map((category: ICategory, key: number)=> <Category category={category} key={key}></Category>)
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

export default Categories;