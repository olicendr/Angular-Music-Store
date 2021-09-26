import { Injectable } from '@angular/core';
import { Item } from './items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  cartItems: Item[] = [];

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: Item) {
    this.cartItems.push(item);
  }

  removeFromCart(removedItem: Item) {
    this.cartItems = this.cartItems.filter(item => item.title !== removedItem.title);
  }
}
