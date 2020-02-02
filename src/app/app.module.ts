import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { HolderComponent } from './holder/holder.component';
import { HeaderComponent } from './header/header.component';
import { CartService } from './cart.service';
providers: [
  CartService
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, FoodComponent, HolderComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
