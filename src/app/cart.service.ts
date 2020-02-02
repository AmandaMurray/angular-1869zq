import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root',
})

export class CartService{
  places = [];


constructor(
  private http: HttpClient
) {}

getItems(){
  //let list = this.http.get("http://localhost:8000/")
  return ['yellow', 'green', 'red'];
  //iterate through the list and create a food object for each.
  //try not to die
}
}