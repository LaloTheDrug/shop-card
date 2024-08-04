import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() {}

  products = [
    {
      id: 1,
      name: 'Bill Cipher The Glasses',
      description: 'Glasses',
      price: 10000,
      button: 'Buy',
      inStock: 50,
    },
    {
      id: 2,
      name: 'Bill Cipher The Question',
      description: 'Question Mark',
      price: 20000,
      button: 'Buy',
      inStock: 45
    },
    {
      id: 3,
      name: 'Bill Cipher The Ice Bag',
      description: 'Ice Bag',
      price: 30000,
      button: 'Buy',
      inStock: 40
    },
    {
      id: 4,
      name: 'Bill Cipher The Moon',
      description: 'Moon',
      price: 40000,
      button: 'Buy',
      inStock: 35
    },
    {
      id: 5,
      name: 'Bill Cipher The Pine Tree',
      description: 'Pine Tree',
      price: 50000,
      button: 'Buy',
      inStock: 30
    }
    ]

  cart: any[] = [];
  total = 0;
  totalItems = 0;
  addToCart(item: any) {
    if (this.products[item.id - 1].inStock == 0) {
      return;
    }
    let index = this.cart.findIndex((element) => element.id === item.id);
    if (index != -1) {
      this.cart[index].quantity++;
      this.products[item.id - 1].inStock--;
      this.cart[index].total = this.cart[index].quantity * this.cart[index].price;
      this.total += this.cart[index].price  ;
      console.log(this.total);
    } else {
      this.cart.push(item);
      this.cart[item.id-1].total = this.cart[item.id-1].quantity * this.cart[item.id-1].price;
      this.total += this.cart[item.id-1].price  ;
      console.log(this.total);
    }
  }
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
