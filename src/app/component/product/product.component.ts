import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ConnectService } from 'src/app/services/connect.service';

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
  pr: any = [];
  constructor(public connect: ConnectService) { }

  ngOnInit(): void {
    this.connect.getProducts().subscribe((data: any)=>{
      this.pr = data;
      console.log(this.pr);
      console.log("---------------------------------------------");
      
    });
  }

}
