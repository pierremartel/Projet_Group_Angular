import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
  // image="";
  // title="";
  // price="";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
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

  // parentProducts(data:any) {
  //   console.warn(data)
  //   this.image=data.image;
  //   this.title=data.title;
  //   this.price=data.price;
  // }
  

}
