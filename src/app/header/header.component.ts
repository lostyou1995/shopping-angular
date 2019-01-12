import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isScroll: boolean = false;
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestry() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll(event) {
    var elementHeader = document.getElementById('header');
    var sticky = elementHeader.offsetTop;
    if (window.pageYOffset > sticky) {
      elementHeader.classList.add('sticky');
      console.log("add class", elementHeader.classList);
    } else {
      elementHeader.classList.remove('sticky');
    }
    console.log("scroll", sticky);
  };
}
