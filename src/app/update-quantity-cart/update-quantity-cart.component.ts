import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";

@Component({
    selector: 'app-update-quantity-cart',
    templateUrl: './update-quantity-cart.component.html',
    styleUrls: ['./update-quantity-cart.component.css']
})
export class UpdateQuantityCartComponent implements OnInit {

    quantity: number = 0;
    constructor(private heroService: HeroService) {

    }

    ngOnInit() {
        this.heroService.currentQuantity.subscribe(quantity => this.quantity = quantity);
        console.log("ngOnInit - Update quantity cart", this.quantity);
    }

}
