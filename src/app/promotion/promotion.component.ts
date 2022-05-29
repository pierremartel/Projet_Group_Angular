import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-promotion', 
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  $user_role: any = sessionStorage.getItem('role');


  newProducts = [];

  ngOnInit(): void {
    
    this.http.get<any>('http://localhost:8000/nouveautes').subscribe(data => {
      console.log(data);

      for (let i = 0; i < data.length; i++){
       data[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + data[i].imageFileName
      }
          console.log(data);
          this.newProducts = data
           })


      // this.products = this.listproductservice.getAllProducts();
     
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

  


