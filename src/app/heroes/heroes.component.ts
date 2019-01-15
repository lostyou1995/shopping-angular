import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';
import { HeroService} from '../hero.service';

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
  heroes: Hero[];
  selectedHero: any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero, type: String): void {
    switch (type) {
      case Action.AddToCart:
        console.log("add to cart");
        break;
      case Action.ViewDetail:
        this.selectedHero = hero;
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

  getHeroes() {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
