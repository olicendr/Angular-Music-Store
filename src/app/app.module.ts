import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    MainComponent,
    CustomButtonComponent,
    CartComponent,
    FavoritesComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot([
    { path: '', component: MainComponent },
    { path: 'cart', component: CartComponent },
    { path: 'favorites', component: FavoritesComponent }
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
