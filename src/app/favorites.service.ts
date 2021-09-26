import { Injectable } from '@angular/core';
import { Item } from './items';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor() { }
  favoritesItems: Item[] = [];

  getFavoriteItems() {
    let localData: any = window.localStorage.getItem("favoriteItems");

    if (JSON.parse(localData).length) {
      this.favoritesItems = JSON.parse(localData);
    }
    return this.favoritesItems;
  }

  addToFavorites(item: Item) {
    this.favoritesItems.push(item);
    localStorage.setItem("favoriteItems", JSON.stringify(this.favoritesItems));
  }

  removeFromFavorites(removedItem: Item) {
    this.favoritesItems = this.favoritesItems.filter(item => item.title !== removedItem.title);
    localStorage.setItem("favoriteItems", JSON.stringify(this.favoritesItems));
  }
}
