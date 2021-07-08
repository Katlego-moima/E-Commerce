import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './views/products/products.component';
import { CartComponent } from './views/cart/cart.component';
import { OrdersComponent } from './views/orders/orders.component';
import { WishlistComponent } from './views/wishlist/wishlist.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AccountComponent } from './views/account/account.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductsComponent
  },
  { 
    path: 'cart', 
    component: CartComponent
  },
  { 
    path: 'orders', 
    component: OrdersComponent
  },
  { 
    path: 'wishlist', 
    component: WishlistComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'register', 
    component: RegisterComponent
  },
  { 
    path: 'account', 
    component: AccountComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
