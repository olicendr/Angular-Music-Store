import { Injectable } from '@angular/core';
import { Item } from './items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  cartItems: Item[] = [];

  getCartItems() {
    let localData: any = window.localStorage.getItem("cartItems");

    if (JSON.parse(localData).length) {
      this.cartItems = JSON.parse(localData);
    }
    return this.cartItems;
  }

  addToCart(item: Item) {
    this.cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }

  removeFromCart(removedItem: Item) {
    this.cartItems = this.cartItems.filter(item => item.title !== removedItem.title);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }
}
