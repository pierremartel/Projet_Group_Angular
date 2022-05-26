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
  title! : any;
  
  constructor(private router: Router,
              private http: HttpClient,
              private route: ActivatedRoute,) { }

  products = [];

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');

      // console.log(id);
    });

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