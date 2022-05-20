import { Component, OnInit } from '@angular/core';
import { ListProducts } from '../models/product.model';

@Component({
  selector: 'app-landing-page-bestsell',
  templateUrl: './landing-page-bestsell.component.html',
  styleUrls: ['./landing-page-bestsell.component.css']
})
export class LandingPageBestsellComponent implements OnInit {

  products! : ListProducts[];
  arrow_g! : string;
  arrow_d! : string;

  
    constructor() { }
  
    ngOnInit(): void {
      this.arrow_g = './assets/logo_icon/arrow_gauche.png';
      this.arrow_d = './assets/logo_icon/arrow_droite.png';

      

    }
  
  }
  
