import { Product } from './Product';

export interface User {
    id?: number;
    name: string;
    email: boolean;
    password: string;
    cart?: Product[];
    wishlist?: Product[];
}