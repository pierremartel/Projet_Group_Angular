import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
banniere! : string;
carrots! : string;
pickles! : string;
pasta! : string;
clementine! : string;
beef! : string;
chicken! : string;
sausages! : string;
arrow_d! : string;
arrow_g! : string;


  constructor() { }

  ngOnInit(): void {
    this.banniere = './assets/photos/banniere.jpg';
    this.carrots = './assets/photos/carotes.jpg';
    this.pickles = './assets/photos/cornichons.jpg';
    this.pasta = './assets/photos/pâtes.jpg';
    this.chicken = './assets/photos/Filets_de_poitrine_de_poulet_crus.jpg';
    this.sausages = './assets/photos/Saucisse_crue.jpg';
    this.beef = './assets/photos/Viande_crue_hachée.jpg';
    this.clementine = './assets/photos/clementine.jpg';
    this.arrow_d = './assets/logo_icon/arrow_droite.png';
    this.arrow_g = './assets/logo_icon/arrow_gauche.png';
  }

}
