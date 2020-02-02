import { Component, OnInit } from '@angular/core';
import { Place } from '../place'
place : Place
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}