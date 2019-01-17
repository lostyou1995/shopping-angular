import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.css']
})


export class SliderImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(document).ready(function(){
      $('.slider').slider();
    });

  }

}
