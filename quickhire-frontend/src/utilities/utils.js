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
        console.log("Success:", result);

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
        console.log("Success:", result);

    } catch (error) {
        console.log(error)
    }
}





export async function DeleteJob(appliedJob){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(appliedJob) 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Success:", result);

    } catch (error) {
        console.log(error)
    }
}