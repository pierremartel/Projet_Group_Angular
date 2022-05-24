import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
  // image="";
  // title="";
  // price="";
  
  constructor(private router: Router, private http: HttpClient) { }

  products = [];

  ngOnInit(): void {
    
    this.http.get<any>('http://localhost:8000/products').subscribe(data => {

      for (let i = 0; i < data.length; i++){
       data[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + data[i].imageFileName
      }
          console.log(data);
          this.products = data
           })

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
