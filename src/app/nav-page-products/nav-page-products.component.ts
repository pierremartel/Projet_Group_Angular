import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-page-products',
  templateUrl: './nav-page-products.component.html',
  styleUrls: ['./nav-page-products.component.css']
})
export class NavPageProductsComponent implements OnInit {

  meat! :string ;
  fish! :string ;
  drink! :string ;
  fruit! :string ;
  vegetable! :string ;

  constructor() { }

  ngOnInit(): void {
    this.meat = './assets/photos/viande.png'
    this.fish = './assets/photos/poisson.png'
    this.drink = './assets/photos/boisson.png'
    this.fruit = './assets/photos/fruit.png'
    this.vegetable = './assets/photos/legume.png'
  }

}
