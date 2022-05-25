import { Component, OnInit, Input } from '@angular/core';
import { ListProducts } from '../models/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-page-products',
  templateUrl: './list-page-products.component.html',
  styleUrls: ['./list-page-products.component.css']
})
export class ListPageProductsComponent implements OnInit {

  @Input() product!: ListProducts;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onShowProduct(): void {
    this.router.navigateByUrl('/produits/:id')
  }

}
