import { Component, OnInit } from '@angular/core';
import { Item, items } from '../items';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  items = items;

  constructor(
    private cartService: CartService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {

  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

  addToFavorites(item: Item) {
    this.favoritesService.addToFavorites(item);
  }

}
