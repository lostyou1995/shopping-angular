import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

enum Action {
  AddToCart = "ADD_TO_CART",
  ViewDetail = "VIEW_DETAIL",
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes = Heroes;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero, type: String): void {
    switch (type) {
      case Action.AddToCart:
        console.log("add to cart");
        break;
      case Action.ViewDetail:
        console.log("View detail");
        break;
    }
  }

  setFavorite(event: any) {
    var classList = event.target.classList;
    var isFavorite = classList.contains('far');

    if (isFavorite) {
      classList.remove('far');
      classList.add('fas');
    } else {
      classList.remove('fas');
      classList.add('far');
    }

  }

}
