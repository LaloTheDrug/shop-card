import { Routes } from '@angular/router';
import {ListProductComponent} from "./pages/list-product/list-product.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {ListCartComponent} from "./pages/list-cart/list-cart.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
    path: 'products',
    component: ListProductComponent
  },{
    path: 'cart',
    component: ListCartComponent
  },{
    path: 'product/:id',
    component: ProductDetailComponent
  }
];
