import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item, items } from '../items';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  items: any = [];

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private favoritesService: FavoritesService
  ) {
    this.http.get("https://61372140eac1410017c18156.mockapi.io/storeData").toPromise().then(data => {
      this.items = data;
    })
  }

  ngOnInit(): void {

  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

  addToFavorites(item: Item) {
    this.favoritesService.addToFavorites(item);
  }

}
