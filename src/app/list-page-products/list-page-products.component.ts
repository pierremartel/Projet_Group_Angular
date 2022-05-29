import { Component, OnInit, Input } from '@angular/core';
import { ListProducts } from '../models/product.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-page-products',
  templateUrl: './list-page-products.component.html',
  styleUrls: ['./list-page-products.component.css']
})
export class ListPageProductsComponent implements OnInit {

  $user_id: any = sessionStorage.getItem('id');

  $user_role: any = sessionStorage.getItem('role');

  @Input() product!: ListProducts;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onShowProduct(): void {
    this.router.navigateByUrl('/produits/:id')
  }

  addToCart(productId:any) : void {

    let addCartData = new FormData();

    addCartData.append("product_id", productId);

    addCartData.append("user_id", this.$user_id);

    this.http.post('http://localhost:8000/cart/add', addCartData).subscribe(result => {
        console.log('addProduct', result );
  })
}

onDeleteProduct(ProductId:any) : void{
  this.http.get('http://localhost:8000/admin/product/delete/' + ProductId).subscribe(result => {
        console.log('deleteProduct', result );
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['produits']));
  })
}

}
