import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @HostListener('window:scroll') 
banniere! : string;
icone! : string;



  constructor(private scroll: ViewportScroller, private router:Router) { }

  ngOnInit(): void {
    this.banniere = './assets/photos/banniere2.jpg';
    this.icone = './assets/logo_icon/arrow-p.svg';
    
  }

  onScrollTop() {
    this.scroll.scrollToPosition([0,0]);
    
  }

  onShowProducts(): void {
    this.router.navigateByUrl('produits');
  }

  

}
