import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

    private quantity = new BehaviorSubject(0);
    currentQuantity = this.quantity.asObservable();
    urlProduct = '../assets/db-json/product.json';
    newOrderList: Array<Hero> = [];

    constructor(private http: HttpClient) { 

    }

    getHeroes(): Observable<any> {
        return this.http.get(this.urlProduct);
    }

    getHeroFromID(id: number) {
        return this.http.get(this.urlProduct)
        .pipe (
            map(function(res: Array<Hero>) {
                return res.find(item => item.id === id);
            })
        );
    }

    updateQuantity(quantityNew: number) {
        this.quantity.next(quantityNew);
    }

    addProduct(product, quantity) {
        var currentProduct = this.newOrderList.find(item => item.id === product.id);
        if (currentProduct) {
            currentProduct.quantity = quantity;
        } else {
            product.quantity = quantity;
            this.newOrderList.push(product);
        }
    }

    getNewOrderList() {
        return this.newOrderList;
    }

    getTotalQuantity() {
        var totalQuantity = 0;
        for (var item of this.newOrderList) {
            totalQuantity += item.quantity;
        }
        return totalQuantity;
    }
}
