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

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) {}

  ngOnInit() {
    this.getHeroFromID();
  }

  getHeroFromID() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.heroService.getHeroFromID(id)
    .subscribe(hero =>this.hero = hero);
  }

}
