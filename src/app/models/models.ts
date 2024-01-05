export interface IProduct {
    id:number;
    title:string;
    price:string;
    category:string;
    description:string;
    image:string;
    rating:ICount;
}

export interface ICount {
    rate:number;
    count:number;
}