import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {ProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public authService:AuthService) {}

  cart: any[] = [];
  total = 0;
  totalItems = 0;
  products: ProductModel[] =[
    {
      id: 1,
      name: 'Màn hình Asus TUF',
      description: '24 inch,1920 x 1080,180Hz,IPS',
      price: 3150000,
      inStock: 50,
      imgUrl: 'https://product.hstatic.net/200000722513/product/download.png_1eb1cdf82aea4fcf9344d6652dcb071d_medium.jpg'
    },
    {
      id: 2,
      name: 'Màn hình ViewSonic',
      description: '24 inch,1920 x 1080,180Hz,IPS',
      price: 3290000,
      inStock: 45,
      imgUrl: 'https://product.hstatic.net/200000722513/product/viewsonic_vx2428j_gearvn_60f31c4113114072b56e421577507e06_53fe3e1fa38d4845b222cb2d8497787f_medium.jpg'
    },
    {
      id: 3,
      name: 'Màn hình AOC',
      description: '27 inch,1920 x 1080,100Hz,IPS',
      price: 2590000,
      inStock: 40,
      imgUrl: 'https://product.hstatic.net/200000722513/product/aoc_24b36h_gearvn_63daccdd7064460fb9e2c90f3b95c91d_medium.jpg'
    },
    {
      id: 4,
      name: 'Màn hình MSI G255F ',
      description: '24 inch,1920 x 1080,180Hz,IPS',
      price: 3090000,
      inStock: 35,
      imgUrl: 'https://product.hstatic.net/200000722513/product/1024__4_.png_64117f2fefd844e0a4021c0845d9fa8e_medium.jpg'
    }
  ]
  addToCart(item: any) {
    if (this.authService.currentUser == null) {
      alert('Please log in to continue');
      return;
    }else { if (this.products[item.id - 1].inStock == 0) {
      return;
    }
      let index = this.cart.findIndex((element) => element.id === item.id);
      if (index != -1) {
        this.cart[index].quantity++;
        this.products[item.id - 1].inStock--;
        this.cart[index].total = this.cart[index].quantity * this.cart[index].price;
        this.total += this.cart[index].price  ;
      } else {
        this.cart.push(item);
        this.cart[item.id-1].total = this.cart[item.id-1].quantity * this.cart[item.id-1].price;
        this.total += this.cart[item.id-1].price  ;
      }
    }}

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
  calculateTotal() {
    this.totalItems = 0;
    this.cart.forEach((element) => {
      this.totalItems += element.total;
    });
  }
}
