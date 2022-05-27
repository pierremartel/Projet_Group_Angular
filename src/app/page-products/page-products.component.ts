import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
  productId!: number;

  // image="";
  // title="";
  // price="";
  
  constructor(private router: Router,
              private http: HttpClient,
              private route: ActivatedRoute,) { }

  products = [];

  ngOnInit(): void {
    

    this.http.get<any>('http://localhost:8000/products').subscribe(data => {
      // console.log(data)

      for (let i = 0; i < data.length; i++){
       data[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + data[i].imageFileName
      }
          // console.log(data);
          this.products = data
           })




    //   this.productId = this.route.snapshot.params['id'];
    //  console.log(this.productId);

    // this.route.params.subscribe(params => {
    //   console.log(+params['id']);
    // });
     
    // this.http.get<any>('http://localhost:8000/product/').subscribe(id => {
    //   console.log(id)

      // for (let i = 9; i < id.length; i++){
      //  id[i].imageFileName = 'http://localhost:8000/uploads/images/product/' + id[i].imageFileName
      // }
      //     // console.log(data);
      //     this.productId = id
          //  })
     

  }

  

  onAddProduct(): void {
    this.router.navigateByUrl('produits/ajouter')
  }

  onUpdateProduct(): void {
    this.router.navigateByUrl('produits/modifier')
  }

  onShowProduct(): void {
    this.router.navigateByUrl('produits/id')
  }

  onDeleteProduct(): void {
    this.router.navigateByUrl('produits/supprimer')
  }
  

}
