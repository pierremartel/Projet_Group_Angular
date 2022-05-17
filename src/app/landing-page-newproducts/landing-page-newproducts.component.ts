import { Component, OnInit } from '@angular/core';
import { ListProductsService } from '../services/list-products.service';
import { ListProducts } from '../models/product.model';


@Component({
  selector: 'app-landing-page-newproducts',
  templateUrl: './landing-page-newproducts.component.html',
  styleUrls: ['./landing-page-newproducts.component.css']
})
export class LandingPageNewproductsComponent implements OnInit {
  products! : ListProducts[];
  arrow_g! : string;
  arrow_d! : string;

  
    constructor(private listproductservice:ListProductsService) { }
  
    ngOnInit(): void {
    this.arrow_g = './assets/logo_icon/arrow_gauche.png';
    this.arrow_d = './assets/logo_icon/arrow_droite.png';


      this.products = this.listproductservice.getAllProducts();
     
    }

}
