import { Component, Input, OnInit } from '@angular/core';
import { ListProducts } from '../models/product.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: "app-card-newproducts",
  templateUrl: "./card-newproducts.component.html",
  styleUrls: ["./card-newproducts.component.css"]
})
export class CardNewproductsComponent implements OnInit {

  $user_id: any = sessionStorage.getItem('id');

  @Input() product!: ListProducts;

  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  onShowProduct(): void {
    this.router.navigateByUrl('produits/id')
  }

  addToCart(productId:any) : void {

    let addCartData = new FormData();

    addCartData.append("product_id", productId);

    addCartData.append("user_id", this.$user_id);

    this.http.post('http://localhost:8000/cart/add', addCartData).subscribe(result => {
        console.log('addProduct', result );
  })
}



}
