import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place';
import { CartService } from '../cart.service';
import { FoodComponent } from '../food/food.component'

places : Array<Place>();

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

  constructor(private cartService: CartService) { 
  }
  
  ngOnInit() {
    this.places = cartService.getItems() 
  }

}