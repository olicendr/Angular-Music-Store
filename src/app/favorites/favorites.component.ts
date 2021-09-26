import { Component } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Item } from '../items';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  constructor(private favoriteService: FavoritesService) { }

  items = this.favoriteService.getFavoriteItems();

  removeFromFavorites(removedItem: Item) {
    this.items = this.items.filter(item => item !== removedItem);
    this.favoriteService.removeFromFavorites(removedItem);
  }
}
