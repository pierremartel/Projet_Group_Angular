import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-page-products',
  templateUrl: './single-page-products.component.html',
  styleUrls: ['./single-page-products.component.css']
})
export class SinglePageProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackTo(): void {
    this.router.navigateByUrl('produits')
  }

}
