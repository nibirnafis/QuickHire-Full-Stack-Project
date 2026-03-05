export interface IJob {
    _id: string;
    category:  string,
    company: string;
    createdAt: string;
    description: string;
    location: string;
    title: string;
    updatedAt: string;
}


export interface ICategory {
    icon_url: string;
    title: string;
    available: number
}



export interface IFeaturedJob {
    icon_url: string,
    title: string,
    type: string,
    name: string,
    address: string,
    detail: string,
    tags: string[]
}


export interface IFeaturedJob {
    icon_url: string,
    title: string,
    type: string,
    name: string,
    address: string,
    detail: string,
    tags: string[]
}


