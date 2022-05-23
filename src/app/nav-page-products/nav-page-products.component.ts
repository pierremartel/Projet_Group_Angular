import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-page-products',
  templateUrl: './nav-page-products.component.html',
  styleUrls: ['./nav-page-products.component.css']
})
export class NavPageProductsComponent implements OnInit {

@Output() parentProducts:EventEmitter<any> = new EventEmitter();

  products="";
  meat! :string ;
  fish! :string ;
  drink! :string ;
  fruit! :string ;
  vegetable! :string ;

  constructor() { }

  ngOnInit(): void {
    this.meat = './assets/photos/viande.png';
    this.fish = './assets/photos/poisson.png';
    this.drink = './assets/photos/boisson.png';
    this.fruit = './assets/photos/fruit.png';
    this.vegetable = './assets/photos/legume.png';

  
  }

  sendData(){
      let data={image: './assets/photos/produit_1.jpg', title:'Pâtes aux blé complet', price:'5'}
    this.parentProducts.emit(data)
  }

  
}
