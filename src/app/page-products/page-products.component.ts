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

  $user_role: any = sessionStorage.getItem('role');

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
  }

  selectByCat(id:any){
    this.http.get<any>('http://localhost:8000/products/categories/' + id).subscribe(data => {
      console.log('categories', data)

      for (let i = 0; i < data.length; i++){
        data[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + data[i].imageFileName
      }
          // console.log(data);
          this.products = data
          })
  }

  

  onAddProduct(): void {
    this.router.navigateByUrl('produits/ajouter')
  }
  

}
