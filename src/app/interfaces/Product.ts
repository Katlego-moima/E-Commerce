export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    size?: string;
    imgUrl: string,
    categoryid: number;
    category: string;
    departmentId: number;
    department: string
}