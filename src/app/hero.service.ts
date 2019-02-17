import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes} from './mock-heroes';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

    private quantity = new BehaviorSubject(0);
    currentQuantity = this.quantity.asObservable();

    constructor() { }

    getHeroes(): Observable<Hero[]> {
        return of(Heroes);
    }

    getHeroFromID(id: number): Observable<Hero> {
        return of(Heroes.find(hero => hero.id === id));
    }

    updateQuantity(quantityNew: number) {
        this.quantity.next(quantityNew);
    }
}
