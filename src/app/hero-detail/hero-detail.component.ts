import { Component, OnInit, Input, QueryList, ElementRef, ViewChild, ViewChildren, Output, EventEmitter} from '@angular/core';
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
    @Input() hero: any;
    lastValue: number = 0;
    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) {}

    ngOnInit() {
        this.getProductFromId();
        this.heroService.currentQuantity.subscribe(quantity => this.lastValue = quantity);
        this.lastValue = 1;

        console.log("ngOnInit Last value hero detail", this.lastValue);
    }

    onKey(event) {
        if (event.target.value.length > 3) {
            event.target.value = this.lastValue;
            return false;
        }

        this.lastValue = event.target.value;
    }

    onMinus() {
        this.lastValue = this.lastValue + 1;
    }

    onPlus() {
        this.lastValue = this.lastValue - 1;
        if (this.lastValue < 0) {
            this.lastValue = 0;
        }
    }

    getProductFromId() {
        console.log("Get hero from ID");
        const id = this.route.snapshot.paramMap.get('id');
        this.heroService.getProductFromId(id).subscribe(heros => this.hero = heros);

    }

    addToCart(hero) {
        this.heroService.addProduct(hero, this.lastValue);
        console.log(this.lastValue);
        this.heroService.updateQuantity(this.heroService.getTotalQuantity());
        console.log(this.heroService.getNewOrderList());
        this.lastValue = hero.quantity;
        console.log(hero, this.lastValue);
    }
}
