import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
 
  plus! : string ;
  constructor() { }

  ngOnInit(): void {
    
    this.plus = './assets/logo_icon/plus.svg';
  }

}
