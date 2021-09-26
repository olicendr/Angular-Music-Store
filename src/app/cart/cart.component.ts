import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService) { }

  items = this.cartService.getCartItems();

  removeFromCart(removedItem: Item) {
    this.items = this.items.filter(item => item !== removedItem);
    this.cartService.removeFromCart(removedItem);
  }
}
