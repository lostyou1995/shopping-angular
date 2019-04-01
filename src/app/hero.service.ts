import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
    private token: string;
    private quantity = new BehaviorSubject(0);
    currentQuantity = this.quantity.asObservable();
    urlProduct = 'http://localhost:6969/api/product/';
    urlLogin = 'http://localhost:6969/api/auth/login/';
    urlAccount= "http://localhost:6969/api/account/";
    newOrderList: Array<Hero> = [];

    constructor(private http: HttpClient) { 

    }

    getHeroes(): Observable<any> {
        return this.http.get(this.urlProduct);
    }

    getProductFromId(id: String) {
        return this.http.get(this.urlProduct + "findProductById/" + id);
    }

    updateQuantity(quantityNew: number) {
        this.quantity.next(quantityNew);
    }

    addProduct(product, quantity) {
        var currentProduct = this.newOrderList.find(item => item._id === product._id);
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

    login(account: any) {
        console.log(account);
        return this.http.post(this.urlLogin, account);
    }

    registerAccount(account: any) {
        return this.http.post(this.urlAccount + "create/", account);
    }

    isExistUsername(username: any) {
        return this.http.get(this.urlAccount + "isExistUsername/" + username);
    }

    saveToken(token: string) {
        this.token = token;
        localStorage.setItem("TOKEN_USER", token);
    }

    /**
     * @private
     * @summary Get token when login
     * @function getToken
     * @returns {String} Value string token
     */
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem("TOKEN_USER");
        }
        return this.token;
    }
}
