import { Component, Input, OnInit } from '@angular/core';
import { ListProducts } from '../models/product.model';
import { ListProductsService } from '../services/list-products.service';


@Component({
  selector: "app-card-newproducts",
  templateUrl: "./card-newproducts.component.html",
  styleUrls: ["./card-newproducts.component.css"]
})
export class CardNewproductsComponent implements OnInit {

  @Input() product!: ListProducts;

  // carrots! : string;
  // pickles! : string;
  // pasta! : string;
  // clementine! : string;
  // beef! : string;
  // chicken! : string;
  // sausages! : string;
  // arrow_d! : string;
  // arrow_g! : string;

  constructor(private listproductsservices: ListProductsService) { }

  ngOnInit(): void {
    // this.carrots = './assets/photos/carotes.jpg';
    // this.pickles = './assets/photos/cornichons.jpg';
    // this.pasta = './assets/photos/pâtes.jpg';
    // this.chicken = './assets/photos/Filets_de_poitrine_de_poulet_crus.jpg';
    // this.sausages = './assets/photos/Saucisse_crue.jpg';
    // this.beef = './assets/photos/Viande_crue_hachée.jpg';
    // this.clementine = './assets/photos/clementine.jpg';
    // this.arrow_d = './assets/logo_icon/arrow_droite.png';
    // this.arrow_g = './assets/logo_icon/arrow_gauche.png';
  }

  

}
