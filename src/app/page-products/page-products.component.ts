import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
 

  plus! : string ;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.plus = './assets/logo_icon/plus.svg';

  }

  onAddProduct(): void {
    this.router.navigateByUrl('produits/ajouter')
  }

  onUpdate(): void {
    this.router.navigateByUrl('produits/modifier')
  }

  onShowProduct(): void {
    this.router.navigateByUrl('produits/id')
  }

  

}
