import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productId!: number;
  
  constructor(private router: Router,
              private http: HttpClient,
              private route: ActivatedRoute,) { }

  products = [];

  ngOnInit(): void {
    

    // this.http.get<any>('http://localhost:8000/products').subscribe(data => {
    //   // console.log(data)

    //   for (let i = 0; i < data.length; i++){
    //    data[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + data[i].imageFileName
    //   }
    //       // console.log(data);
    //       this.products = data
    //        })
     

  }

  

  onAddProduct(): void {
    this.router.navigateByUrl('produits/ajouter')
  }

  onUpdateProduct(): void {
    this.router.navigateByUrl('produits/modifier')
  }

  onDeleteProduct(): void {
    this.router.navigateByUrl('produits/supprimer')
  }

}