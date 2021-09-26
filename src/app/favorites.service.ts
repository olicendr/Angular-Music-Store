import { Injectable } from '@angular/core';
import { Item } from './items';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor() { }
  favoritesItems: Item[] = [];

  getFavoriteItems() {
    return this.favoritesItems;
  }

  addToFavorites(item: Item) {
    this.favoritesItems.push(item)
  }

  removeFromFavorites(removedItem: Item) {
    this.favoritesItems = this.favoritesItems.filter(item => item.title === removedItem.title)
  }
}
