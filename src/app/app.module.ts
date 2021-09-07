import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './views/cart/cart.component';
import { OrdersComponent } from './views/orders/orders.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { WishlistComponent } from './views/wishlist/wishlist.component';
import { ProductsComponent } from './views/products/products.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountComponent } from './views/account/account.component';
import { ProductComponent } from './component/product/product.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { LoginCardComponent } from './component/login-card/login-card.component';
import { RegisterCardComponent } from './component/register-card/register-card.component';
import { ConnectService } from './services/connect.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    OrdersComponent,
    RegisterComponent,
    LoginComponent,
    WishlistComponent,
    ProductsComponent,
    NavbarComponent,
    AccountComponent,
    ProductComponent,
    DropdownComponent,
    LoginCardComponent,
    RegisterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
