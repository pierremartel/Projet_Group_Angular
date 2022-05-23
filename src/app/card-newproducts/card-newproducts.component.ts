import { Component, Input, OnInit } from '@angular/core';
import { ListProducts } from '../models/product.model';
import { Router } from '@angular/router';


@Component({
  selector: "app-card-newproducts",
  templateUrl: "./card-newproducts.component.html",
  styleUrls: ["./card-newproducts.component.css"]
})
export class CardNewproductsComponent implements OnInit {

  @Input() product!: ListProducts;

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  onShowProduct(): void {
    this.router.navigateByUrl('produits/id')
  }



}
