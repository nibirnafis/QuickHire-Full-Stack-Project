export async function addNewJob(newJob){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob) 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        return result

    } catch (error) {
        console.log(error)
    }
}




export async function applyJob(appliedJob){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/applications`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(appliedJob) 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        // console.log("Success:", result);
        return result

    } catch (error) {
        console.log(error)
    }
}






export async function deleteJob(id){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        // console.log("Success:", result);
        return result

    } catch (error) {
        console.log(error)
    }
}







export async function searchJob(job){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/search`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(job) 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        // console.log("Success:", result);
        return result

    } catch (error) {
        console.log(error)
    }
}






export const categoryColor = (category) => {
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