import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @HostListener('window:scroll') 
banniere! : string;
icone! : string;



  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
    this.banniere = './assets/photos/banniere.jpg';
    this.icone = './assets/logo_icon/arrow-p.svg';
    
  }

  onScrollTop() {
    this.scroll.scrollToPosition([0,0]);
    
  }

  

}
