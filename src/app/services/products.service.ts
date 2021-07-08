import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { Product } from '../interfaces/Product';
import { ProductCategory } from '../interfaces/ProductCategory';
import { ProductDepartment } from '../interfaces/ProductDepartment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
      {
        id: 1,
        name: "string",
        description: "string",
        price: 100,
        size: "small",
        imgUrl: "https://i.imgur.com/xdbHo4E.png",
        categoryid: 1,
        category: "Shoes",
        departmentId: 1,
        department: "Men"
      },
      {
        id: 2,
        name: "string",
        description: "string",
        price: 100,
        size: "small",
        imgUrl: "https://i.imgur.com/xdbHo4E.png",
        categoryid: 2,
        category: "Jeans",
        departmentId: 1,
        department: "Men",
      },
      {
        id: 3,
        name: "string",
        description: "string",
        price: 100,
        size: "small",
        imgUrl: "https://i.imgur.com/xdbHo4E.png",
        categoryid: 3,
        category: "T-Shirts",
        departmentId: 1,
        department: "Men",
      },
      {
        id: 3,
        name: "string",
        description: "string",
        price: 100,
        size: "small",
        imgUrl: "https://i.imgur.com/xdbHo4E.png",
        categoryid: 4,
        category: "Hats",
        departmentId: 1,
        department: "Men",
      },
  ];
  productCategories: ProductCategory[] = [
    {
      id: 1,
      description: "Shoes"
    },
    {
      id: 2,
      description: "Jeans"
    },
    {
      id: 3,
      description: "T-Shirts"
    },
    {
      id: 4,
      description: "Hats"
    }
];
  productDepartments: ProductDepartment[] = [
    {
      id: 1,
      description: "Men"
    },
    {
      id: 2,
      description: "Women"
    },
    {
      id: 3,
      description: "Girls"
    },
    {
      id: 4,
      description: "Boys"
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return of(this.productCategories);
  }

  getProductDepartments(): Observable<ProductDepartment[]> {
    return of(this.productDepartments);
  }
}
