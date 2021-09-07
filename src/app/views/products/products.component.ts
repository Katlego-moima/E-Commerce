import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductCategory } from 'src/app/interfaces/ProductCategory';
import { ProductDepartment } from 'src/app/interfaces/ProductDepartment';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productsToDisplay: Product[] = [];
  productCategories: ProductCategory[] = [];
  productDepartments: ProductDepartment[] = [];
  selectedDepartmentId?: number = undefined;
  selectedCategoryId?: number = undefined;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.productsToDisplay = products;
      });

    this.productsService.getProductCategories()
      .subscribe(categories => this.productCategories = categories);

    this.productsService.getProductDepartments()
      .subscribe(departments => this.productDepartments = departments);
  }

  selectFilter(filterDetails: any){
    
    if(filterDetails?.type === 'Department' && filterDetails.itemId === 0){
      this.selectedDepartmentId = undefined;
      if(this.selectedCategoryId) 
        this.productsToDisplay = this.products.filter(p => p.categoryid === this.selectedCategoryId);
      else
        this.productsToDisplay = this.products;

      return;
    }

    if(filterDetails?.type === 'Category' && filterDetails.itemId === 0){
      this.selectedCategoryId = undefined;
      if(this.selectedDepartmentId) 
        this.productsToDisplay = this.products.filter(p => p.departmentId === this.selectedDepartmentId);
      else
        this.productsToDisplay = this.products;

      return;
    }

    if(filterDetails?.type === 'Department'){
      this.selectedDepartmentId = filterDetails.itemId;
      this.productsToDisplay = this.products
        .filter(p => p.departmentId === filterDetails.itemId && 
          (this.selectedCategoryId === undefined || p.categoryid === 
            this.selectedCategoryId));
      return;
    } 

    if(filterDetails?.type === 'Category') {
      this.selectedCategoryId = filterDetails.itemId;
      this.productsToDisplay = this.products
        .filter(p => p.categoryid === filterDetails.itemId &&
          (this.selectedDepartmentId === undefined || p.departmentId === 
            this.selectedDepartmentId));
      return;
    }
  }

}
