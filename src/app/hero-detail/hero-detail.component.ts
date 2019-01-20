import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  lastValue: any = 1;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) {}

  ngOnInit() {
    this.getHeroFromID();
  }

  onKey(event) {
    if (event.target.value.length > 3) {
      event.target.value = this.lastValue;
      return false;
    }
    this.lastValue = event.target.value;
  }

  onMinus() {
    this.lastValue = parseInt(this.lastValue, 10) + 1;
  }

  onPlus() {
    this.lastValue = parseInt(this.lastValue, 10) - 1;
    if (this.lastValue < 0) {
      this.lastValue = 0;
    }
  }

  getHeroFromID() {
    console.log("Get hero from ID");
    const id = + this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroFromID(id)
    .subscribe(hero =>this.hero = hero);
  }

}
