import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import  { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-popover-cart',
  templateUrl: './popover-cart.component.html',
  styleUrls: ['./popover-cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PopoverCartComponent {
  newOrderList: any;
  constructor(private heroService: HeroService) {

   }
    ngOnInit() {
        this.newOrderList = this.heroService.getNewOrderList();
        console.log(this.newOrderList, "order list");
    }

    showCart() {
        this.newOrderList = this.heroService.getNewOrderList();
        console.log(this.newOrderList, "show order list");
    }
}
