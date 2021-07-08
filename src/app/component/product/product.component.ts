import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  @Input() product: Product = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    size: "",
    imgUrl: "",
    categoryid: 0,
    category: "",
    departmentId: 0,
    department: "",
  };
  constructor() { }

  ngOnInit(): void {
  }

}
