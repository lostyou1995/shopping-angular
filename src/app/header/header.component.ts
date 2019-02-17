import { Component, OnInit } from '@angular/core';
import {transition, state, trigger, style, animate} from '@angular/animations';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('transitonInput', [
      state('small', style({
        
      })),
      state('large', style({
        width: '400px',
      })),
      transition('small => large', animate('350ms ease-in')),
      transition('large => small', animate('350ms ease-in'))

    ]),
  ]
})

export class HeaderComponent implements OnInit {
    state: string = 'small'

    constructor() { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestry() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll(event) {
        console.log("scroll", event.target.type);
    }

    onSeletedInput(event) {
        this.state = (this.state === 'small' ? 'large' : 'small');
    }

    onUnseletedInput(event) {
        this.state = (this.state === 'large' ? 'small' : 'large');
    }

    transitionDone(event) {
      var textPlaceHolder = (this.state === 'large' ? '' : 'search,...');
      event.element.placeholder = textPlaceHolder;
    }
}
