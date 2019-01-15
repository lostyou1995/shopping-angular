import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes} from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(Heroes);
  }

  getHeroFromID(id: number): Observable<Hero> {
    return of(Heroes.find(hero => hero.id === id));
  }

}
