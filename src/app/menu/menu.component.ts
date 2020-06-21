import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  selectedDish: Dish;

  constructor() { }

  ngOnInit() {
  }
  
  hack(val) {
    console.log('Before:');
    console.log(val);
    var commentArray = Array.from(val);
    console.log('After:');
    console.log(val);
    return commentArray;
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
    this.hack(dish.comments)
  }

}
